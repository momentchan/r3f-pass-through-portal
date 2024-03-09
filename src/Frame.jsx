import { MeshPortalMaterial, Text, } from "@react-three/drei";
import { extend, } from "@react-three/fiber";
import { geometry } from "maath";
extend(geometry)

export default function Frame({ id, name, author, width = 1, height = 1.61803398875, children, ...props }) {
    return <>
        <group {...props}>
            <Text color={'black'} fontSize={0.3} anchorY='top' anchorX='left' lineHeight={0.8} position={[-0.375, 0.715, 0.01]} material-toneMapped={false}>
                {name}
            </Text>
            <Text color={'black'} fontSize={0.1} anchorX="right" position={[0.4, -0.659, 0.01]} material-toneMapped={false}>
                /{id}
            </Text>
            <Text color={'black'} fontSize={0.04} anchorX="right" position={[0.0, -0.677, 0.01]} material-toneMapped={false}>
                {author}
            </Text>

            <mesh name={id}>
                <roundedPlaneGeometry args={[width, height, 0.1]} />
                <MeshPortalMaterial>{children}</MeshPortalMaterial>
            </mesh>

            <mesh name={id} position={[0, 0, -0.001]}>
                <roundedPlaneGeometry args={[width + 0.05, height + 0.05, 0.12]} />
                <meshBasicMaterial color="black" />
            </mesh>
        </group>
    </>
}