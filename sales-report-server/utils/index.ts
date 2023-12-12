export const toPercentage = (value?: number): number | undefined => {
  if (value == null || isNaN(value)) return undefined

  return Number((value * 100).toFixed(2))
}
