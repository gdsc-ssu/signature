import * as PIXI from 'pixi.js'

import { Visual } from '@/components/Visual/Visual'

export class PixiManager {
  private renderer!: PIXI.Renderer
  private stage!: PIXI.Container
  private visual: ReturnType<typeof Visual>

  private readonly backgroundColor = 0xffffff
  private readonly blur = 10
  private readonly threshold = 0.5
  private readonly colorRed = 180.0 / 255.0
  private readonly colorGreen = 100.0 / 255.0
  private readonly colorBlue = 200.0 / 255.0

  constructor(id: string) {
    this.initRenderer(id)
    this.initStage()
    this.visual = Visual()
    this.addFilterToStage()
    window.addEventListener('resize', this.resize.bind(this), false)
    this.resize()
  }

  private initRenderer(id: string): void {
    this.renderer = new PIXI.Renderer({
      width: document.body.clientWidth,
      height: document.body.clientHeight,
      antialias: true,
      transparent: false,
      resolution: window.devicePixelRatio > 1 ? 2 : 1,
      autoDensity: true,
      powerPreference: 'high-performance',
      backgroundColor: this.backgroundColor,
    })
    document.getElementById(id)?.appendChild(this.renderer.view)
  }

  private initStage(): void {
    this.stage = new PIXI.Container()
  }

  private addFilterToStage(): void {
    const blurFilter = new PIXI.filters.BlurFilter()
    blurFilter.blur = this.blur
    blurFilter.autoFit = true

    const fragSource = `
      precision mediump float;
      varying vec2 vTextureCoord;
      uniform sampler2D uSampler;
      uniform float threshold;
      uniform vec3 mcolor;
      void main(void) {
        vec4 color = texture2D(uSampler, vTextureCoord);
        if (color.a > threshold) {
          gl_FragColor = vec4(mcolor, 1.0);
        } else {
          gl_FragColor = vec4(vec3(0.0), 0.0);
        }
      }
    `

    const uniformsData = {
      threshold: this.threshold,
      mcolor: [this.colorRed, this.colorGreen, this.colorBlue],
    }

    const thresholdFilter = new PIXI.Filter(undefined, fragSource, uniformsData)
    this.stage.filters = [blurFilter, thresholdFilter]
    this.stage.filterArea = this.renderer.screen
  }

  private resize(): void {
    const stageWidth = document.body.clientWidth
    const stageHeight = document.body.clientHeight
    this.renderer.resize(stageWidth, stageHeight)
    this.visual.show(stageWidth, stageHeight, this.stage)
  }

  public animate(): void {
    requestAnimationFrame(this.animate.bind(this))
    this.visual.animate()
    this.renderer.render(this.stage)
  }
}
