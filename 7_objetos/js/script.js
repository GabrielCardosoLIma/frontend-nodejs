// JSON JAVASCRIPT OBJECT NOTATION
var obj = {
    nome: "Edmar",
    idade: 29,
    Profissão: 'Design gráfico',
    estaTrabalhando: false,
}

console.log(obj);
console.log(typeof obj);

var arr = [5, "Francisco, true"]
console.log(arr);
console.log(typeof arr);

console.log(arr[1]);
console.log(obj.nome);
console.log(obj.profissao);

var valores = [2,3,4,5,6];
console.log(valores);
valores[4] = 10;
valores[5] = 100;
console.log(valores);

console.log(`A Profissão dele é $(obj.profissao)`);

obj.nome = 'Francisco';
obj.graduacao = false;
obj.estaTrabalhando = true;
console.log(obj)