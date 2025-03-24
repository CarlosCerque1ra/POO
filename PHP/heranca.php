<?php

class Pessoas{
    public $nome;
    public $idade;

    public function __construct($nome, $idade)
    {
        $this->nome = $nome;
        $this->idade = $idade;
    }

    public function apresentar (){
        echo "Olá! Sou {$this->nome}, tenho {$this->idade} anos.<br>";
    }
}

// A classe ALuno vai herdar de Pessoas

class Aluno extends Pessoas{
    public function estudar (){
        echo "{$this->nome} está estudando.<br>";
    }
}


class Professor extends Pessoas{
    public function ensinar (){
        echo "{$this->nome} está ensinando.";
    }
}

$carlos = new Aluno ("Carlos", 17);
$stefany = new Professor ("Stefany", 38);
echo $carlos->apresentar();
echo $carlos->estudar();
echo $stefany->apresentar();
echo $stefany->ensinar();

?>