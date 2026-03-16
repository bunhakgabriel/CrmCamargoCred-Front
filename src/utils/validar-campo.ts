type Validacoes =
    'email' |
    'telefone' |
    'data' |
    'isAdult' |
    'numRegistroCnh' |
    'validadeCnh'

function validarEmail(value: string): true | string {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (regex.test(value)) return true

    return 'Email inválido'
}

function validarTelefone(value: string): true | string {
    if (value.length == 15) return true

    return 'Telefone inválido'
}

function validarData(value: string): true | string {
    if (value.length == 10) return true

    return 'Data inválida'
}

function isAdult(value: string): true | string {
    if (value.length != 10) return 'Data inválida'

    const [dia, mes, ano] = value.split('/').map(Number);

    // Cria a data de nascimento
    const dataNasc = new Date(ano, mes - 1, dia);

    // Data de hoje
    const hoje = new Date();

    // Calcula a diferença de anos
    let idade = hoje.getFullYear() - dataNasc.getFullYear();

    // Ajusta se ainda não fez aniversário este ano
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();

    if (mesAtual < (mes - 1) || (mesAtual === (mes - 1) && diaAtual < dia)) {
        idade--;
    }

    return idade >= 18 ? true : 'É preciso ter mais de 18 anos para se cadastrar';
}

function numRegistroCnh(value: string): true | string {
    if (value.length != 11) return 'Número de registro inválido'
    return true
}

function validarValidadeCNH(dataExpiracaoStr: string): true | string {
    if (dataExpiracaoStr.length !== 10) return 'Data inválida';

    const [dia, mes, ano] = dataExpiracaoStr.split('/').map(Number);

    const dataExpiracao = new Date(ano, mes - 1, dia);
    const hoje = new Date();

    if (dataExpiracao > hoje) {
        return true;
    } else {
        return 'CNH vencida';
    }
}

export default function validarCampo(value: string, tipoValidacao?: Validacoes): true | string {
    switch (tipoValidacao) {
        case 'email':
            return validarEmail(value)
        case 'telefone':
            return validarTelefone(value)
        case 'data':
            return validarData(value)
        case 'isAdult':
            return isAdult(value)
        case 'numRegistroCnh':
            return numRegistroCnh(value)
        case 'validadeCnh':
            return validarValidadeCNH(value)
        default:
            return true
    }
}