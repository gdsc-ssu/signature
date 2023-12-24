import LeonSans from '@nindaff/leonsans'
import { TweenMax } from 'gsap'

let leon: any, canvas, ctx: CanvasRenderingContext2D

const sw = window.innerWidth
const sh = window.innerHeight
const pixelRatio = 2

export const Init = (id: string) => {
  canvas = document.createElement('canvas')

  canvas.style.top = '0'
  canvas.style.left = '0'
  canvas.style.width = '100%'
  canvas.style.height = '100%'

  document.getElementById(id)?.appendChild(canvas)
  ctx = canvas.getContext('2d') as CanvasRenderingContext2D

  canvas.width = sw * pixelRatio
  canvas.height = sh * pixelRatio
  canvas.style.width = sw + 'px'
  canvas.style.height = sh + 'px'
  ctx.scale(pixelRatio, pixelRatio)

  requestAnimationFrame(animate)

  TextDrawing()
}

const animate = () => {
  requestAnimationFrame(animate)

  ctx.clearRect(0, 0, sw, sh)

  const x = (sw - leon.rect.w) / 2
  const y = (sh - leon.rect.h) / 2
  leon.position(x, y)

  leon.draw(ctx)
}

export const TextDrawing = () => {
  leon = new LeonSans({
    text: 'signature',
    color: ['#000000'],
    size: 150,
    weight: 200,
  })

  const total = leon.drawing.length
  for (let i = 0; i < total; i++) {
    TweenMax.fromTo(
      leon.drawing[i],
      1.6,
      {
        value: 0,
      },
      {
        delay: i * 0.2,
        value: 1,
        ease: Power4.easeOut,
      }
    )
  }
}
