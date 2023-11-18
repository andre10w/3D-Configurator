import { OrbitControls, Environment, useCubeTexture } from '@react-three/drei'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { useThree } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { Vector2 } from 'three'
import { useRef } from 'react'

type SceneType = {
  file1: any
  file2: any
  file3: any
  file4: any
  file5: any
  file6: any
  rotation1: any
  rotation2: any
  rotation3: any
  rotation4: any
  hexString1: any
  hexString2: any
  hexString3: any
  hexString4: any
  hexString5: any
  hexString6: any
  rotation5: any
  rotation6: any
  allOne: any
  scene: any
  inputWidthValue: any
  inputHeightValue: any
  inputDepthValue: any
  handleScene: (scene: any) => void
}

function Scene({
  file1,
  file2,
  file3,
  file4,
  file5,
  file6,
  rotation1,
  rotation2,
  rotation3,
  rotation4,
  rotation5,
  rotation6,
  hexString1,
  hexString2,
  hexString3,
  hexString4,
  hexString5,
  hexString6,
  inputWidthValue,
  inputHeightValue,
  inputDepthValue,
  allOne,
  handleScene,
}: SceneType) {
  // const [map1, map2, map3, map4, map5, map6] =
  //   allOne == false
  //     ? useLoader(TextureLoader, [file2, file5, file1, file3, file6, file4])
  //     : useLoader(TextureLoader, [file1, file1, file1, file1, file1, file1])
  // const loader1, loader2, loader3, loader4, loader5, loader6
  const loader1 =
    file1 != './dice1.png'
      ? useLoader(TextureLoader, file1)
      : useLoader(TextureLoader, './default.png')

  const loader2 =
    file2 != './dice2.png'
      ? useLoader(TextureLoader, file2)
      : useLoader(TextureLoader, './default.png')
  const loader3 =
    file3 != './dice3.png'
      ? useLoader(TextureLoader, file3)
      : useLoader(TextureLoader, './default.png')
  const loader4 =
    file4 != './dice4.png'
      ? useLoader(TextureLoader, file4)
      : useLoader(TextureLoader, './default.png')
  const loader5 =
    file5 != './dice5.png'
      ? useLoader(TextureLoader, file5)
      : useLoader(TextureLoader, './default.png')
  const loader6 =
    file6 != './dice6.png'
      ? useLoader(TextureLoader, file6)
      : useLoader(TextureLoader, './default.png')

  const map1: any = allOne == false ? loader3 : loader1
  const map2: any = allOne == false ? loader1 : loader1
  const map4: any = allOne == false ? loader5 : loader1
  const map3: any = allOne == false ? loader6 : loader1
  const map5: any = allOne == false ? loader2 : loader1
  const map6: any = allOne == false ? loader4 : loader1
  if (map1) {
    map1.rotation =
      allOne == false ? rotation3 * (Math.PI / 180) : rotation1 * (Math.PI / 360)
    map1.center = new Vector2(0.5, 0.5)
  }

  if (map2) {
    map2.rotation =
      allOne == false ? rotation1 * (Math.PI / 180) : rotation1 * (Math.PI / 180)
    map2.center = new Vector2(0.5, 0.5)
  }
  if (map3) {
    map3.rotation =
      allOne == false ? rotation6 * (Math.PI / 180) : rotation1 * (Math.PI / 180)
    map3.center = new Vector2(0.5, 0.5)
  }
  if (map4) {
    map4.rotation =
      allOne == false ? rotation5 * (Math.PI / 180) : rotation1 * (Math.PI / 180)
    map4.center = new Vector2(0.5, 0.5)
  }

  if (map5) {
    map5.rotation =
      allOne == false ? rotation2 * (Math.PI / 180) : rotation1 * (Math.PI / 180)
    map5.center = new Vector2(0.5, 0.5)
  }
  if (map6) {
    map6.rotation =
      allOne == false ? rotation4 * (Math.PI / 180) : rotation1 * (Math.PI / 180)
    map6.center = new Vector2(0.5, 0.5)
  }
  const { scene } = useThree()
  useEffect(() => {
    handleScene(scene)
  }, [])
  return (
    <>
      <OrbitControls makeDefault />
      <mesh>
        <boxGeometry args={[inputWidthValue, inputHeightValue, inputDepthValue]} />
        <meshBasicMaterial attach='material-0' map={map1} color={hexString3} />
        <meshBasicMaterial attach='material-1' map={map2} color={hexString1} />
        <meshBasicMaterial attach='material-2' map={map3} color={hexString5} />
        <meshBasicMaterial attach='material-3' map={map4} color={hexString6} />
        <meshBasicMaterial attach='material-4' map={map5} color={hexString2} />
        <meshBasicMaterial attach='material-5' map={map6} color={hexString4} />
      </mesh>
    </>
  )
}

export { Scene }
