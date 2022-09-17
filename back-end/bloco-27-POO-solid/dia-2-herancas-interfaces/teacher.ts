import Person from "./person";
import Subject from "./subject";
import { IEmployee } from "./interfaceEmploye";


class Teacher extends Person implements IEmployee {
  private _subjects: Subject;
  private _registration: string;
  private _admissionDate: Date;
  constructor(name: string, birthdate: Date, private _salary: number, subjects: Subject) {
    super(name, birthdate);
    this._subjects = subjects;
    this.salary = _salary;
    this.registration = this.generateRegistration();
    this._admissionDate = new Date();
  }

  generateRegistration(): string {
    const randomRegistration = Math.floor(Math.random() * 1000000);
    return `${this.name.substring(0, 3)}${randomRegistration}`;
  }

  get subjects(): Subject {
    return this._subjects;
  }

  set subjects(value: Subject) {
    this._subjects = value;
  }

  get registration(): string {
    return this._registration;
  }

  set registration(value: string) {
    if (value.length < 5) {
      throw new Error('Registration is too short.');
    }
    this._registration = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro.');
    this._admissionDate = value;
  }

  get salary(): number {
    return this._salary;
  }
  
  set salary(value: number) {
    if (value < 500) {
      throw new Error('Salary is too low.');
    }
    this._salary = value;
  }
}

export default Teacher;