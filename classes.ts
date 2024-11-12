class Engineer {
  private readonly name: string;
  private readonly stream: string;
  private readonly year: number;

  constructor(name: string, stream: string, year: number) {
    this.name = name;
    this.stream = stream;
    this.year = year;
  }

  getFullDetails(): string {
    return `Full details are ${this.name}-${this.stream}-${this.year}`;
  }
}

const engineer1 = new Engineer('Atul', 'ECE', 2001);
console.log(engineer1);
console.log(engineer1.getFullDetails());
