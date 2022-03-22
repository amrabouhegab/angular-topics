export class Movie {
  name: string;
  releaseDate: any;
  earning: string;
  id!: number;

  constructor(name: string, releaseDate: any, earning: string) {
    this.name = name;
    this.earning = earning;
    this.releaseDate = releaseDate;
  }
}
