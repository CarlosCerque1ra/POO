class Pessoa {
    constructor(nome, idade, doenca) {
        this.nome = nome;
        this.idade = idade;
        this.doenca = doenca;
    }
}

class Paciente extends Pessoa {
    apresentar = () => console.log(`Olá, sou o paciente ${this.nome}`);
    exibirIdade = () => console.log(`Tenho ${this.idade} anos.`);
    exibirIdadeDoenca = () => console.log(`E estou com a doença ${this.doenca}`);
}

class Medico extends Pessoa {
    constructor(nome, idade, doenca, funcao) {
        super(nome, idade, doenca); // Chama o construtor da classe Pessoa
        this.funcao = funcao; // Inicializa a função do médico
    }

    apresentar = () => console.log(`Sou o(a) médico(a) ${this.nome}`);
    exibirFuncao = () => console.log(`Minha área é ${this.funcao}`);
}

// Criando os objetos
const carlos = new Medico("Carlos", 16, "N/A", "pediatra");
const alfredo = new Medico("Alfredo", 26, "N/A", "Oncologista");
const gabriel = new Paciente("Gabriel", 24, "câncer");
const pacheco = new Paciente("Pacheco", 17, "HIV");
const gutin = new Paciente("Gustavo", 17, "AINDS");
const nicolas = new Paciente("Nicolas", 19, "Lepra");
const guilherme = new Paciente("Guilherme", 26, "Peste negra");

// Array com todos os objetos (médicos e pacientes)
const pessoas = [carlos, alfredo, gabriel, pacheco, gutin, nicolas, guilherme];

// Função para preencher a tabela
function preencherTabela(pessoas) {
    const tabelaBody = document.querySelector('#tabela tbody'); // Seleciona o corpo da tabela
    
    // Limpa qualquer dado anterior
    tabelaBody.innerHTML = '';

    // Itera sobre a lista de pessoas e cria uma linha para cada uma
    pessoas.forEach(pessoa => {
        const linha = document.createElement('tr'); // Cria uma nova linha na tabela

        // Cria as células (colunas) para cada pessoa
        const nomeCelula = document.createElement('td');
        nomeCelula.textContent = pessoa.nome;
        
        const idadeCelula = document.createElement('td');
        idadeCelula.textContent = pessoa.idade;
        
        const doencaCelula = document.createElement('td');
        doencaCelula.textContent = pessoa.doenca;
        
        const funcaoCelula = document.createElement('td');
        funcaoCelula.textContent = pessoa instanceof Medico ? pessoa.funcao : 'Paciente'; // Exibe a função se for médico, caso contrário, exibe 'N/A'

        // Adiciona as células à linha
        linha.appendChild(nomeCelula);
        linha.appendChild(idadeCelula);
        linha.appendChild(doencaCelula);
        linha.appendChild(funcaoCelula);

        // Adiciona a linha ao corpo da tabela
        tabelaBody.appendChild(linha);
    });
}

// Preenche a tabela com os dados
preencherTabela(pessoas);
