export abstract class Drink {
  constructor(public name: string, public price: number) {}

  abstract taste(): string;
}

export type Drinks = Drink[];
