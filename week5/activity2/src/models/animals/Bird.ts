import { Animal } from '../Animal';

export class Bird extends Animal {
  private altitude: number = 0;

  constructor(name: string, species: string, speed: number) {
    super(name, species, speed);
  }

  move(): string {
    this.altitude += Math.floor(Math.random() * 100);
    return `${this.name} is flying at ${this.altitude} meters altitude at ${this.speed} km/h! 🦅`;
  }
}