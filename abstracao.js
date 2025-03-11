class Pessoa{
    constructor(nome) {
        if(this.constructor === Pessoa){
            throw new Error("Não pode criar outra classe PESSOA, SEU INBECIL! INUTIL!")
        }
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


const gabriel = new Aluno("Gabriel")
const raul = new Professor("Raul")

// chamando o Pessoa vai dar erro devido o if la encima
// Se retirarmos esse const carlos = new Pessoa("Carlos") vai funcionar normalmente o codigo
const carlos = new Pessoa("Carlos")


gabriel.apresentar()


raul.apresentar()
