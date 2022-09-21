abstract class Person {
  constructor(private _name: string, private _birthdate: Date) {
    this.name = _name;
    this.birthdate = _birthdate;

  }
  get name() {
    return this._name;
  }

  set name(name: string) {
    if (name.length < 3) {
      throw new Error("Name is too short");
    }
    this._name = name;
  }

  get birthdate() {
    return this._birthdate;
  }


  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }

  set birthdate(birthdate: Date) {
    if (birthdate.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
    if (Person.getAge(birthdate) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
    this._birthdate = birthdate;
  }
}

export default Person;