import Person from "./person";
import IEnrollable from "./interfaceEnrollable";

export default class Employee extends Person implements IEnrollable {
  private _enrollment = String();
  private _admissionDate: Date;

  constructor(
    name: string,
    birthDate: Date,
    private _salary: number,
  ) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
    this.salary = _salary;
    this._admissionDate = new Date();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) {
      throw new Error('O salário não pode ser negativo.');
    }
    this._salary = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro.');
    this._admissionDate = value;
  }

  generateEnrollment(): string {
    const randomEnrollment = Math.floor(Math.random() * 1000000);
    return `${this.name.substring(0, 3)}${randomEnrollment}`;
  }
}