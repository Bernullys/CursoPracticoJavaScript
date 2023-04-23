const h1 = document.querySelector("h1");
const inputVariable1 = document.querySelector("#variable1");
const inputVariable2 = document.querySelector("#variable2");
const buttonSuma = document.querySelector("#botonSuma");
const pResultado = document.querySelector("#resultado")

function sumaVar1Var2 (){

    let num1 = Number(inputVariable1.value);
    let num2 = Number(inputVariable2.value);
    let suma = num1 + num2;
    pResultado.innerHTML = "La suma es = " + suma;
    return suma;

}
