import { Dispatch, FC, SetStateAction } from "react";
import { resetAllStores } from "@/store/creator";

type Props = {
  setIsStarted: Dispatch<SetStateAction<boolean>>;
  setIsResetModal: Dispatch<SetStateAction<boolean>>;
};

const ResetModal: FC<Props> = ({ setIsResetModal, setIsStarted }) => {
  const reset = (): void => {
    resetAllStores();
    setIsStarted(false);
  };

  return (
    <div className="flex flex-col">
      <div>最初からやり直しますか？</div>
      <div className="flex justify-center space-x-10 mt-4">
        <button
          className={`w-16 h-5 bg-blue-500 rounded-xl text-xs cursor-pointer hover:scale-110 px-2`}
          onClick={() => reset()}
        >
          はい
        </button>
        <button
          className={`w-16 h-5 bg-gray-500 rounded-xl text-xs cursor-pointer hover:scale-110 px-2`}
          onClick={() => setIsResetModal(false)}
        >
          いいえ
        </button>
      </div>
    </div>
  );
};

export default ResetModal;
