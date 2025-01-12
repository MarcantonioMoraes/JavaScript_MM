let frutas = ["Maça","Banana","Laranja"];
let removido = frutas.pop();
let pessoa = {
    nome: "Marcantonio", idade:34, cidade: "Recife"
};

//push	(Adiciona no final.)
// frutas.push("Manga");
//unshift	(Adiciona no início.)
// frutas.unshift("Manga");
//pop	(Remove do final.)
// frutas.pop()
// console.log(removido);("Manga")
//shift	(Remove do início.)
// frutas.shift()
// console.log(removido);("Maça")
//splice (Adiciona, remove ou substitui em qualquer posição.)
// frutas.splice(1, 1); // Remove 1 elemento na posição 1 (índice começa em 0)
// frutas.splice(1, 1, "Manga"); // Substitui 1 elemento na posição 1 por "Manga"
// frutas.splice(1, 0, "Manga"); // Adiciona "Manga" na posição 1



console.log(frutas);
console.log(frutas[0],"e",frutas[1]);
console.log(frutas[3]);

pessoa.hobby="Programar"
pessoa.idade=35
console.log(pessoa.nome)
console.log(pessoa["idade"])
console.log(pessoa)