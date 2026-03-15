type tipoMask =
    'apenasLetras' |
    'telefone' |
    'date' 

function useMask() {
    function apenasLetras(valor: string): string {
        return valor.replace(/[^\p{L}\s]/gu, '')
    }

    function apenasNumeros(valor: string, max?: number): string {
        if (max && valor.length >= max) {
            return valor.substring(0, max)
        }
        return valor.replace(/[^\d]/g, '');
    }

    function telefoneMask(value: string): string {
        if (value.length > 15) return value.substring(0, 15)
        if (value.length == 0) return ''
        // Remove tudo que não for número
        const digits = value.replace(/\D/g, '');

        // Aplica a máscara
        if (digits.length <= 2) {
            return `(${digits}`;
        } else if (digits.length <= 7) {
            return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
        } else if (digits.length <= 11) {
            return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
        } else {
            return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
        }
    }

    function dateMask(value: string): string {
        if (value.length > 10) return value.substring(0, 10)

        // Remove tudo que não for número
        let digits = value.replace(/\D/g, '');

        // Aplica a máscara
        if (digits.length > 2 && digits.length <= 4) {
            digits = digits.slice(0, 2) + '/' + digits.slice(2);
        } else if (digits.length > 4) {
            digits = digits.slice(0, 2) + '/' + digits.slice(2, 4) + '/' + digits.slice(4, 8);
        }

        return digits
    }

    function mask(value: string, mask: tipoMask): string {
        switch (mask) {
            case 'apenasLetras':
                return apenasLetras(value)
            case 'telefone':
                return telefoneMask(value)
            case 'date':
                return dateMask(value)
            default:
                return ''
        }
    }

    return {
        mask,
        apenasNumeros
    }
}

export default useMask;