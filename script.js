/* Nueva manera de programar JavaScript con jQuery.
let x = $(document);
x.ready(startEvent);

function startEvent() {
  let x;
  x = $("#button1");
  x.click(pressButton);
}

function pressButton() {
  alert("Boton presionado");
}
*/

/*   
3 - Selección de un elemento del documento mediante el id.
let x = $(document);
x.ready(startEvent);

function startEvent()() {
  let x = $("#title1");
  x.click(title1);
  x = $("#title2");
  x.click(title2);
}

function title1() {
  let x = $("#title1");
  x.css("color", "#800000");
  x.css("background-color", "##87CEEB"");
  x.css("font-family", "Arial");
}

function title2() {
  let x = $("#title2");
  x.css("color", "#800000");
  x.css("background-color", "#87CEEB");
  x.css("font-family", "Arial");
}*/

/* Selección de elementos por el tipo de elementos.
let x = $(document);
x.ready(inEvent);

function inEvent() {
  let x = $("tr");
  x.click(fila);
}

function fila() {
  let x = $(this);
  x.css("background-color", "#87CEEB");
}
*/

/*	Selección de elementos utilizando los selectores CSS.
    
let x = $(document);
x.ready(initEvent);

function initEvent() {
  let x = $("#button");
  x.click(hideItem);
}

function hideItem() {
  let x = $("#list1");
  x.hide();
}
 */
