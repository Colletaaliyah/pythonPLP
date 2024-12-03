import { Hero } from '../Hero';
import { SuperPower } from '../Power';

export class ElementalHero extends Hero {
  constructor(name: string, alias: string) {
    super(name, alias);
    this.powers = [
      new SuperPower('Pyrokinesis', 'Control and generate fire', 30),
      new SuperPower('Cryokinesis', 'Manipulate ice and cold', 25)
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