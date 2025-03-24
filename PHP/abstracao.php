<?php

abstract class Pessoa{
    public $nome;

    public function __construct($nome)
    {
        $this->nome = $nome;
    }
}

class Aluno extends Pessoa{
}

$carlos = new Aluno("Carlos");

echo $carlos->nome . "E ele";

?>