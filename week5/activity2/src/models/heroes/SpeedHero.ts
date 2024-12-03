import { Hero } from '../Hero';
import { SuperPower } from '../Power';

export class SpeedHero extends Hero {
  constructor(name: string, alias: string) {
    super(name, alias);
    this.powers = [
      new SuperPower('Super Speed', 'Move at lightning speed', 20),
      new SuperPower('Time Manipulation', 'Slow down time perception', 40)
    ];
  }

  usePower(): string {
    const power = this.powers[Math.floor(Math.random() * this.powers.length)];
    if (this.consumeEnergy(power.energyCost)) {
      return `${this.alias} used ${power.name}: ${power.description}!`;
    }
    return `${this.alias} is too tired to use ${power.name}!`;
  }
}