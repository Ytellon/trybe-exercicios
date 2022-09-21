
import Person from "./person";
import IEnrollable from "./interfaceEnrollable";
 
class Student extends Person implements IEnrollable {
  private _enrollment: string = '';
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor(name: string, birthdate: Date) {
    super(name, birthdate);
    this.enrollment = this.generateEnrollment();
    this._examsGrades = [];
    this._worksGrades = [];
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }

    this._examsGrades = value;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error(
        'A pessoa estudante só pode possuir 2 notas de trabalhos.'
      );
    }

    this._worksGrades = value;
  }

  generateEnrollment = (): string => {
    const randomEnrollment = Math.floor(Math.random() * 1000000);
    return `${this.name.substring(0, 3)}${randomEnrollment}`;
  };
}

export default Student;