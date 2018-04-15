import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ICar, Car } from '../../../models/car';
import { CarService } from '../../../services/car.service';
import { ConfigurationService } from '../../../services/configuration.service';
import { Payment, Service, Color, CarType, WorkMode, Status } from '../../../models/enums';
import { fadeInOut } from '../../../services/animations';
import { FormGroup, Form, NgForm } from '@angular/forms';
import { AlertService, MessageSeverity } from '../../../services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'car-data',
    templateUrl: './car-data.component.html',
    styleUrls: ['./car-data.component.css'],
    animations: [fadeInOut]
})

export class CarDataComponent implements OnInit {

    @ViewChild('createForm')
    createForm: NgForm;

    @Input() editMode: boolean;
    @Input() mode: number;

    public id: number;
    public car: ICar = new Car();
    public prod: any;
    public map: { id: number; name: string }[] = [];
    public arrColor: { id: number; name: string }[] = [];
    public arrCarType: { id: number; name: string }[] = [];
    public arrPayment: { id: number; name: string }[] = [];

    constructor(private carInfo: CarService,
                public configurations: ConfigurationService,
                private alertService: AlertService,
                private router: Router,
                private route: ActivatedRoute
            ) {
    }

    ngOnInit(): void {
        if (this.mode === WorkMode.Edit || this.mode === WorkMode.GiveBack) {
            this.route.params.subscribe(params => {
                this.id = +params['id'];
             });
            this.carInfo.getCarById(this.id)
                .subscribe(data => this.car = data);
        }
        this.enumToArray(Service, this.map);
        this.enumToArray(Color, this.arrColor);
        this.enumToArray(CarType, this.arrCarType);
        this.enumToArray(Payment, this.arrPayment);
    }

    save(test: any) {
        console.log(test);
    }

    enumToArray(data: any, arr: any) {
        for (const n in data) {
            if (typeof data[n] === 'number') {
                arr.push({
                    id: <any>data[n],
                    name: n
                });
            }
        }
    }

    onSubmit() {

        if (this.createForm['status'] === 'VALID') {
            switch (this.mode) {
                case WorkMode.Create: {
                    this.car.arrivalTime = new Date();
                    this.car.status = Status.Waiting.toString();
                    this.carInfo.createCar(this.car).subscribe(() => {
                        this.alertService.showMessage('Success!', `Car added to  rezerwation list`, MessageSeverity.success);
                        this.router.navigateByUrl('/home');
                        });
                        break;
                }
                case WorkMode.Edit: {
                    this.carInfo.updateCar(this.car).subscribe(() => {
                        this.alertService.showMessage('Success!', `Car updated`, MessageSeverity.success);
                        this.router.navigateByUrl('/home');
                        });
                        break;
                }
                case WorkMode.Rezerwation: {
                    this.car.status = Status.Rezerwation.toString();
                    this.carInfo.createCar(this.car).subscribe(() => {
                        this.alertService.showMessage('Success!', `Car added to  rezerwation list`, MessageSeverity.success);
                        this.router.navigateByUrl('/home');
                        });
                        break;
                }
                case WorkMode.GiveBack: {
                    this.car.pickUpTime = new Date();
                    this.car.status = Status.Oddane.toString();
                    this.carInfo.updateCar(this.car).subscribe(() => {
                        this.alertService.showMessage('Success!', `Car successfully has been given back`, MessageSeverity.success);
                        this.router.navigateByUrl('/home');
                        });
                        break;
                }
            }
        } else {
            this.alertService.showMessage('Warning!', `Please choose all labels`, MessageSeverity.warn);
        }
    }

}
