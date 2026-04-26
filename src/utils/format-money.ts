export function formatMoneyToNumber(value: string): number {
  return Number(
    value
      .replace(/^R\$\s*/, '') 
      .replace(/\./g, '')
      .replace(',', '.')
  )
}