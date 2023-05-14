import { useGLTF } from "@react-three/drei";
import { FC } from "react";

const VendingMachine: FC = () => {
  const model = useGLTF("/vendingMachine_compressed.gltf");

  const position = [-2, -4.7, -2];
  const scale = [0.5, 0.5, 0.5];
  const rotation = [0.15, -3.15, 0];

  return (
    <primitive
      object={model.scene}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  );
};

export default VendingMachine;
