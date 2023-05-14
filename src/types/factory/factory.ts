import { Drink } from "../drink";

export abstract class DrinkFactory {
  constructor(public name: string, public price: number) {}
  abstract create(): Drink;
  abstract getProduct(): string;
  abstract getProductName(): string;
  abstract getProductPrice(): number;
}

export type DrinkFactories = DrinkFactory[];
