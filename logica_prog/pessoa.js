    class Pessoa {

        nome;
        endereco;
        valor = 10;

        constructor(nome, endereco){
            this.nome = nome;
            this.endereco = endereco;
        }

        consulta(){
            alert("nome: " + this.nome);
        }

        retorno(){
            return this.valor;
        }
    }