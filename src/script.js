var primeiroValor = parseInt( prompt("Digite o primeiro valor:"))

var segundoValor = parseInt( prompt("Digite o segundo valor:"))


var operaçao = prompt("Digite 1 para fazer uma divizao, 2 para multiplicaçao, 3 para soma e 4 para subtraçao: ")


if (operaçao == 1) {
  var resultado = primeiroValor / segundoValor
document.write("<h2>"+ primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
}

else if(operaçao == 2) {
  var resultado = primeiroValor * segundoValor
document.write("<h2>"+ primeiroValor + " * " + segundoValor + " = " + resultado + "</h2>")
}

else if(operaçao == 3) {
  var resultado = primeiroValor + segundoValor
document.write("<h2>"+ primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
}

else if(operaçao == 4) {
  var resultado = primeiroValor - segundoValor
document.write("<h2>"+ primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
}

else {
  document.write("<h2>opçao invalida</h2>")
}

//if= se
//else = senao
//ense if = senao se