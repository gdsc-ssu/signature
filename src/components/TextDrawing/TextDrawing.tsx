import LeonSans from '@nindaff/leonsans'

let leon: any, canvas, ctx: any

const sw = window.innerWidth
const sh = window.innerHeight
const pixelRatio = 2

export function init(id: string) {
  canvas = document.createElement('canvas')

  canvas.style.top = '0'
  canvas.style.left = '0'
  canvas.style.width = '100%'
  canvas.style.height = '100%'

  document.getElementById(id)?.appendChild(canvas)
  ctx = canvas.getContext('2d')

  canvas.width = sw * pixelRatio
  canvas.height = sh * pixelRatio
  canvas.style.width = sw + 'px'
  canvas.style.height = sh + 'px'
  ctx.scale(pixelRatio, pixelRatio)

  leon = new LeonSans({
    text: 'signature',
    color: ['#000000'],
    size: 150,
    weight: 200,
  })

  requestAnimationFrame(animate)
}

function animate() {
  requestAnimationFrame(animate)

  ctx.clearRect(0, 0, sw, sh)

  const x = (sw - leon.rect.w) / 2
  const y = (sh - leon.rect.h) / 2
  leon.position(x, y)

  leon.draw(ctx)
}
