import { create, StateCreator } from "zustand";

const resetters: (() => void)[] = [];

export const creator = (<T extends unknown>(f: StateCreator<T> | undefined) => {
  if (f === undefined) return create;
  const store = create(f);
  const initialState = store.getState();
  resetters.push(() => {
    store.setState(initialState, true);
  });
  return store;
}) as typeof create;

export const resetAllStores = () => {
  for (const resetter of resetters) {
    resetter();
  }
};
