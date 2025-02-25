// Criar classe Pessoa
// Com parametros Nome idade
class Pessoa{
    constructor(nome, idade) {
        // constructor e um metodo tradicional
        this.nome = nome;
        this.idade = idade;

    }
    // Metodo apresentar
    apresentar = () => console.log(`Ola sou ${this.nome} e tenho ${this.idade} anos de idade.`);
}
    // a classe aliuno vai pegar as informações de Pessoa
    class Aluno extends Pessoa{
        estudar = () => console.log(`${this.nome} esta estudando`)

    }

    class Professor extends Pessoa{
        ensinar = () => console.log(`${this.nome} esta ensinando `)

    }
// Criando objetos
    const carlos = new Aluno("Carlos" , 16)
    const gabriel = new Aluno("Gabriel" , 16)

    const raul = new Professor("Raul", 28)
    const nadja = new Professor("Nadja", 28)

    carlos.apresentar()
    raul.apresentar()
    nadja.apresentar()
    carlos.estudar()
    raul.ensinar()

