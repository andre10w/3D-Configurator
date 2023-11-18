import { Canvas, useThree } from '@react-three/fiber'
import { Leva } from 'leva'
import React, { useState, useEffect, ChangeEvent, useMemo } from 'react'
import ReactDOM from 'react-dom/client'
import { ACESFilmicToneMapping, sRGBEncoding } from 'three'
import { Scene } from './Scene'
import { ImFolderUpload, ImRedo, ImUndo, ImBin2 } from 'react-icons/im'
import { Switch } from 'antd'
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter'
import { ColorPicker, Space, Col, InputNumber, Row, Slider } from 'antd'
import type { Color, ColorPickerProps } from 'antd/es/color-picker'

import './styles/main.css'

function Main() {
  const [allOne, setAllOne] = useState(false)
  const [toogle, setToolge] = useState(true)

  const [inputWidthValue, setInputWidthValue] = useState(3)
  const [inputHeightValue, setInputHeightValue] = useState(3)
  const [inputDepthValue, setInputDepthValue] = useState(3)

  const [colorHex1, setColorHex1] = useState<Color | string>('#ffffff')
  const [colorHex2, setColorHex2] = useState<Color | string>('#ffffff')
  const [colorHex3, setColorHex3] = useState<Color | string>('#ffffff')
  const [colorHex4, setColorHex4] = useState<Color | string>('#ffffff')
  const [colorHex5, setColorHex5] = useState<Color | string>('#ffffff')
  const [colorHex6, setColorHex6] = useState<Color | string>('#ffffff')

  const [formatHex1, setFormatHex1] = useState<ColorPickerProps['format']>('hex')
  const [formatHex2, setFormatHex2] = useState<ColorPickerProps['format']>('hex')
  const [formatHex3, setFormatHex3] = useState<ColorPickerProps['format']>('hex')
  const [formatHex4, setFormatHex4] = useState<ColorPickerProps['format']>('hex')
  const [formatHex5, setFormatHex5] = useState<ColorPickerProps['format']>('hex')
  const [formatHex6, setFormatHex6] = useState<ColorPickerProps['format']>('hex')

  const [scene, setScene] = useState()
  const [file1, setFile1] = useState('./dice1.png')
  const [file2, setFile2] = useState('./dice2.png')
  const [file3, setFile3] = useState('./dice3.png')
  const [file4, setFile4] = useState('./dice4.png')
  const [file5, setFile5] = useState('./dice5.png')
  const [file6, setFile6] = useState('./dice6.png')

  const [oneFile, setOneFile] = useState('./image3.png')

  const [rotation1, setRotation1] = useState(0)
  const [rotation2, setRotation2] = useState(0)
  const [rotation3, setRotation3] = useState(0)
  const [rotation4, setRotation4] = useState(0)
  const [rotation5, setRotation5] = useState(0)
  const [rotation6, setRotation6] = useState(0)

  const hexString1 = useMemo(
    () => (typeof colorHex1 === 'string' ? colorHex1 : colorHex1.toHexString()),
    [colorHex1]
  )

  const hexString2 = useMemo(
    () => (typeof colorHex2 === 'string' ? colorHex2 : colorHex2.toHexString()),
    [colorHex2]
  )

  const hexString3 = useMemo(
    () => (typeof colorHex3 === 'string' ? colorHex3 : colorHex3.toHexString()),
    [colorHex3]
  )

  const hexString4 = useMemo(
    () => (typeof colorHex4 === 'string' ? colorHex4 : colorHex4.toHexString()),
    [colorHex4]
  )

  const hexString5 = useMemo(
    () => (typeof colorHex5 === 'string' ? colorHex5 : colorHex5.toHexString()),
    [colorHex5]
  )

  const hexString6 = useMemo(
    () => (typeof colorHex6 === 'string' ? colorHex6 : colorHex6.toHexString()),
    [colorHex6]
  )

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    // console.log('log', e.target.files[0])
    // await FileSystem.writeFile({
    //   path: '../public/test.png',
    //   data: e.target.files[0],
    //   directory: Direactory.Data,
    // })
    const elemnt: any = e.nativeEvent.srcElement
    // console.log('status', elemnt.id)
    const element: any = e.target
    console.log('file', URL.createObjectURL(element.files[0]))
    switch (elemnt.id) {
      case 'temp-file1':
        setFile1(URL.createObjectURL(element.files[0]))
        break
      case 'temp-file2':
        setFile2(URL.createObjectURL(element.files[0]))
        break
      case 'temp-file3':
        setFile3(URL.createObjectURL(element.files[0]))
        break
      case 'temp-file4':
        setFile4(URL.createObjectURL(element.files[0]))
        break
      case 'temp-file5':
        setFile5(URL.createObjectURL(element.files[0]))
        break
      case 'temp-file6':
        setFile6(URL.createObjectURL(element.files[0]))
        break
    }
  }

  const handleOneFileChange = (e: any) => {
    setOneFile(URL.createObjectURL(e.target.files[0]))
  }

  const onAllClear = () => {
    setFile1('./dice1.png')
    setFile2('./dice2.png')
    setFile3('./dice3.png')
    setFile4('./dice4.png')
    setFile5('./dice5.png')
    setFile6('./dice6.png')
  }

  const onClear = (status: any) => {
    console.log('status', status)
    switch (status) {
      case 1:
        setFile1('./dice1.png')
        break
      case 2:
        setFile2('./dice2.png')
        break
      case 3:
        setFile3('./dice3.png')
        break
      case 4:
        setFile4('./dice4.png')
        break
      case 5:
        setFile5('./dice5.png')
        break
      case 6:
        setFile6('./dice6.png')
        break
    }
  }

  const newReDoRotate = (rotation: any) => {
    let newRotation = rotation + 90
    if (newRotation >= 360) {
      newRotation = -360
    }
    return newRotation
  }

  const newUndoRotate = (rotation: any) => {
    let newRotation = rotation - 90
    if (newRotation <= 0) {
      newRotation = +360
    }
    return newRotation
  }

  const reDoRotate = (status: any) => {
    let newRotation
    switch (status) {
      case 1:
        newRotation = newReDoRotate(rotation1)
        setRotation1(newRotation)
        break
      case 2:
        newRotation = newReDoRotate(rotation2)
        setRotation2(newRotation)
        break
      case 3:
        newRotation = newReDoRotate(rotation3)
        setRotation3(newRotation)
        break
      case 4:
        newRotation = newReDoRotate(rotation4)
        setRotation4(newRotation)
        break
      case 5:
        newRotation = newReDoRotate(rotation5)
        setRotation5(newRotation)
        break
      case 6:
        newRotation = newReDoRotate(rotation6)
        setRotation6(newRotation)
        break
    }
  }

  const unDoRotate = (status: any) => {
    let newRotation
    switch (status) {
      case 1:
        newRotation = newUndoRotate(rotation1)
        setRotation1(newRotation)
        break
      case 2:
        newRotation = newUndoRotate(rotation2)
        setRotation2(newRotation)
        break
      case 3:
        newRotation = newUndoRotate(rotation3)
        setRotation3(newRotation)
        break
      case 4:
        newRotation = newUndoRotate(rotation4)
        setRotation4(newRotation)
        break
      case 5:
        newRotation = newUndoRotate(rotation5)
        setRotation5(newRotation)
        break
      case 6:
        newRotation = newUndoRotate(rotation6)
        setRotation6(newRotation)
        break
    }
  }

  const rotateRender = (status: any) => {
    let rotation
    switch (status) {
      case 1:
        rotation = rotation1
        break
      case 2:
        rotation = rotation2
        break
      case 3:
        rotation = rotation3
        break
      case 4:
        rotation = rotation4
        break
      case 5:
        rotation = rotation5
        break
      case 6:
        rotation = rotation6
        break
    }
    return rotation
  }

  const colorRender = (status: any) => {
    let render
    switch (status) {
      case 1:
        render = (
          <Space>
            <Col>
              <ColorPicker
                format={formatHex1}
                value={colorHex1}
                onChange={setColorHex1}
                onFormatChange={setFormatHex1}
              />
            </Col>
            <Col>
              HEX: <span>{hexString1}</span>
            </Col>
          </Space>
        )
        break
      case 2:
        render = (
          <Space>
            <Col>
              <ColorPicker
                format={formatHex2}
                value={colorHex2}
                onChange={setColorHex2}
                onFormatChange={setFormatHex2}
              />
            </Col>
            <Col>
              HEX: <span>{hexString2}</span>
            </Col>
          </Space>
        )
        break

      case 3:
        render = (
          <Space>
            <Col>
              <ColorPicker
                format={formatHex3}
                value={colorHex3}
                onChange={setColorHex3}
                onFormatChange={setFormatHex3}
              />
            </Col>
            <Col>
              HEX: <span>{hexString3}</span>
            </Col>
          </Space>
        )
        break

      case 4:
        render = (
          <Space>
            <Col>
              <ColorPicker
                format={formatHex4}
                value={colorHex4}
                onChange={setColorHex4}
                onFormatChange={setFormatHex4}
              />
            </Col>
            <Col>
              HEX: <span>{hexString4}</span>
            </Col>
          </Space>
        )
        break

      case 5:
        render = (
          <Space>
            <Col>
              <ColorPicker
                format={formatHex5}
                value={colorHex5}
                onChange={setColorHex5}
                onFormatChange={setFormatHex5}
              />
            </Col>
            <Col>
              HEX: <span>{hexString5}</span>
            </Col>
          </Space>
        )
        break

      case 6:
        render = (
          <Space>
            <Col>
              <ColorPicker
                format={formatHex6}
                value={colorHex6}
                onChange={setColorHex6}
                onFormatChange={setFormatHex6}
              />
            </Col>
            <Col>
              HEX: <span>{hexString6}</span>
            </Col>
          </Space>
        )
        break
    }
    return render
  }

  const imageUpload = (status: any, path: string) => {
    let compareString = './dice' + status + '.png'
    if (path == compareString) path = ''
    return (
      <div>
        {colorRender(status)}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <img src={`dice${status}.png`} style={{ width: '25px', height: '25px' }} />
        </div>
        <div
          style={{
            border: 'solid 2px',
            width: '200px',
            height: '200px',
            borderColor: 'black',
            marginBottom: '10px',
          }}
        >
          {path != '' && (
            <img
              src={path}
              style={{
                width: '200px',
                height: '200px',
                transform: `rotate(${rotateRender(status)}deg)`,
              }}
            />
          )}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingLeft: '20px',
            paddingRight: '20px',
          }}
        >
          <ImRedo
            color='black'
            width={100}
            height={100}
            onClick={() => reDoRotate(status)}
          />
          <ImUndo
            color='black'
            width={100}
            height={100}
            onClick={() => unDoRotate(status)}
          />
          <ImBin2
            color='black'
            width={100}
            height={100}
            onClick={() => onClear(status)}
          />
          <label htmlFor={`temp-file${status}`}>
            <input
              type='file'
              id={`temp-file${status}`}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <ImFolderUpload color='black' width={100} height={100} />
          </label>
        </div>
      </div>
    )
  }

  const onToogleChange = (checked: boolean) => {
    console.log('checked', checked)
    setToolge(checked)
  }

  const onSave = (scene: any) => {
    // var geometry = new THREE.BoxGeometry(10, 10, 10)
    // var materials = [
    //   new THREE.MeshBasicMaterial({ color: 0xffffff, visible: true }),
    //   new THREE.MeshBasicMaterial({ color: 0xff0000, visible: true }),
    //   new THREE.MeshBasicMaterial({ color: 0x00ff00, visible: true }),
    //   new THREE.MeshBasicMaterial({ color: 0x0000ff, visible: true }),
    //   new THREE.MeshBasicMaterial({ color: 0xffff00, visible: true }),
    //   new THREE.MeshBasicMaterial({ color: 0x00ffff, visible: true }),
    // ]
    // var mesh = new THREE.Mesh(geometry, materials)
    // newScene.add(mesh)
    // const geometry = new BoxGeometry(100, 10, 100)
    // const material = new MeshBasicMaterial({ color: 0x00ff00 })
    // const newBox = new Mesh(geometry, material)
    // newBox.position.set(0, 10, 0)
    // newScene.add(newBox)
    console.log('scene', scene)
    const gltfExporter = new GLTFExporter()

    // gltfExporter.parse(
    //   // The scene containing the 3D object you want to export
    //   scene,
    //   (result: any) => {
    //     console.log('result', result)
    //     // Save the result as a GLB file
    //     const blob = new Blob([result], { type: 'application/octet-stream' })
    //     const url = URL.createObjectURL(blob)
    //     console.log('url', url)
    //     const link = document.createElement('a')
    //     link.href = url
    //     link.download = 'model.glb'
    //     link.click()
    //     console.log('link', link)
    //     URL.revokeObjectURL(url)
    //   },
    //   {
    //     binary: true, // Export as binary GLB format
    //   }
    // )

    const options = {
      trs: false,
      onlyVisible: false,
      trunteDrawRange: true,
      binary: true,
      forcePowerOfTwoTextures: false,
      maxTextureSize: 1024 || Infinity,
    }
    let output
    gltfExporter.parse(
      scene,
      function (result) {
        if (result instanceof ArrayBuffer) {
          output = result
        } else {
          output = JSON.stringify(result, null, 2)
        }
        const blob = new Blob([output], { type: 'application/octet-stream' })
        const url = URL.createObjectURL(blob)
        console.log('url', url)
        const link = document.createElement('a')
        link.href = url
        link.download = 'model.glb'
        link.click()
        URL.revokeObjectURL(url)
      },
      function (error) {
        console.log('An error happened during parsing', error)
      },
      options
    )
  }
  const onColorClear = () => {
    setColorHex1('#ffffff')
    setColorHex2('#ffffff')
    setColorHex3('#ffffff')
    setColorHex4('#ffffff')
    setColorHex5('#ffffff')
    setColorHex6('#ffffff')
  }

  const onSizeClear = () => {
    setInputWidthValue(3)
    setInputHeightValue(3)
    setInputDepthValue(3)
  }
  const onChangeWidth = (value: number) => {
    if (isNaN(value)) {
      return
    }
    setInputWidthValue(value)
  }
  const onChangeHeight = (value: number) => {
    if (isNaN(value)) {
      return
    }
    setInputHeightValue(value)
  }
  const onChangeDepth = (value: number) => {
    if (isNaN(value)) {
      return
    }
    setInputDepthValue(value)
  }

  return (
    <div className='main'>
      <Leva
        collapsed={false}
        oneLineLabels={false}
        flat={true}
        theme={{
          sizes: {
            titleBarHeight: '28px',
          },
          fontSizes: {
            root: '10px',
          },
        }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <div
          style={{
            width: '300px',
            height: '300px',
            border: 'solid 2px',
            borderColor: 'black',
          }}
        >
          <div style={{ display: 'flex', marginTop: '75px' }}>
            <div style={{ marginTop: '75px' }}>
              <img
                src={toogle == true ? file1 : 'dice1.png'}
                style={{
                  width: '75px',
                  height: '75px',
                  transform: `rotate(${rotation1}deg)`,
                }}
              />
            </div>
            {allOne == false && (
              <>
                <div style={{ marginTop: '75px' }}>
                  <img
                    src={toogle == true ? file2 : 'dice2.png'}
                    style={{
                      width: '75px',
                      height: '75px',
                      transform: `rotate(${rotation2}deg)`,
                    }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <img
                    src={toogle == true ? file6 : 'dice6.png'}
                    style={{
                      width: '75px',
                      height: '75px',
                      transform: `rotate(${rotation6}deg)`,
                    }}
                  />
                  <img
                    src={toogle == true ? file3 : 'dice3.png'}
                    style={{
                      width: '75px',
                      height: '75px',
                      transform: `rotate(${rotation3}deg)`,
                    }}
                  />
                  <img
                    src={toogle == true ? file5 : 'dice5.png'}
                    style={{
                      width: '75px',
                      height: '75px',
                      transform: `rotate(${rotation5}deg)`,
                    }}
                  />
                </div>
                <div style={{ marginTop: '75px' }}>
                  <img
                    src={toogle == true ? file4 : 'dice4.png'}
                    style={{
                      width: '75px',
                      height: '75px',
                      transform: `rotate(${rotation4}deg)`,
                    }}
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <div>
          <div>
            <button
              style={{
                width: '100px',
                height: '50px',
                backgroundColor: 'white',
                color: 'black',
                marginTop: '30px',
              }}
              onClick={() => setAllOne(!allOne)}
            >
              {allOne == false ? 'All one' : 'Each one'}
            </button>
          </div>
          <div style={{ marginTop: '180px' }}>
            <Switch onChange={onToogleChange} checked={toogle} />
          </div>
        </div>
        <Canvas
          style={{
            width: '300px',
            height: '300px',
            border: 'solid 2px',
            borderColor: 'black',
          }}
          dpr={[1, 2]}
          gl={{
            antialias: true,
            toneMapping: ACESFilmicToneMapping,
            outputEncoding: sRGBEncoding,
          }}
          camera={{
            fov: 55,
            near: 0.2,
            far: 200,
            position: [5, 2, 5],
          }}
          shadows
        >
          <Scene
            file1={file1}
            file2={file2}
            file3={file3}
            file4={file4}
            file5={file5}
            file6={file6}
            hexString1={hexString1}
            hexString2={hexString2}
            hexString3={hexString3}
            hexString4={hexString4}
            hexString5={hexString5}
            hexString6={hexString6}
            rotation1={rotation1}
            rotation2={rotation2}
            rotation3={rotation3}
            rotation4={rotation4}
            rotation5={rotation5}
            rotation6={rotation6}
            inputWidthValue={inputWidthValue}
            inputHeightValue={inputHeightValue}
            inputDepthValue={inputDepthValue}
            allOne={allOne}
            scene={scene}
            handleScene={setScene}
          />
        </Canvas>
        <div className='control' style={{ marginTop: '30px' }}>
          <div>
            <button
              style={{
                width: '100px',
                height: '50px',
                backgroundColor: 'white',
                color: 'black',
              }}
              onClick={() => onSave(scene)}
            >
              Save
            </button>
          </div>
          <div>
            <button
              style={{
                width: '100px',
                height: '50px',
                backgroundColor: 'white',
                color: 'black',
                marginTop: '30px',
              }}
              onClick={onAllClear}
            >
              Clear
            </button>
          </div>
          <div>
            <button
              style={{
                width: '100px',
                height: '50px',
                backgroundColor: 'white',
                color: 'black',
                marginTop: '30px',
              }}
              onClick={onColorClear}
            >
              Reset Colors
            </button>
          </div>
          <div>
            <button
              style={{
                width: '100px',
                height: '50px',
                backgroundColor: 'white',
                color: 'black',
                marginTop: '30px',
              }}
              onClick={onSizeClear}
            >
              Reset Size
            </button>
          </div>
          <div style={{ marginTop: '25px' }}>
            <Row>
              <Col span={8} style={{ marginTop: '3px' }}>
                <span style={{ color: 'black' }}>Width:</span>
              </Col>
              <Col span={12}>
                <Slider
                  min={0}
                  max={10}
                  onChange={onChangeWidth}
                  value={typeof inputWidthValue === 'number' ? inputWidthValue : 0}
                  step={0.1}
                />
              </Col>
              <Col span={2}>
                <InputNumber
                  min={0}
                  max={10}
                  style={{ margin: '0 16px' }}
                  step={0.1}
                  value={inputWidthValue}
                  onChange={(e: any) => onChangeWidth(e)}
                />
              </Col>
            </Row>
            <Row>
              <Col span={8} style={{ marginTop: '3px' }}>
                <span style={{ color: 'black' }}>Height:</span>
              </Col>
              <Col span={12}>
                <Slider
                  min={0}
                  max={10}
                  onChange={(e: any) => onChangeHeight(e)}
                  value={typeof inputHeightValue === 'number' ? inputHeightValue : 0}
                  step={0.1}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={0}
                  max={10}
                  style={{ margin: '0 16px' }}
                  step={0.1}
                  value={inputHeightValue}
                  onChange={(e: any) => onChangeHeight(e)}
                />
              </Col>
            </Row>
            <Row>
              <Col span={8} style={{ marginTop: '3px' }}>
                <span style={{ color: 'black' }}>Depth:</span>
              </Col>
              <Col span={12}>
                <Slider
                  min={0}
                  max={10}
                  onChange={onChangeDepth}
                  value={typeof inputDepthValue === 'number' ? inputDepthValue : 0}
                  step={0.1}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={0}
                  max={10}
                  style={{ margin: '0 16px' }}
                  step={0.1}
                  value={inputDepthValue}
                  onChange={(e: any) => onChangeDepth(e)}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: allOne == false ? 'space-between' : 'center',
          padding: '100px',
        }}
      >
        {imageUpload(1, file1)}
        {allOne == false && (
          <>
            {imageUpload(2, file2)}
            {imageUpload(3, file3)}
            {imageUpload(4, file4)}
            {imageUpload(5, file5)}
            {imageUpload(6, file6)}
          </>
        )}
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)
