type HandMoveEvent = CustomEvent<{ x: number; y: number }>

interface CustomEventMap {
  handmove: HandMoveEvent
}

declare global {
  interface Document {
    //adds definition to Document, but you can do the same with HTMLElement
    addEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (e: CustomEventMap[K]) => void
    ): void
    dispatchEvent<K extends keyof CustomEventMap>(e: CustomEventMap[K]): void
  }
}
export { HandMoveEvent }
