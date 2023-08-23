import { useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Mesh, TextureLoader } from 'three'

import t1 from '../assets/textures/dice/dice_1.jpg'
import t2 from '../assets/textures/dice/dice_2.jpg'
import t3 from '../assets/textures/dice/dice_3.jpg'
import t4 from '../assets/textures/dice/dice_4.jpg'
import t5 from '../assets/textures/dice/dice_5.jpg'
import t6 from '../assets/textures/dice/dice_6.jpg'

export default function Dice(props: JSX.IntrinsicElements['mesh']) {
  const ref = useRef<Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  const texture_1 = useLoader(TextureLoader, t1)
  const texture_2 = useLoader(TextureLoader, t2)
  const texture_3 = useLoader(TextureLoader, t3)
  const texture_4 = useLoader(TextureLoader, t4)
  const texture_5 = useLoader(TextureLoader, t5)
  const texture_6 = useLoader(TextureLoader, t6)

  useFrame((_state, delta) => {
    ref.current.rotation.x += 0.2 * delta
    ref.current.rotation.y += 0.5 * delta
    ref.current.rotation.z += 0.5 * delta
  })

  return (
  <mesh
      {...props}
      ref={ref}
      scale={hovered ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial map={texture_1} attach="material-0" color={hovered ? 'gold' : 'grey'} wireframe={!clicked} metalness={0.1}/>
      <meshStandardMaterial map={texture_2} attach="material-1" color={hovered ? 'gold' : 'grey'} wireframe={!clicked} metalness={0.1}/>
      <meshStandardMaterial map={texture_3} attach="material-2" color={hovered ? 'gold' : 'grey'} wireframe={!clicked} metalness={0.1}/>
      <meshStandardMaterial map={texture_4} attach="material-3" color={hovered ? 'gold' : 'grey'} wireframe={!clicked} metalness={0.1}/>
      <meshStandardMaterial map={texture_5} attach="material-4" color={hovered ? 'gold' : 'grey'} wireframe={!clicked} metalness={0.1}/>
      <meshStandardMaterial map={texture_6} attach="material-5" color={hovered ? 'gold' : 'grey'} wireframe={!clicked} metalness={0.1}/>
    </mesh>
  )
}