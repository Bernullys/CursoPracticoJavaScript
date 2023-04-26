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



Tipos de document para definir variables de HTML en JS:

document: es el objeto principal que representa el documento HTML cargado en el navegador. Se puede utilizar para acceder y manipular elementos HTML y sus atributos. Por ejemplo, para obtener el valor de un campo de entrada se puede utilizar:

var valor = document.getElementById("miCampo").value;

window.document: es otra forma de acceder al objeto document. Es equivalente a simplemente usar "document". Por ejemplo:

var valor = window.document.getElementById("miCampo").value;

parent.document: se utiliza para acceder al objeto document del marco o iframe padre. Por ejemplo, para obtener el valor de un campo de entrada en un marco secundario:

var valor = parent.document.getElementById("miCampo").value;

frames[x].document: se utiliza para acceder al objeto document de un marco o iframe específico. "x" es el índice del marco o iframe, comenzando desde cero. Por ejemplo, para obtener el valor de un campo de entrada en el segundo marco:

var valor = frames[1].document.getElementById("miCampo").value;

Es importante recordar que estos métodos solo deben ser utilizados si es necesario acceder a elementos en otros documentos o marcos. En general, se recomienda utilizar el objeto document directamente para acceder y manipular elementos HTML.


Algunos Metodos de document:

En JavaScript, el objeto document ofrece varios métodos para manipular elementos HTML y su contenido. Algunos de los métodos más comunes son:

getElementById(): devuelve un elemento HTML con el identificador especificado. Por ejemplo:

var elemento = document.getElementById("miElemento");

getElementsByTagName(): devuelve una lista de elementos HTML con el nombre de etiqueta especificado. Por ejemplo:

var elementos = document.getElementsByTagName("p");

getElementsByClassName(): devuelve una lista de elementos HTML con la clase especificada. Por ejemplo:

var elementos = document.getElementsByClassName("miClase");

querySelector(): devuelve el primer elemento HTML que coincide con el selector especificado. Por ejemplo:

var elemento = document.querySelector("#miElemento .miClase");

querySelectorAll(): devuelve una lista de elementos HTML que coinciden con el selector especificado. Por ejemplo:

var elementos = document.querySelectorAll("p.miClase");

createElement(): crea un nuevo elemento HTML con el nombre de etiqueta especificado. Por ejemplo:

var nuevoElemento = document.createElement("div");

appendChild(): agrega un nuevo elemento HTML como hijo del elemento especificado. Por ejemplo:

var padre = document.getElementById("miPadre");

padre.appendChild(nuevoElemento);
removeChild(): elimina un elemento HTML hijo del elemento especificado. Por ejemplo:

var padre = document.getElementById("miPadre");
var hijo = document.getElementById("miHijo");
padre.removeChild(hijo);


Estos son solo algunos ejemplos de los métodos que ofrece el objeto document en JavaScript. Hay muchos más que se pueden explorar y utilizar según las necesidades específicas de cada proyecto.


Some properties of DOM objects include:

innerHTML: Gets or sets the HTML content of an element.
textContent: Gets or sets the text content of an element, excluding any HTML tags.
tagName: Gets the name of the HTML tag of an element.
parentNode: Gets the parent node of an element.
childNodes: Gets a list of child nodes of an element.
attributes: Gets a list of attributes of an element.
style: Gets or sets the inline style of an element.
classList: Gets a list of CSS classes of an element.
value: Gets or sets the value of a form input element, such as a text box or dropdown list.
checked: Gets or sets the checked state of a checkbox or radio button input element.



Clase 15/29
Conectando GitHub a proyectos de JavaScript

Pagina gitignore.io --- si se ponen todas las caracteristicas del proyecto en el buscador, y crea un archivo con todos los archivos que se pueden o deben ignorar.



Clase 16/29
Proyectos con JavaScript y GitHub desde cero


Clase 17/29
Fork a proyectos en GitHub

Se hace Fork al repositorio del curso Frontend Developer para empezar a hacerlo funcionar utilizando javaScript