function realizarValidação()
{
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let operadores = document.getElementById('operadores').value;

    if (num1 !== "" & num2 !== "" & operadores !== "") {
        document.getElementById('resposta').innerHTML = "Os campos obrigatórios foram preenchidos corretamente e a operação é válida.";

    } else {
        document.getElementById('resposta').innerHTML = "Os campos obrigatórios não foram preenchidos corretamente!";
    }
}

function realizarCalculo()
{
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let operadores = document.getElementById('operadores').value;

    if (num1 !== "" & num2 !== "" & operadores != "")
    {
        num1 = parseFloat(num1)
        num2 = parseFloat(num2)

        if (operadores === "adição"){
            valor = num1 + num2;
            document.getElementById('resposta').innerHTML = `O resultado da ${operadores} é ${valor}`
        }
        else if (operadores === "subtração") {
            valor = num1 - num2;
            document.getElementById('resposta').innerHTML = `O resultado da ${operadores} é ${valor}`
        }
        else if (operadores === "multiplicação") {
            valor = num1 * num2;
            document.getElementById('resposta').innerHTML = `O resultado da ${operadores} é ${valor}`
        }
        else if (operadores === "divisão") {
            valor = num1 / num2;
            document.getElementById('resposta').innerHTML = `O resultado da ${operadores} é ${valor}`
        }
        else {
            alert("Os campos obrigatórios não foram preenchidos corretamente!");
        }
    }
}
