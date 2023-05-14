import { FC } from "react";
import { walletStore } from "@/store/walletStore";

const WalletBoard: FC = () => {
  const { money } = walletStore();

  return (
    <>
      <p>
        <span>所持金:</span>
        <span className="ml-3">{money} 円</span>
      </p>
    </>
  );
};

export default WalletBoard;
