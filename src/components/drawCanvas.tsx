import { FC } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Text from "./text";

const VendingMachine = dynamic(() => import("./vendingMachine"));

const DrawCanvas: FC = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas flat>
        <Environment preset="lobby" background blur={0.5} />

        <Suspense fallback={null}>
          <OrbitControls enablePan={false} />
          {/* vending_machine_lights */}
          <pointLight position={[-1, 2.3, -2.6]} intensity={0.5} />
          <pointLight position={[3.5, 2.3, -2.6]} intensity={0.5} />
          <pointLight position={[-1, 1, -2.6]} intensity={0.5} />
          <pointLight position={[3.5, 1, -2.6]} intensity={0.5} />
          <VendingMachine />
        </Suspense>
        <Text text="Let's buy drinks!!" />
      </Canvas>
    </div>
  );
};

export default DrawCanvas;
