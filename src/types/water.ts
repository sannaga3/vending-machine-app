import { Drink } from "./drink";

export class WaterStandard extends Drink {
  taste(): string {
    return "うん、普通の水だ";
  }
}

export class WaterRich extends Drink {
  taste(): string {
    return "おお、なんとリッチな味わい！";
  }
}
