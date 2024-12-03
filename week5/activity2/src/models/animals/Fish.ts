import { Animal } from '../Animal';

export class Fish extends Animal {
  private depth: number = 0;

  constructor(name: string, species: string, speed: number) {
    super(name, species, speed);
  }

  move(): string {
    this.depth = Math.floor(Math.random() * 50);
    return `${this.name} is swimming at ${this.depth} meters depth at ${this.speed} km/h! 🐠`;
  }
}