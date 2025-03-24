<?php

class Aluno{
    public $nome;
    public $idade;
    private $nota; //Atributo Privado

    public function __construct($nome, $idade, $nota)
    {
        $this->nome = $nome;
        $this->idade = $idade;
        $this->nota = $nota;
        
    }

    public function verNota(){
        return $this->nota;
    }
}

$alexandre = new Aluno("Alexandre", 38, 9);

echo $alexandre->nome;
echo $alexandre->verNota();
?>