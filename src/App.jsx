import { CameraControls, Sky } from "@react-three/drei";
import { Canvas } from '@react-three/fiber'
import Frame from "./Frame";
import Model from "./Model";

export default function App() {
    return <>
        <Canvas
            gl={{ localClippingEnabled: true }}
            camera={{
                fov: 75,
                position: [0, 0, 1.5]
            }}>

            <Frame id='01' name='Jesse' author='McCree'>
                <Sky />
                <Model position={[0, -2, 0]} />
            </Frame>

            <Model clip position={[0, -2, 0]} />

            <CameraControls makeDefault minAzimuthAngle={-Math.PI / 2.5} maxAzimuthAngle={Math.PI / 2.5} minPolarAngle={0.5} maxPolarAngle={Math.PI / 2} />

        </Canvas>
    </>
}