export type Product = {
    titulo: string
    valor: string
    descricao: string
    categoria: string
    cores: Color[]
    tamanhos: string[]
    fotos: Photo[]
}

export type Color = {
    nome: string
    codigo: string
}

export type Photo = {
    url: string
    capa: boolean
}
