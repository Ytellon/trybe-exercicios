class Student {
  public name: string;
  private _enroll: string;
  private _notesoftest: number[];
  private _notesofexam: number[];

  constructor(name: string, enroll: string, notesoftest: number[], notesofexam: number[]) {
    this.name = name;
    this._enroll = enroll;
    this._notesoftest = notesoftest;
    this._notesofexam = notesofexam;
  }

  get enroll(): string {
    return this._enroll;
  }

  set enroll(value: string) {
    this._enroll = value;
  }

  get notesoftest(): number[] {
    return this._notesoftest;
  }

  set notesoftest(value: number[]) {
    if (value.length > 4) {
      console.log('The maximum number of test notes is 4');
    }
    this._notesoftest = value;
  }

  get notesofexam(): number[] {
    return this._notesofexam;
  }

  set notesofexam(value: number[]) {
    if (value.length > 2) {
      console.log('The maximum number of exam notes is 2');
    }
    this._notesofexam = value;
  }

  sumNotes(): number {
    const notes = this._notesoftest.concat(this._notesofexam);
    return notes.reduce((a, b) => a + b, 0);
  }

  averageNotes(): number {
    return this.sumNotes() / (this._notesoftest.length + this._notesofexam.length);
  }
}