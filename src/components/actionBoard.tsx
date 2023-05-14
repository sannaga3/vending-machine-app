import { FC, useState, ReactNode, Dispatch, SetStateAction } from "react";

import { walletStore } from "@/store/walletStore";
import { vendingMachineStore } from "@/store/vendingMachineStore";
import { Drink } from "@/types/drink";

interface ActionsInterface {
  [key: string]: Function;
  getFirstIncome(): string;
  chooseAction(): ReactNode;
  working(): string;
  getIncome(): string;
  buyDrink(): string;
  chooseDrink(): ReactNode;
  pay(): ReactNode;
  getDrink(): ReactNode;
}

type Props = {
  isResetModal: boolean;
  setIsResetModal: Dispatch<SetStateAction<boolean>>;
};

const ActionBoard: FC<Props> = ({ isResetModal, setIsResetModal }) => {
  const { setIncome, setPay } = walletStore();
  const { factories, sale } = vendingMachineStore();
  const [boughtDrink, setBoughtDrink] = useState<Array<Drink>>([]);
  const [expectedIncome, setExpectedIncome] = useState<number>(0);
  const [action, setAction] = useState("getFirstIncome");
  const key: string = action;
  const buttonStyle =
    "bg-blue-500 rounded-xl text-sm cursor-pointer hover:scale-110";

  const setNextAction = (action: string): void => {
    if (action === "getFirstIncome") setAction("chooseAction");

    if (action === "working") {
      const income = Math.floor(Math.random() * 10) * 1000;
      setExpectedIncome(income);
      setAction("getIncome");
    }
    if (action === "getIncome") {
      setIncome(expectedIncome);
      setExpectedIncome(0);
      setAction("chooseAction");
    }

    if (action === "buyDrink") setAction("chooseDrink");
    if (action === "chooseDrink") setAction("pay");
    if (action === "pay") {
      setPay(boughtDrink[0].price);
      setAction("getDrink");
    }
    if (action === "getDrink") {
      setBoughtDrink([]);
      setAction("chooseAction");
    }
  };

  const actions: ActionsInterface = {
    getFirstIncome: () => "お小遣いを 300円 を手に入れた",
    chooseAction: () => (
      <>
        <div className="mb-3">行動を選択してください</div>
        <div className="flex space-x-5">
          {[
            { key: "working", text: "お金を稼ぐ" },
            { key: "buyDrink", text: "飲み物を買う" },
          ].map((action) => {
            return (
              <div key={action.key}>
                <button
                  className={`w-24 h-7 ${buttonStyle}`}
                  onClick={() => setAction(action.key)}
                >
                  {action.text}
                </button>
              </div>
            );
          })}
        </div>
      </>
    ),
    working: () => {
      return "頑張って働いた";
    },
    getIncome: () => {
      return `${expectedIncome} 円 を手に入れた`;
    },
    buyDrink: () => {
      return "「飲み物を買うぞ！」";
    },
    chooseDrink: () => (
      <>
        <div className="mb-5">何を買いますか？</div>
        <div className="flex flex-col items-center space-y-5">
          {[...factories].map((factory, index) => {
            return (
              <div key={index}>
                <button
                  className={`w-36 h-7 ${buttonStyle}`}
                  onClick={() => {
                    setBoughtDrink([sale(factory)]);
                    setNextAction(action);
                  }}
                >
                  {factory.getProduct()}
                </button>
              </div>
            );
          })}
        </div>
      </>
    ),
    pay: () => {
      return (
        <>
          <div>{`自動販売機に ${boughtDrink[0].price} 円 を入れた`}</div>
          <br />
          <div>{`「${boughtDrink[0].name}」 を手に入れた！`}</div>
        </>
      );
    },
    getDrink: () => {
      return (
        <>
          <div>{`ゴクゴク... 「${boughtDrink[0].taste()}」`}</div>
        </>
      );
    },
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between">
      <div className="py-5">
        <div>{actions[key]()}</div>
      </div>
      {action !== "chooseAction" && action !== "chooseDrink" && (
        <div className="flex justify-center">
          <button
            className={`w-16 h-7 ${buttonStyle}`}
            onClick={() => setNextAction(action)}
          >
            次へ
          </button>
        </div>
      )}
      <button
        className={`absolute bottom-1 right-1 w-16 h-5 bg-red-500 rounded-xl text-xs cursor-pointer hover:scale-110 px-2`}
        onClick={() => setIsResetModal(!isResetModal)}
      >
        リセット
      </button>
    </div>
  );
};

export default ActionBoard;
