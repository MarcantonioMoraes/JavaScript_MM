let nome = "Marcos"
const idade = 34
var cidade = "Recife"
let hobby = "Animes"
let temcarteira= true
const a = 10
const b = 3
const x = 5
const y = "5"
let nota=7
let dia=3
let contador=1

console.log ("Soma:",a+b,)
console.log("Subtrair:",a-b,)
console.log("Dividir:",a/b,)
console.log("Multiplicar:",a*b,)
console.log("Resto:",a%b,)
console.log(x==y)
console.log(x===y)
console.log(x!=y)
console.log(x>y)
console.log(x<y)
console.log(x<=y)
console.log(x>=y)

console.log("A soma de A+B é maior que 15 e o resto e igual a zero?",a+b>"15"&&a%b==0,)
console.log("Qual a sua idade?",idade,"anos")
console.log("Você pode dirigir?",idade>=18&&temcarteira)

if (nota>=7){
    console.log("Aprovado!")
}else if (nota>=5){
    console.log("Recuperação!")
}else{
    console.log("Reprovado!")
}

switch(dia){
    case 1:
        console.log("")
        break
        case 1:
            console.log("Segunda!")
            break
        case 2:
            console.log("Terça!")
            break
        case 3:
            console.log("Quarta!")
            break 
        case 4:
            console.log("Quinta!")
            break            
        case 5:
            console.log("Sexta!")
            break
        default:
            console.log("Final de Semana!")      
}

for (let i=0; i<=5; i++){
    console.log("Número",i,)
}

while (contador<=5){
    console.log("Contaor:",contador,)
    contador++
}

for(let i=1; i<= 4; i++){
    if (i%2===0){
        console.log("Número:",i,"é PAR")
    }else{
        console.log("Número:",i,"é IMPAR")
    }
}

function digaola(){
    console.log("Olá, Marcos!")
}
digaola()

function saudacao(nome){
    console.log("Olá",nome,"!!!")
}
saudacao("Marcantonio")

function soma(a,b){
    return a+b
}
let resultado = soma(5,3)
console.log("A soma é:",resultado,)


function resultadoo (a){
if (a%2===0){
    console.log("O número",a,"é PAR!!")
}else{
    console.log("O número",a,"é IMPAR!!!")
    }
}
      
console.log(resultadoo(2))
console.log(resultadoo(17))
console.log(resultadoo(42))
console.log(resultadoo(13))


