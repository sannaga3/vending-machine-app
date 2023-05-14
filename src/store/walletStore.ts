import { User } from "@/types/user";
import { creator } from "@/store/creator";

type WalletAction = {
  setOwner: (user: User) => void;
  setIncome: (money: number) => void;
  setPay: (money: number) => void;
};

type WalletState = {
  owner: User | null;
  money: number;
};

const initialWalletState: WalletState = {
  owner: null,
  money: 0,
};

export const walletStore = creator<WalletAction & WalletState>((set, get) => ({
  ...initialWalletState,
  setOwner: (user: User) => {
    set((state) => ({
      ...state,
      owner: user,
    }));
  },
  setIncome: (income: number) => {
    const money = get().money;
    const added = money + income;

    set((state) => ({
      ...state,
      money: added,
    }));
  },
  setPay: (pay: number) => {
    const money = get().money;
    const reduced = money - pay;

    set((state) => ({
      ...state,
      money: reduced,
    }));
  },
}));
