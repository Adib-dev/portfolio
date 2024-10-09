import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { Avatar } from "./Avatar";

export const Experience = () => {
  return (
    <group>
      <Environment preset="sunset" />
      <group position-z={6}>
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <Avatar />
      </group>
    </group>
  );
};
