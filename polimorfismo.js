// Criando a classe Aluno
class Pessoa{
    constructor(nome) {
        // constructor e um metodo tradicional
        this.nome = nome;

    }
    
}

class Aluno extends Pessoa{
    apresentar = () => console.log(`Olá eu sou aluno ${this.nome}.`);
}

class Professor extends Pessoa{
    apresentar = () => console.log(`Olá eu sou o/a professor(a) ${this.nome}.`);
}


const carlos = new Pessoa("Carlos") 
const gabriel = new Aluno("Gabriel")
const raul = new Professor("Raul")

// console.log(carlos.nome)


console.log(gabriel.nome)
gabriel.apresentar()

console.log(raul.nome)
raul.apresentar()
