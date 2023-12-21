export interface ParticlePos {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
}

export const Text = () => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

  const setText = (str: string, density: number, stageWidth: number, stageHeight: number) => {
    canvas.width = stageWidth
    canvas.height = stageHeight

    const myText = str
    const fontWidth = 400
    const fontSize = 300
    const fontName = 'Hind'

    ctx.clearRect(0, 0, stageWidth, stageHeight)
    ctx.font = `${fontWidth} ${fontSize}px ${fontName}`
    ctx.fillStyle = `rgba(0, 0, 0, 0.3)`
    ctx.textBaseline = `middle`

    const fontPos = ctx.measureText(myText)

    ctx.fillText(
      myText,
      (stageWidth - fontPos.width) / 2,
      fontPos.actualBoundingBoxAscent +
        fontPos.actualBoundingBoxDescent +
        (stageHeight - fontSize) / 2
    )

    return dotPos(density, stageWidth, stageHeight)
  }

  const dotPos = (density: number, stageWidth: number, stageHeight: number) => {
    const imageData = ctx.getImageData(0, 0, stageWidth, stageHeight).data

    const particles: ParticlePos[] = []
    let i = 0
    let width = 0
    let pixel: number

    for (let height = 0; height < stageHeight; height += density) {
      ++i
      const slide = i % 2 === 0
      width = 0

      if (slide) {
        width += 6
      }

      for (width; width < stageWidth; width += density) {
        pixel = imageData[(width + height * stageWidth) * 4 - 1]
        if (pixel !== 0 && width > 0 && width < stageWidth && height > 0 && height < stageHeight) {
          particles.push({
            x: width,
            y: height,
            radius: 0,
            vx: 0,
            vy: 0,
          })
        }
      }
    }

    return particles
  }

  return { setText }
}
