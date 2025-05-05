
function calcular() {
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);
    var soma = num1 + num2;
    document.getElementById('resultado').innerText = "Resultado: " + soma;
}

function subtrair() {
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);
    var subtracao = num1 - num2;
    document.getElementById('resultado').innerText = "Resultado: " + subtracao;
}

function multiplicar() {
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);
    var produto = num1 * num2;
    document.getElementById('resultado').innerText = "Resultado: " + produto;
}

function dividir() {
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);

    if (num2 === 0) {
        document.getElementById('resultado').innerText = "Erro: Divisão por zero!";
    } else {
        var divisao = num1 / num2;
        document.getElementById('resultado').innerText = "Resultado: " + divisao;
    }
}
