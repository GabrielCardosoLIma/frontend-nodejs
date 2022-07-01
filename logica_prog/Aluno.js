class Aluno{
    nome;
    curso;
    matricula;
    matstatus;

    constructor(nome,curso,matricula,matstatus){
        this.nome = nome;
        this.curso = curso;
        this.matricula = matricula;
        this.matstatus = matstatus;
    }

    consulta(){
        alert("nome:"+this.nome+" curso:"+this.curso+" matricula:"+this.matricula+" matstatus:"+this.matstatus);
    }

    alteracurso(curso){
        this.curso = curso;
    }

    alterastatus(status){
        this.matstatus = status;
    }
}