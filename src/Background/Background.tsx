import './Background.css'

import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { FrontSide, Mesh, TextureLoader } from 'three'

import image from '../assets/textures/background/2.jpg'


function Sphere(props: JSX.IntrinsicElements['mesh']) {
  const ref = useRef<Mesh>(null!)

  const texture = useLoader(TextureLoader, image)
  useFrame((_state, delta) => {
    ref.current.rotation.x += 0.018 * delta
    ref.current.rotation.y += 0.018 * delta
    ref.current.rotation.z += 0.018 * delta
  })

  return (
    <mesh
      {...props}
      ref={ref}>
      <sphereGeometry attach="geometry" args={[15, 32, 16]} />
      <meshStandardMaterial map={texture} attach="material" color={'gold'} wireframe={true} metalness={0.1} side={FrontSide}/>
    </mesh>
  )
}

export default function Background() {
  return (
    <>
      <Sphere position={[0, 0, 0]} />
    </>
  )
}
