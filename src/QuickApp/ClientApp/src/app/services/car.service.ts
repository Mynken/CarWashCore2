import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Car, ICar } from '../models/car';
import { Observable } from 'rxjs/Observable';
import { ConfigurationService } from './configuration.service';
import { EndpointFactory } from './endpoint-factory.service';


@Injectable()
export class CarService extends EndpointFactory {

    private readonly _carGetUrl: string = '/api/Cars';
    private readonly _carCreateUrl: string = '/api/Cars';
    private readonly _carDeleteUrl: string = '/api/Cars/';
    private readonly _carGetByNameUrl: string = '/api/Cars/users/';

    constructor(protected http: HttpClient, protected configurations: ConfigurationService,  injector: Injector) {
        super(http, configurations, injector);
     }

    getCarList(): Observable<Car[]> {
        return this.http.get<Car[]>(this.configurations.baseUrl + this._carGetUrl);
    }

    getCarById(id: number): Observable<Car> {
        return this.http.get<Car>(this.configurations.baseUrl + this._carDeleteUrl + String(id));
    }

    getCarByName(registration: string): Observable<Car> {
        return this.http.get<Car>(this.configurations.baseUrl + this._carGetByNameUrl + registration);
    }

    createCar(car: Car) {
        return this.http.post<Car>(this.configurations.baseUrl + this._carCreateUrl, car);
    }

    updateCar(car: Car) {
        return this.http.put<Car>(this.configurations.baseUrl + this._carCreateUrl, car);
    }

    deleteCar(id: number): Observable<any> {
        return this.http.delete(this.configurations.baseUrl + this._carDeleteUrl + String(id));
      }
}
