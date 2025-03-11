class Pessoa {
    constructor(nome, idade, doenca, sfuncao) {
        this.nome = nome;
        this.idade = idade;
        this.doenca = doenca;
        this.sfuncao = sfuncao
    }
}

class Paciente extends Pessoa {
    apresentar = () => {
        return `Olá, sou o paciente ${this.nome}`;
    }
    exibirIdade = () => {
        return ` Tenho ${this.idade} anos`;
    }
    exibirIdadeDoenca = () => {
        return ` e estou com a doença ${this.doenca}`;
    }   
}

class Medico extends Pessoa {
    apresentar = () => {
        return `Sou o(a) médico(a) ${this.nome}`;
    }
    exibirFuncao = () => {
        return ` Minha área é ${this.sfuncao}`;
    }
}

// Criando os objetos
const carlos = new Medico("Carlos", 16, "N/A", "pediatra");
const alfredo = new Medico("Alfredo", 26, "N/A", "Oncologista");
const gabriel = new Paciente("Gabriel", 24, "câncer");
const pacheco = new Paciente("Pacheco", 17, "HIV");
const gutin = new Paciente("Gustavo", 28, "AINDS");
const nicolas = new Paciente("Nicolas", 19, "Lepra");
const guilherme = new Paciente("Guilherme", 26, "Peste negra");

// document.getElementById("t1").innerText = `Olá, sou o paciente ${gabriel.nome}`
document.getElementById("t1").innerText = `${carlos.apresentar() +   carlos.exibirFuncao() }`
document.getElementById("t2").innerText = `${alfredo.apresentar() +   alfredo.exibirFuncao() }`


document.getElementById("t3").innerText = `${pacheco.apresentar() +   pacheco.exibirIdade() + pacheco.exibirIdadeDoenca() }`
document.getElementById("t4").innerText = `${gutin.apresentar() +   gutin.exibirIdade() + gutin.exibirIdadeDoenca() }`
document.getElementById("t5").innerText = `${nicolas.apresentar() +   nicolas.exibirIdade() + nicolas.exibirIdadeDoenca() }`
document.getElementById("t6").innerText = `${guilherme.apresentar() +   guilherme.exibirIdade() + guilherme.exibirIdadeDoenca() }`
document.getElementById("t7").innerText = `${gabriel.apresentar() +   gabriel.exibirIdade() + gabriel.exibirIdadeDoenca() }`

