import { Component, OnInit } from '@angular/core';
import { Car, ICar } from '../../../models/car';
import { CarService } from '../../../services/car.service';
import { ConfigurationService } from '../../../services/configuration.service';
import { Service, Color, Status} from '../../../models/enums';
import { AlertService, MessageSeverity } from '../../../services/alert.service';

@Component({
    selector: 'car-inwork',
    templateUrl: './car-inwork.component.html',
    styleUrls: ['./car-inwork.component.css']
})

export class CarInworkComponent implements OnInit {

    public cars: Car[] = [];
    public car: ICar = new Car();
    public listCars: Car[] = [];
    public test: Car[] = [];
    constructor(private carInfo: CarService,  private alertService: AlertService) {}

    ngOnInit(): void {
        this.carInfo.getCarList()
        .subscribe(
            data => { this.listCars = data;
                console.log(this.listCars);
                // this.listCars = data;
                // console.log(this.listCars);
                // // this.cars = data;
                // const newList = this.workWithData(data);
                // console.log(newList);
            }
        );

        const newList = this.workWithData(this.listCars);
        console.log(newList);

        this.carInfo.getCarList()
        .subscribe(
            data => { this.test = data; }
        );

    }

    workWithData (cars) {
        cars = cars.filter(x => Number(x.status) === Status.InWork);

        const newList = cars;

        newList.forEach(element => {
            element.color = this.getBindings(element.color, Color),
            element.washType = this.getBindings(element.washType, Service);
        });

        return newList;
    }

    changeStatus(id: number) {
        console.log(this.listCars);
        this.car = this.test.filter(x => x.carId === id)[0];
        console.log(this.car);
        // this.car.status = Status.Finished.toString();
        // this.carInfo.updateCar(this.car)
        //     .subscribe( () => {
        //         this.alertService.showMessage('Success!', `Car updated`, MessageSeverity.success);
        //         this.cars = this.cars.filter(x => x.carId !== id);
        //     });
    }

    getBindings(valueId: any, arr: any) {
        for (const prop in arr) {
            if (Number(prop) === valueId) {
              return arr[prop];
            }
          }
    }
}
