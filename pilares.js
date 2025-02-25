// Criando a classe Aluno
class Aluno{
    #nota
    constructor(nome, idade, nota) {
        // constructor e um metodo tradicional
        this.nome = nome;
        this.idade = idade;
        this.#nota = nota;

    }
    estudar = () => console.log(`${this.nome} esta estudando.`);
    
    verNota = () => this.#nota
    
    tudo = () => console.log(`${this.nome}, tem ${this.idade} anos, e tirou ${this.#nota} na prova de html`)
}

const carlos = new Aluno("Carlos" , 16, 93) 

// console.log(carlos.nome)
carlos.tudo()

