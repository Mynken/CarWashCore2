import { Component, OnInit } from '@angular/core';
import { Car, ICar } from '../../../models/car';
import { CarService } from '../../../services/car.service';
import { ConfigurationService } from '../../../services/configuration.service';
import { Service, Color, Status} from '../../../models/enums';
import { AlertService, MessageSeverity } from '../../../services/alert.service';

@Component({
    selector: 'car-finish',
    templateUrl: './car-finish.component.html',
    styleUrls: ['./car-finish.component.css']
})

export class CarFinishComponent implements OnInit {

    public cars: Car[] = [];
    public car: ICar = new Car();
    public listCars: Car[] = [];
    public test: Car[] = [];
    constructor(private carInfo: CarService,  private alertService: AlertService) {}

    ngOnInit(): void {
        this.carInfo.getCarList()
        .subscribe(
            data => { console.log(data);
                this.cars = data;
                this.listCars = data;
                console.log(this.listCars);
                this.workWithData(); }
        );

        this.carInfo.getCarList()
        .subscribe(
            data => { this.test = data; }
        );

    }

    workWithData () {
        this.cars = this.cars.filter(x => Number(x.status) === Status.Finished);
        this.cars.forEach(element => {
            element.color = this.getBindings(element.color, Color),
            element.washType = this.getBindings(element.washType, Service);
        });
    }

    // changeStatus(id: number) {
    //     console.log(this.test);
    //     this.car = this.test.filter(x => x.carId === id)[0];
    //     console.log(this.car);
    //     this.car.status = Status.Finished.toString();
    //     this.carInfo.updateCar(this.car)
    //         .subscribe( () => {
    //             this.alertService.showMessage('Success!', `Car updated`, MessageSeverity.success);
    //             this.cars = this.cars.filter(x => x.carId !== id);
    //         });
    // }

    getBindings(valueId: any, arr: any) {
        for (const prop in arr) {
            if (Number(prop) === valueId) {
              return arr[prop];
            }
          }
    }
}
