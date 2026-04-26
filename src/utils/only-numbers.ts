export function onlyNumbersToString(value?: string): string {
    return value?.replace(/\D/g, '') ?? '';
}