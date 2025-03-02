import { useEffect } from "react";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Model({ url }) {
  const { scene, animations } = useGLTF(url);
  const { actions, names } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && names.length > 0) {
      actions[names[0]].play(); // Play the first animation
    }
  }, [actions, names]);

  return <primitive object={scene} scale={2} position={[-1, -2.9, 0]} />;
}

export default function App() {
  return (

<div className="relative w-[300px] h-[40px]"> {/* Change size as needed */}
<Canvas className="w-full h-full" camera={{ position: [-1, 0, -4] }}>
  <ambientLight intensity={4} />
  <directionalLight position={[2, 3, 2]} />
  <Model url="/model/woman_rumba_dancing_-_mulher_dancando_rumba.glb" scale={0.8} />
  <OrbitControls  
  enableZoom={false}  // Disable zoom
  enablePan={false} 
  minPolarAngle={Math.PI / 2} // Lock vertical rotation (Y-axis)
  maxPolarAngle={Math.PI / 2} // Lock vertical rotation (Y-axis)
  enableRotate={true} 
  />
</Canvas>
</div>

 
  );
}

