class Subject {
  constructor(private _name: string) {
    this.name = _name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('Subject name is too short.');
    }
    this._name = value;
  }
}

export default Subject;