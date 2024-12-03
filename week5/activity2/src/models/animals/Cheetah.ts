import { Animal } from '../Animal';

export class Cheetah extends Animal {
  private distance: number = 0;

  constructor(name: string, species: string, speed: number) {
    super(name, species, speed);
  }

  move(): string {
    this.distance += this.speed;
    return `${this.name} is sprinting on land at ${this.speed} km/h! Total distance: ${this.distance}m 🐆`;
  }
}