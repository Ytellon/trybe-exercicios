import Subject from "./subject";
import Employee from "./employe";

class Teacher extends Employee {
  private _subjects: Subject;
  private _registration = String();

  constructor (name: string, birthDate: Date, salary: number, subjects: Subject) {
    super(name, birthDate, salary);
    this._subjects = subjects;
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
  
}

export default Teacher;