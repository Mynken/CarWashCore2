import { Component, OnInit, ViewChild } from '@angular/core';
import { Car, ICar } from '../../../models/car';
import { CarService } from '../../../services/car.service';
import { ConfigurationService } from '../../../services/configuration.service';
import { Service, Color, CarType, Status} from '../../../models/enums';
import { AlertService, MessageSeverity } from '../../../services/alert.service';
import { Form } from '@angular/forms';
import { fadeInOut } from '../../../services/animations';
import { error } from 'util';

@Component({
    selector: 'user-manage-car',
    templateUrl: './user-manage-car.component.html',
    styleUrls: ['./user-manage-car.component.css'],
    animations: [fadeInOut]
})

export class UserManageCarComponent implements OnInit {

    @ViewChild('createForm')
    createForm: Form;
    public car: ICar = new Car();
    public carData: ICar = new Car();
    public arrService: { id: number; name: string }[] = [];
    public arrColor: { id: number; name: string }[] = [];
    public arrCarType: { id: number; name: string }[] = [];

    public str = '';
    public getCarInfoSection = false;
    public videoSection = false;
    public priceSection = false;
    public notFound = false;
    public rezerwationSection = false;
    constructor(private carInfo: CarService,
                private alertService: AlertService) {}

    ngOnInit(): void {
        this.enumToArray(Service, this.arrService);
        this.enumToArray(Color, this.arrColor);
        this.enumToArray(CarType, this.arrCarType);
    }

    checkInfo(): any {
        this.getCarInfoSection = false;
        this.videoSection = false;
        this.priceSection = false;
        this.rezerwationSection = false;
        this.notFound = false;
        switch (this.str.trim()) {
            case '/rezerwateWash' :
                this.rezerwationSection = true;
                break;
            case '/video' :
                this.videoSection = true;
                break;
            case '/priceList' :
                this.priceSection = true;
                break;
            default:
                if (this.str.toLowerCase().startsWith('/getcarinfo')) {
                    console.log(this.str);
                    let regNumber = this.str.split('<')[1];
                    regNumber = regNumber.split('>')[0];
                    this.carInfo.getCarByName(regNumber)
                    .subscribe(data => this.carData = data,
                        // tslint:disable-next-line:no-shadowed-variable
                        error => this.alertService.showMessage('Error!', `Not found`, MessageSeverity.error),
                        () => { this.getCarInfoSection = true;
                            this.carData.status = Status[this.carData.status]; } );

                    break;
                }
                this.notFound = true;
            break;
        }
        this.str = '';
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
         // this.createForm['status'] === 'VALID'
         if (5 > 1) {
            this.carInfo.createCar(this.car).subscribe(() => {
                this.alertService.showMessage('Success!', `Car added to  rezerwation list`, MessageSeverity.success);
                this.rezerwationSection = false;
                });
         }
    }
}
