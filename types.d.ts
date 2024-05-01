interface Categoria {
    id: number,
    nome: string,
    icone: string
}

interface Movimentacao {
    id: number,
    data: string,
    descricao: string,
    valor: number,
    tipo: string,
    categoria: Categoria
}