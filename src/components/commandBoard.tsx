import { FC, useState } from "react";

import FirstBoard from "./firstBoard";
import ActionBoard from "./actionBoard";
import WalletBoard from "./walletBoard";
import ResetModal from "./resetModal";

const CommandBoard: FC = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isResetModal, setIsResetModal] = useState(false);

  const commonStyle =
    "bg-gray-700 text-white border-2 rounded-xl px-5 py-3 text-base";
  const beforeStyle =
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] flex flex-col justify-center z-10";
  const afterStyle =
    "absolute top-20 left-28 w-[300px] h-[600px] flex flex-col justify-between z-10";

  return (
    <>
      {isStarted ? (
        <div className={afterStyle}>
          <div className={`w-[300px] h-[50px] ${commonStyle}`}>
            <WalletBoard />
          </div>
          <div className={`w-[300px] h-[400px] ${commonStyle}`}>
            <ActionBoard
              isResetModal={isResetModal}
              setIsResetModal={setIsResetModal}
            />
          </div>
          {isResetModal ? (
            <div className={`w-[300px] h-[100px] ${commonStyle}`}>
              <ResetModal
                setIsStarted={setIsStarted}
                setIsResetModal={setIsResetModal}
              />
            </div>
          ) : (
            <div className={`w-[300px] h-[100px]`}></div>
          )}
        </div>
      ) : (
        <div className={`${beforeStyle} ${commonStyle}`}>
          <FirstBoard setIsStarted={setIsStarted} />
        </div>
      )}
    </>
  );
};

export default CommandBoard;
