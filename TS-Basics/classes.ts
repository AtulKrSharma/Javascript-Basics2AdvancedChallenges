class Engineer {
  private readonly name: string;
  private readonly stream: string;
  private readonly year: number;
  private _isEnrolled: boolean;

  constructor(
    name: string,
    stream: string,
    year: number,
    _isEnrolled: boolean = true
  ) {
    this.name = name;
    this.stream = stream;
    this.year = year;
    this._isEnrolled = _isEnrolled;
  }

  getFullDetails(): string {
    return `Full details are ${this.name}- ${this._isEnrolled}-${this.stream}-${this.year}`;
  }

  get getName(): string {
    return this.name;
  }

  get getStream(): string {
    return this.stream;
  }

  get getyear(): number {
    return this.year;
  }

  get isEnrolled(): boolean {
    return this._isEnrolled;
  }

  set isEnrolled(enrollmentValue: boolean) {
    this._isEnrolled = enrollmentValue;
  }
}

const engineer1 = new Engineer('Atul', 'ECE', 2001);
console.log(engineer1.getFullDetails());
//The assignment to a readonly property can only occur in one of two places:
//In the property declaration & In the constructor of the same class.
console.log(engineer1.getName);
engineer1.isEnrolled=false
console.log(engineer1.getFullDetails());

