// Criando a classe Aluno
class Aluno{
    constructor(nome, idade) {
        // constructor e um metodo tradicional
        this.nome = nome;
        this.idade = idade;

    }
    estudar = () => console.log(`${this.nome} esta estudando.`);
    jogar = () => console.log(`${this.nome} esta jogando assetto corsa.`)
    cagar = () => console.log(`${this.nome} esta cagando`)
}

const carlos = new Aluno("Carlos" , 16) 
const gabriel = new Aluno("Gabriel", 16)
const pacheco = new Aluno("Pacheco", 17)

// console.log(carlos.nome)

console.log(pacheco.nome, pacheco.idade)
pacheco.cagar()