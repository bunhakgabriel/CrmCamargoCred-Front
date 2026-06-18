export function onlyNumbersToString(value?: string | null): string {
    return value?.replace(/\D/g, '') ?? '';
}