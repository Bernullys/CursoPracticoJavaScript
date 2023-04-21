# CursoPracticoJavaScript
Commits del curso y algunas notas.

Para crear variables:

var, let, const sin embargo hay que evitar usar var.

const es constante, no se puede cambiar su valor una vez asignado el valor.

let nombre = "string" ------- Declarar e inicializar.
nombre = "String2" ---------- Reinicializar.


function nombreFuncion (parametros) {
    return code
}
nombreFuncion(argumentos)


switch(parametro){      // La condicion se cumple si el case sea igual al parametro -- Se compara siempre con el mismo parametro o condicion.
    case opcion1:
    code;
    break;
    .
    .
    .
    defaul:
    code;
    break;
}

En el archivo test.js del curso basico de javascript aparecen unos ejemplos buenos de como resolvio la prueba Juan DC.



Clase 10/29
Como conectar JavaScript con HTML.

Para conectar JavaScript en el HTML se utiliza la etiqueta script en el HTML. De esta forma:
    <script src="rutaDelArchivoJS"></script>



Clase 11/29
Leyendo HTML desde JavaScript.


Lo que se quiere es entrar desde JS a HTML.
Se usan las funciones: document.get... --- Hay muchas.
Estas funciones las dan los navegadores, osea que ellos las hicieron.
La forma de trabajar es crear en el archivo JS variables de selectores que representen cada unos de los elementos del HTML.

Dentro del document.querySelector("se indica entre comillas la etiqueta o la clase del elemento").

En consola el navegador indica la linea donde se imprime. Ojo esto sera util para encontrar errores.

Observar como se imprime como objeto. Tambien como si se imprime solo un elemento con un metodo, imprimira el valor.



Clase 12/29
Escribiendo o modificando (los dos) HTML desde JavaScript


Cambiar cosas al HTML desde el JS.
Algunos ejemplos en el JS de esta clase.