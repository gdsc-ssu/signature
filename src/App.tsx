import * as PIXI from 'pixi.js'

import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { Visual } from '@/components/Visual/Visual'

export const App = () => {
  let renderer!: PIXI.Renderer
  let stage!: PIXI.Container
  const { show, animate } = Visual()

  let stageWidth!: number
  let stageHeight!: number

  const initRenderer = () => {
    renderer = new PIXI.Renderer({
      width: document.body.clientWidth,
      height: document.body.clientHeight,
      antialias: true,
      transparent: false,
      resolution: window.devicePixelRatio > 1 ? 2 : 1,
      autoDensity: true,
      powerPreference: 'high-performance',
      backgroundColor: 0xffffff,
    })
  }

  const renderRenderer = () => {
    document.body.appendChild(renderer.view)
  }

  const initStage = () => {
    stage = new PIXI.Container()
  }

  const addFilterToStage = () => {
    const blurFilter = new PIXI.filters.BlurFilter()
    blurFilter.blur = 10
    blurFilter.autoFit = true

    const fragSource = `
      precision mediump float;
      varying vec2 vTextureCoord;
      uniform sampler2D uSampler;
      uniform float threshold;
      uniform float mr;
      uniform float mg;
      uniform float mb;
      void main(void) {
        vec4 color = texture2D(uSampler, vTextureCoord);
        vec3 mcolor = vec3(mr, mg, mb);
        if(color.a > threshold) {
          gl_FragColor = vec4(mcolor, 1.0);
        } else {
          gl_FragColor = vec4(vec3(0.0), 0.0);
        }
      }
    `

    const uniformsData = {
      threshold: 0.5,
      mr: 180.0 / 255.0,
      mg: 100.0 / 255.0,
      mb: 200.0 / 255.0,
    }

    const thresholdFilter = new PIXI.Filter(undefined, fragSource, uniformsData)
    stage.filters = [blurFilter, thresholdFilter]

    stage.filterArea = renderer.screen
  }

  const resize = () => {
    stageWidth = document.body.clientWidth
    stageHeight = document.body.clientHeight

    renderer.resize(stageWidth, stageHeight)

    show(stageWidth, stageHeight, stage)
  }

  const appAnimate = () => {
    requestAnimationFrame(appAnimate)

    animate()

    renderer.render(stage)
  }

  initRenderer()
  renderRenderer()

  initStage()
  addFilterToStage()

  window.addEventListener('resize', resize.bind(this), false)
  resize()

  requestAnimationFrame(appAnimate.bind(this))

  return (
    <>
      <Header />
      <Footer />
    </>
  )
}
