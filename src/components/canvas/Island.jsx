import React, { useMemo, Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Vector3, Box3 } from "three";

import CanvasLoader from "../Loader";

const getCenterOffset = (model) => {
  const box = new Box3().setFromObject(model.scene);
  const center = new Vector3();
  box.getCenter(center);
  center.multiplyScalar(-1);
  return center;
};

const Island = ({ isMobile }) => {
  const island = useGLTF("./island/scene.gltf");
  const centerOffset = useMemo(() => getCenterOffset(island), [island]);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={island.scene}
        scale={isMobile ? 1.2 : 1.8}
        position={isMobile ? [0, -0.6, 0].map((val, i) => val + centerOffset.getComponent(i)) : [0, -1, 0].map((val, i) => val + centerOffset.getComponent(i))}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const IslandCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Island isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default IslandCanvas;