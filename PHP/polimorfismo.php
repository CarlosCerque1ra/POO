<?php
class Pessoa {
    public $nome;

    public function __construct($nome)
    {
        $this->nome = $nome;
    }

    public function apresentar() {
        echo "Ola, sou {$this->nome}";
    }
}

// A classe Aluno herda de Pessoa e sobrescreve o método apresentar
class Aluno extends Pessoa {
    public function apresentar() {
        echo "Oi! Meu nome é {$this->nome} e sou aluno";
    }
}

class Professor extends Pessoa {
    public function apresentar() {
        echo "Oi! Meu nome é {$this->nome} e sou professor";
    }
}

$carlos = new Aluno("Carlos");
$stefany = new Professor("Stefany");

$carlos->apresentar(); // Exibe: Oi! Meu nome é Carlos e sou aluno
echo "<br>";
$stefany->apresentar(); // Exibe: Oi! Meu nome é Stefany e sou professor
?>
