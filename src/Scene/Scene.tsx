import './Scene.css'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import Background from '../Background/Background'

export default function Scene() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 48], fov: 40, near: 0.1, far: 500 }}>
        <ambientLight color={"white"} intensity={1.5} />
        <Suspense fallback={null}>
          <Background />
        </Suspense>
      </Canvas>
    </>
  )
}
