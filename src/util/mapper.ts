export const locMapper = (from: number, to: number, value: number) => {
  // from : to = value : x
  return (to * value) / from
}
