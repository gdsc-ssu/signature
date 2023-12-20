import * as PIXI from 'pixi.js'

import { Particle } from '@/components/Particle/Particle'
import { ParticlePos, Text } from '@/components/Text/Text'

export interface Mouse {
  x: number
  y: number
  radius: number
}

export const Visual = (text: string) => {
  const { setText } = Text()
  const texture = PIXI.Texture.from('particle.png')
  const mouse = {
    x: 0,
    y: 0,
    radius: 50,
  }

  let container!: PIXI.ParticleContainer

  let particles: Particle[] = []
  let pos!: ParticlePos[]

  const show = (stageWidth: number, stageHeight: number, stage: PIXI.Container) => {
    if (container) {
      stage.removeChild(container)
    }

    pos = setText(text, 2, stageWidth, stageHeight)

    container = new PIXI.ParticleContainer(pos.length, {
      vertices: false,
      position: true,
      rotation: false,
      uvs: false,
      tint: false,
    })

    stage.addChild(container)

    particles = []
    for (let i = 0; i < pos.length; i++) {
      const item = new Particle(pos[i], texture)
      container.addChild(item.sprite)
      particles.push(item)
    }
  }

  const animate = () => {
    for (let i = 0; i < particles.length; i++) {
      const item = particles[i]
      const dx = mouse.x - item.x
      const dy = mouse.y - item.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      const minDist = item.radius + mouse.radius

      if (dist < minDist) {
        const angle = Math.atan2(dy, dx)
        const tx = item.x + Math.cos(angle) * minDist
        const ty = item.y + Math.sin(angle) * minDist
        const ax = tx - mouse.x
        const ay = ty - mouse.y
        item.vx -= ax
        item.vy -= ay
      }

      item.draw()
    }
  }

  const onMove = (e: PointerEvent) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  }

  document.addEventListener('pointermove', onMove.bind(this), false)

  return {
    show,
    animate,
  }
}
