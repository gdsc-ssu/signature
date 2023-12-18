import React from 'react'

import * as PIXI from 'pixi.js'

import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { Visual } from '@/components/Visual/Visual'

export default class App extends React.Component {
  renderer!: PIXI.Renderer
  stage!: PIXI.Container
  visual!: Visual

  stageWidth!: number
  stageHeight!: number

  constructor(props: any) {
    super(props)

    this.initRenderer()
    this.renderRenderer()

    this.initStage()
    this.addFilterToStage()

    this.initVisual()

    window.addEventListener('resize', this.resize.bind(this), false)
    this.resize()

    requestAnimationFrame(this.animate.bind(this))
  }

  initRenderer() {
    this.renderer = new PIXI.Renderer({
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

  renderRenderer() {
    document.body.appendChild(this.renderer.view)
  }

  initStage() {
    this.stage = new PIXI.Container()
  }

  addFilterToStage() {
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
    this.stage.filters = [blurFilter, thresholdFilter]

    this.stage.filterArea = this.renderer.screen
  }

  initVisual() {
    this.visual = new Visual()
  }

  resize() {
    this.stageWidth = document.body.clientWidth
    this.stageHeight = document.body.clientHeight

    this.renderer.resize(this.stageWidth, this.stageHeight)

    this.visual.show(this.stageWidth, this.stageHeight, this.stage)
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this))

    this.visual.animate()

    this.renderer.render(this.stage)
  }

  render() {
    return (
      <>
        <Header />
        <Footer />
      </>
    )
  }
}
