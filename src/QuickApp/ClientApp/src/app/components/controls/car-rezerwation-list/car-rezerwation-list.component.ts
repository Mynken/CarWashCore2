import { Component, OnInit } from '@angular/core';
import { Car } from '../../../models/car';
import { CarService } from '../../../services/car.service';
import { ConfigurationService } from '../../../services/configuration.service';
import { Payment, Service, Color, CarType, Status } from '../../../models/enums';
import { error } from 'selenium-webdriver';

@Component({
    selector: 'car-rezerwation-list',
    templateUrl: './car-rezerwation-list.component.html',
    styleUrls: ['./car-rezerwation-list.component.css']
})

export class CarRezerwationListComponent implements OnInit {
    public cars: Car[] = [];
    public now: Date = new Date();

    logo = require('../../../assets/images/background.jpg');

    constructor(private carInfo: CarService) {}

    ngOnInit(): void {
        this.carInfo.getCarList()
        .subscribe(
            data =>  { this.cars = data;
                this.workWithData(); }
        );
    }

    workWithData () {
        console.log(this.cars);
        this.cars = this.cars.filter(x => x.status.toString() === Status.Rezerwation.toString());
        this.cars.forEach(element => {
            element.color = this.getBindings(element.color, Color),
            element.washType = this.getBindings(element.washType, Service),
            element.status = this.getBindings(element.status, Status);
        });
    }


    deleteCar(id: number) {
        this.carInfo.deleteCar(id)
            .subscribe(
                data => data,
                // tslint:disable-next-line:no-shadowed-variable
                error => console.log(),
                () => { this.cars = this.cars.filter(x => x.carId !== id); } );
    }

    getBindings(valueId: any, arr: any) {
        for (const prop in arr) {
            if (Number(prop) === Number(valueId)) {
              return arr[prop];
            }
          }
    }
}
