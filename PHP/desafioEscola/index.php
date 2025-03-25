<?php

class Pessoas {
    public $nome;
    public $idade;
    private $estcivil; // Atributo Privado

    // Adicionando o parâmetro $estcivil no construtor
    public function __construct($nome, $idade, $estcivil) {
        $this->nome = $nome;
        $this->idade = $idade;
        $this->estcivil = $estcivil; // Corrigindo a falta de ponto e vírgula
    }

    public function verestCivil() {
        return $this->estcivil;
    }
}

class Aluno extends Pessoas {
    public function estudar() {
        echo "Sou o aluno {$this->nome}, tenho {$this->idade} anos de idade e estou estudando e sou {$this->verestCivil()}<br>";
    }
}

class Professor extends Pessoas {
    public function ensinar() {
        echo "Sou o(a) professor(a) {$this->nome}, tenho {$this->idade} anos de idade e estou ensinando e sou {$this->verestCivil()}<br>";
    }
}


// Criando o objeto Aluno e passando o valor de estcivil
$alexandre = new Aluno("Alexandre", 12, "Solteiro");
$gabriel = new Aluno("Gabriel", 13, "Solteiro");
$raul = new Professor("Raul", 56, "Casado");
$antonela = new Professor("Antonela", 95, "Solteira")

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista</title>
</head>
<body>
    <p><?php  $alexandre->estudar(); ?></p>
    <p><?php  $gabriel->estudar(); ?></p>
    <p><?php  $raul->ensinar(); ?></p>
    <p><?php $antonela->ensinar();  ?></p>
</body>
</html>


