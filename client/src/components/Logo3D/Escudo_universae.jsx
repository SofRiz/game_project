import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import React, { useRef } from "react"

export function Escudo(props) {
    const { nodes, materials } = useGLTF("/escudo_universae.gltf")

    const logoRef = useRef()
    useFrame((state, delta) => {
        logoRef.current.rotation.z += 0.01
    })
    return (
        <group ref={logoRef} {...props} dispose={null}>
            <mesh
                geometry={nodes.base_high.geometry}
                material={materials.metallic}
                position={[0.026, 0, -0.013]}
            />
            <mesh
                geometry={nodes.mid_high.geometry}
                material={materials.blue_plastic}
                position={[0, -0.01, 0]}
            />
            <mesh
                geometry={nodes.mid_high.geometry}
                material={materials.blue_plastic}
                position={[0, 0.114, 0]}
            />
            <mesh
                geometry={nodes.u_high.geometry}
                material={materials.Emission}
                position={[0.002, -0.23, -0.006]}
            />
            <mesh
                geometry={nodes.u_high.geometry}
                material={materials.Emission}
                position={[0.002, 0.122, -0.006]}
            />
        </group>
    )
}

useGLTF.preload("/escudo_universae.gltf")
