const h1 = document.querySelector("h1"); // Esta funcion deja colocar el tipo con la misma sintaxis de css
const p = document.querySelector("p");
const X = document.querySelector(".X");
const yo = document.getElementById("yo");
const input = document.querySelector("input");

console.log(h1.ariaAtomic)

console.log(input.value)

console.log({
    h1,
    p,
    X,
    yo,
    input,
});


h1.innerHTML = "Cambio de titulo <li> etiqueta </li>";
h1.innerText = "Cambio de titulo <li> etiqueta </li>";
h1.remove();


console.log(h1.getAttribute("atributox"));

p.setAttribute("class", "parrafox");
p.classList.add("parrafoy");
p.classList.remove("class", "parrafox");

input.value = "123456789"

// document.createElement("Img")
const img = document.createElement("img")
img.setAttribute("src", "https://i.pinimg.com/564x/74/e8/04/74e8042bdf99734242c25fc2f59ed18f.jpg");
console.log(img);

yo.append(img);
yo.innerHTML = "";
yo.appendChild(img);
