export interface Power {
  name: string;
  description: string;
  energyCost: number;
}

export class SuperPower implements Power {
  constructor(
    public name: string,
    public description: string,
    public energyCost: number
  ) {}
}