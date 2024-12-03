import { Power } from './Power';

export abstract class Hero {
  protected energy: number = 100;
  protected powers: Power[] = [];

  constructor(
    protected name: string,
    protected alias: string
  ) {}

  abstract usePower(): string;

  protected consumeEnergy(amount: number): boolean {
    if (this.energy >= amount) {
      this.energy -= amount;
      return true;
    }
    return false;
  }

  public recharge(amount: number): void {
    this.energy = Math.min(100, this.energy + amount);
  }

  public getStatus(): string {
    return `${this.name} (${this.alias}) - Energy: ${this.energy}%`;
  }
}