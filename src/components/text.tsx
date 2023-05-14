import type { Mesh } from "three";
import React, { FC, useRef, useMemo } from "react";
import {
  ReactThreeFiber,
  extend,
  useFrame,
  useLoader,
} from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
extend({ TextGeometry });

/* プロパティ"........."は型'JSX.IntrinsicElements'に存在しませんを回避 */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      textGeometry: ReactThreeFiber.Node<TextGeometry, typeof TextGeometry>;
    }
  }
}

const Text: FC<{ text: string }> = ({ text }) => {
  const font = useLoader(FontLoader, "/M PLUS 1 Black_Regular.json");
  const config = useMemo(
    () => ({
      font: font,
      size: 0.5,
      height: 0.01,
      curveSegments: 16,
      bevelEnabled: true,
      bevelThickness: 0.001,
      bevelSize: 0.01,
      bevelOffset: 0,
      bevelSegments: 1,
    }),
    [font]
  );

  const ref = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    ref.current.position.x = Math.cos(clock.elapsedTime) * 0.3;
    ref.current.position.y = 2;
    ref.current.position.z = -1;
  });

  return (
    <group position={ref.current?.position || [-2.2, 2, -1]}>
      <mesh ref={ref}>
        <textGeometry args={[text, config]} />
        <meshPhysicalMaterial color={"black"} />
      </mesh>
    </group>
  );
};

export default Text;
