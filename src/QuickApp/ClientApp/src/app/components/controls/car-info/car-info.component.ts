import { Component, OnInit } from '@angular/core';
import { Car } from '../../../models/car';
import { CarService } from '../../../services/car.service';
import { ConfigurationService } from '../../../services/configuration.service';
import { Payment, Service, Color, CarType, Status } from '../../../models/enums';
import { error } from 'selenium-webdriver';

@Component({
    selector: 'car-info',
    templateUrl: './car-info.component.html',
    styleUrls: ['./car-info.component.css']
})

export class CarInfoComponent implements OnInit {
    public cars: Car[] = [];
    public now: Date = new Date();
    public carsAmount: number;

    public cash: number;
    public card: number;
    logo = require('../../../assets/images/background.jpg');

    constructor(private carInfo: CarService) {}

    ngOnInit(): void {
        this.carInfo.getCarList()
        .subscribe(
            data =>  { this.cars = data; this.workWithData(); }
        );
    }

    workWithData () {
        this.filterPayments(this.cars);
        this.carsAmount = this.cars.length;
        this.cars.forEach(element => {
            element.color = this.getBindings(element.color, Color),
            element.washType = this.getBindings(element.washType, Service),
            element.status = this.getBindings(element.status, Status);
        });
    }

    filterPayments (carInfo: Car[]) {
        this.cash = 0;
        this.card = 0;
        const cash = carInfo.filter(x => Number(x.payment) === Payment.Cash);
        const card = carInfo.filter(x => Number(x.payment) === Payment.Card);
        cash.forEach(x => this.cash += x.cost );
        card.forEach(x => this.card += x.cost );
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
