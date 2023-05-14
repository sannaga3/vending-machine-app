import { NextPage } from "next";

import DrawCanvas from "@/components/drawCanvas";
import CommandBoard from "@/components/commandBoard";

const Home: NextPage = () => {
  return (
    <div>
      <div className="w-full h-full">
        <DrawCanvas />
      </div>
      <CommandBoard />
    </div>
  );
};

export default Home;
