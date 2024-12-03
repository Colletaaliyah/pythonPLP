export abstract class Animal {
  constructor(
    protected name: string,
    protected species: string,
    protected speed: number
  ) {}

  abstract move(): string;
  
  getName(): string {
    return this.name;
  }

  getSpecies(): string {
    return this.species;
  }

  getSpeed(): number {
    return this.speed;
  }
}