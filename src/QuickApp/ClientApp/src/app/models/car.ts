export interface ICar {
    carId: number;
    model: string;
    typeOfCar: string;
    color: string;
    registration: string;
    arrivalTime: Date; // date?
    pickUpTime: string;  // date?
    washType: string;
    cost: number;
    paidConfirmed: boolean;
    takeConfirmed: boolean;
    faktura: boolean;
    payment: string;
    status: string;
}

export class Car implements ICar {
    carId: number;
    model: string;
    typeOfCar: string;
    color: string;
    registration: string;
    arrivalTime: Date; // date?
    pickUpTime: string;  // date?
    washType: string;
    cost: number;
    paidConfirmed: boolean;
    takeConfirmed: boolean;
    faktura: boolean;
    payment: string;
    status: string;
}
