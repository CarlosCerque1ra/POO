<?php 
// Criando uma classe
class Aluno{
    public $nome;
    public $idade;

    public function __construct($nome, $idade)
    {    
        $this->nome = $nome;
        $this->idade = $idade;  
    }

    public function estudar (){
        echo "{$this->nome} está estudando";
    }
}

// Criando Objetos
$pedro = new Aluno ("Pedro", 15);
$ana = new Aluno ("Ana", 19);

// echo $pedro->nome;
$ana->estudar();


?>