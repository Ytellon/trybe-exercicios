import { IVehicle } from './interfaces';

export default class onlyNormalCar implements IVehicle {
  drive(): void { console.log('Drive a normal car'); }
}