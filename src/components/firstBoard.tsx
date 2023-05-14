import { Dispatch, FC, SetStateAction } from "react";

import {
  WaterStandardFactory,
  WaterRichFactory,
} from "@/types/factory/waterFactory";
import { User } from "@/types/user";
import { vendingMachineStore } from "@/store/vendingMachineStore";
import { userStore } from "@/store/userStore";
import { walletStore } from "@/store/walletStore";

type Props = {
  setIsStarted: Dispatch<SetStateAction<boolean>>;
};

const FirstBoard: FC<Props> = ({ setIsStarted }) => {
  const { setFactories } = vendingMachineStore();
  const { setCurrentUser } = userStore();
  const { setOwner, setIncome } = walletStore();

  return (
    <>
      <div className="px-4 py-2 text-center text-xl mb-5">
        <p>自販機アプリへようこそ！</p>
      </div>
      <div className="flex justify-center">
        <button
          className="w-16 h-7 bg-blue-500 rounded-xl text-sm cursor-pointer hover:scale-110"
          onClick={() => {
            const user = new User(1, "customer1");
            setCurrentUser(user);
            const waterStandardFactory = new WaterStandardFactory(100);
            const waterRichFactory = new WaterRichFactory(150);
            setFactories([waterStandardFactory, waterRichFactory]);
            setOwner(user);
            setIncome(300);
            setIsStarted(true);
          }}
        >
          始める
        </button>
      </div>
    </>
  );
};

export default FirstBoard;
