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
Algunos ejemplos en el JS de esta clase. Se pueden crear clases, crear cualquier elemento, eliminar, modificar, etc. En el archivo de la clase se hicieron unos cuantos ejemplitos.
Peeeeeero la idea de cambiar el HTML desde el JS es para que cuando se interactue en la pagina web el JS tome esa interacción y se reflejen los cambios en el HTML :)



Clase 13/29
Eventos en JavaScript

Se va a empezar con la interacción de la pagina.
Una vez ajustado el HTML a lo que queremos hacer, se seleccionan los elementos que queremos escuchar en el JS (como se indico en las clases pasadas).
Para escuchar elementos en esta clase nos muestran los atributos: onclick y onchange="". Exinten otros pero al parecer depende del elemento. Ojo: esto se hace en el HTML.



Clase 14/29
addEventListener

En vez de hacer cambios en el HTML para permitir eventos como en la clase pasada donde en el HTML teniamos el atributo onclick dentro de la etiqueta button, se utiliza solo dentro del JS los addEventListener.

Si hay una etiqueta form: el ultimo boton lo interpreta como si fuera del tipo submit, es decir un boton para enviar el formulario que lo que hace por defecto es cambiar la url.
Para cambiar esto hay que ponerle un id al form y modificar su comportamiento. Y en cambio de hacer el addEventListener con el id del boton se hace con el id del form. Ademas se le agrega el metodo event.preventDefault
Otra forma de resolver el problema del form era indicandole al button del html el atributo type="button" porque por defecto trae el atributo type="submit" --- aunque por defecto no se ve.

Algunos de los eventos mas utilizados:

click - Triggered when a user clicks an element.
submit - Triggered when a user submits a form.
mouseover - Triggered when a user moves their mouse over an element.
mouseout - Triggered when a user moves their mouse off an element.
keydown - Triggered when a user presses a key down.
keyup - Triggered when a user releases a key.
load - Triggered when a page or image finishes loading.
unload - Triggered when a page is unloaded.
resize - Triggered when the browser window is resized.
scroll - Triggered when a user scrolls up or down a page.
focus - Triggered when an element receives focus.
blur - Triggered when an element loses focus.
change - Triggered when the value of a form element changes.
input - Triggered when the value of an input field changes (similar to "change", but fires immediately).
contextmenu - Triggered when a user right-clicks on an element.



Clase 15/29
Conectando GitHub a proyectos de JavaScript

Pagina gitignore.io --- si se ponen todas las caracteristicas del proyecto en el buscador, y crea un archivo con todos los archivos que se pueden o deben ignorar.



Clase 16/29
Proyectos con JavaScript y GitHub desde cero


Clase 17/29
Fork a proyectos en GitHub

Se hace Fork al repositorio del curso Frontend Developer para empezar a hacerlo funcionar utilizando javaScript