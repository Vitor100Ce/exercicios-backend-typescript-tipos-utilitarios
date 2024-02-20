type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}

const cadastrarUsuário = (info: Usuario): Usuario => {
    return info;
}

type UsuarioSemRg = Omit<Usuario, 'rg'>

const cadastrarUsuarioSemRg = (info: Required<UsuarioSemRg>): UsuarioSemRg => {
    return info;
}

console.log(cadastrarUsuarioSemRg(
    {
        nome:'ajivhf',
        email: 'string',
        cpf: 'string',
        dataNacimento: 'string'
    }
))

