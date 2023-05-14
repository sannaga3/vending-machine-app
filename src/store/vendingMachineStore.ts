import { Drink } from "@/types/drink";
import { DrinkFactories, DrinkFactory } from "../types/factory/factory";
import { creator } from "@/store/creator";

type VendingMachineAction = {
  setFactories: (factory: DrinkFactories) => void;
  unsetFactories: () => void;
  getProductList: () => Array<string> | string;
  getProductNameList: () => Array<string> | string;
  sale: (factory: DrinkFactory) => Drink;
};

type VendingMachineState = {
  factories: DrinkFactories | [];
};

const initialVendingMachineState: VendingMachineState = {
  factories: [],
};

export const vendingMachineStore = creator<
  VendingMachineAction & VendingMachineState
>((set, get) => ({
  ...initialVendingMachineState,
  setFactories: (factory: DrinkFactories) => {
    const oldFactories = get().factories;

    set((state) => ({
      ...state,
      factories: [...oldFactories, ...factory],
    }));
  },
  unsetFactories: () => {
    set((state) => ({
      ...state,
      factories: [],
    }));
  },
  getProductList: () => {
    const factories = get().factories;
    if (factories.length === 0) return "購入できる飲み物がありません";

    const productList = factories.map((factory) => factory.getProduct());
    return productList;
  },
  getProductNameList: () => {
    const factories = get().factories;
    if (factories.length === 0) return "購入できる飲み物がありません";

    const productNameList = factories.map((factory) =>
      factory.getProductName()
    );
    return productNameList;
  },
  sale: (factory: DrinkFactory) => {
    return factory.create();
  },
}));
