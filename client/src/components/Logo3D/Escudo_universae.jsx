import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Escudo(props) {
  const { nodes, materials } = useGLTF('/escudo_universae.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.base_high.geometry} material={materials.metallic} position={[0.026, 0, -0.013]} />
      <mesh geometry={nodes.mid_high.geometry} material={materials.blue_plastic} position={[0, 0.114, 0]} />
      <mesh geometry={nodes.u_high.geometry} material={materials.Emission} position={[0.002, 0.122, -0.006]} />
    </group>
  )
}

useGLTF.preload('/escudo_universae.gltf')
