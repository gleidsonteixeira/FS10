let numero: number = 0;

function somar(p1: number, p2: number): number{
    return p1 + p2 + 3;
}
somar(1, 2);

type Pessoa = {
    nome: string,
    idade: number
}

type Raca = {
    etinia?: string
}

let pessoa: Pessoa & Raca = {
    nome: "gleidson",
    idade: 12
}

let outraPessoa: Pessoa & Raca = {
    nome: "Joao",
    idade: 12,
    etinia: "branco"
}
