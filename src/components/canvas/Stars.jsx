import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

function generateRandomPointsInSphere(numPoints, radius) {
  const points = new Float32Array(numPoints * 3);

  for (let i = 0; i < numPoints; i++) {
    let x, y, z, r;
    do {
      x = Math.random() * 2 - 1;
      y = Math.random() * 2 - 1;
      z = Math.random() * 2 - 1;
      r = x * x + y * y + z * z;
    } while (r > 1);

    const scaleFactor = radius * Math.cbrt(Math.random());
    points[i * 3] = x * scaleFactor;
    points[i * 3 + 1] = y * scaleFactor;
    points[i * 3 + 2] = z * scaleFactor;
  }

  return points;
}

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => generateRandomPointsInSphere(250, 1.2));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;