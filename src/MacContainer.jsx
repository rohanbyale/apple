import { useGLTF, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React from 'react'
import * as THREE from "three"

const MacContainer = () => {

  const model = useGLTF("./mac.glb")
  const tex = useTexture("./red.jpg")

  let meshes = {}
  model.scene.traverse((e) => {
    meshes[e.name] = e
  })


  if (meshes.matte) {
    meshes.matte.material.map = tex
    meshes.matte.material.metalness = 0
    meshes.matte.material.emissiveIntensity = 0
    meshes.matte.material.roughness = 1
  }


  const data = useScroll()

  useFrame(() => {
    if (meshes.screen) {
      // Closed at 180°, opens to 90°
      const target = THREE.MathUtils.degToRad(180 - data.offset * 90)
      meshes.screen.rotation.x = THREE.MathUtils.lerp(
        meshes.screen.rotation.x,
        target,
        0.1 // smooth interpolation
      )
    }
  })

  return (
    <group position={[0, -10, 20]}>
      <primitive object={model.scene} />
    </group>
  )
}

export default MacContainer
