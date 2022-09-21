export interface IVehicle {
  drive(): void;

}

export interface IFlyable {
  fly(): void;
}

export interface ICar extends IVehicle, IFlyable {
}