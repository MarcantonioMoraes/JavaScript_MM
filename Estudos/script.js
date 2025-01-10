// && (E): Verdadeiro se todas as condições forem verdadeiras.
// || (OU): Verdadeiro se qualquer condição for verdadeira.
// ! (NÃO): Inverte o valor lógico.
// == (igual a, verifica apenas o valor).
// === (estritamente igual, verifica valor e tipo).
// != (diferente).
// > (maior que).
// < (menor que).
// >= (maior ou igual).
// <= (menor ou igual).


const nome = "Marcantonio"
const idade = 35
const mes = "Janeiro"
const rua = "Rua Córrego do Deodato"
const mae = "Edna Maria"
const pai="Jose antonio"
const esposa = "Raquel Thays"
const idesposa= 30
const f1="Thulio Marc"
const f2="Thalys Marc"
let a=6
let b=4
let c=24
let d=54
let nota=8
let temfilhos=true
let quantosfilhos=2
let temcarteira=true
let casado=true
let pessoa=1

console.log ("eu me chamo",nome,"tnho",idade,"nasci no mês de",mes,"moro na rua",rua,"filho de",mae,"e de ",pai,"casado com",esposa," e pai de",f1,"e",f2,". A diferença da minha idade com a da minha esposa é",idade%idesposa,"anos.")

console.log(a+c)
console.log(d-b)
console.log(d/a)
console.log(c*b)
console.log(d%c)

console.log(a==b )
console.log(a>b)
console.log( c<d)
console.log(d!=c )
console.log(d>=c+a)
console.log(c<=a+b)
console.log(casado&&quantosfilhos>1)
console.log(!casado )
console.log(!casado||!temfilhos)
console.log(c/a<=6&&c%a==0)


if(nota>=7){
  console.log("Aprovado")
} else if (nota>=5){
  console.log("Recuperação")
}else{
  console.log("Reprovado")
}

if(quantosfilhos==2){
  console.log("Thulio e Thalys")
}else if (quantosfilhos>3){
  console.log("Raquel sabe disso?")
}
else{
  console.log("Cadê os meninos?")
}















