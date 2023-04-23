const h1 = document.querySelector("h1");
const inputVariable1 = document.querySelector("#variable1");
const inputVariable2 = document.querySelector("#variable2");
const buttonSuma = document.querySelector("#botonSuma"); // este es el que tiene el id aqui y en el HTML
const pResultado = document.querySelector("#resultado");

//al boton le agregamos el metodo que hace que lo escuche - al boton-
// los dos argumentos son: el evento que queremos escuchar "click" y el segundo la funcion que queremos ejecutar
bottonSuma.addEventListener("click", sumaVar1Var2);

function sumaVar1Var2 (){

    let num1 = Number(inputVariable1.value); // el .value trae el valor que se le asigne en el html
    let num2 = Number(inputVariable2.value);
    let suma = num1 + num2;
    pResultado.innerHTML = "La suma es = " + suma;
    return suma;

}
