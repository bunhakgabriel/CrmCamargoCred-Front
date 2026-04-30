export function parseDateRequest(date: string): Date | undefined {
    if (!date) return undefined
    const [day, month, year] = date.split('/').map(Number)
    return new Date(year, month - 1, day)
}

export function parseDateResponse(date: Date | string) {
    const d = new Date(date)

    const day = String(d.getDate()).padStart(2, '0')
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const year = d.getFullYear()

    return `${day}/${month}/${year}`
}