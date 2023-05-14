import { DrinkFactory } from "./factory";
import { WaterStandard, WaterRich } from "../water";

export class WaterStandardFactory extends DrinkFactory {
  constructor(price: number) {
    super("普通の水", price);
  }
  create(): WaterStandard {
    return new WaterStandard(this.name, this.price);
  }
  getProduct(): string {
    return `${this.name}: ${this.price} 円`;
  }
  getProductName(): string {
    return this.name;
  }
  getProductPrice(): number {
    return this.price;
  }
}

export class WaterRichFactory extends DrinkFactory {
  constructor(price: number) {
    super("リッチな水", price);
  }
  create(): WaterRich {
    return new WaterRich(this.name, this.price);
  }
  getProduct(): string {
    return `${this.name}: ${this.price} 円`;
  }
  getProductName(): string {
    return this.name;
  }
  getProductPrice(): number {
    return this.price;
  }
}
