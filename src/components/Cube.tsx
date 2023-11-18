import { forwardRef } from 'react'
import * as THREE from 'three'
import { Canvas, useLoader } from '@react-three/fiber'
import { Mesh, BoxGeometry, MeshBasicMaterial, CubeTextureLoader } from 'three'
import { TextureLoader } from 'three'
type CubeType = Mesh<BoxGeometry, MeshBasicMaterial>
const [map1, map2] = useLoader(TextureLoader, ['image.png', 'image1.jpg'])

const Cube = forwardRef<CubeType>((_, ref) => (
  <mesh ref={ref} position-x={2} castShadow>
    <boxGeometry args={[1.5, 1.5, 1.5]} />
    <meshBasicMaterial attach='material-0' map={map1} />
    <meshBasicMaterial attach='material-1' map={map2} />
    <meshBasicMaterial attach='material-2' color='blue' />
    <meshBasicMaterial attach='material-3' color='red' />
    <meshBasicMaterial attach='material-4' color='blue' />
    <meshBasicMaterial attach='material-5' color='green' />
  </mesh>
))

export { Cube }
