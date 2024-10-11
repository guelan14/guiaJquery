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

/*	5 Selección de elementos utilizando los selectores CSS.
    
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

/*
6 - Selección de elementos utilizando las clases CSS definidas.
let x = $(document);
x.ready(ini);

function ini() {
  let x = $("#highlight-btn");
  x.click(resaltar);
}

function resaltar() {
  let x = $(".highlight");
  x.css("background-color", "#ffff00");
}*/

/* 7
$(document).ready(function(){
  $("#change-text-btn").click(function(){
      // Cambiamos el texto del párrafo con el método text(valor)
      $("#paragraph").text("El texto ha sido cambiado.");
  });
});*/

/* 8
let x = $(document);
        x.ready(inicializarEventos);

        function inicializarEventos() {
            let x = $("#boton1");
            x.click(agregarPropiedadBorder);
            x = $("#boton2");
            x.click(recuperarPropiedadBorder);
            x = $("#boton3");
            x.click(eliminarPropiedadBorder);
        }

        // Añadir la propiedad border a la tabla
        function agregarPropiedadBorder() {
            let x = $("#tabla1");
            x.attr("border", "1"); // Añadir la propiedad border con valor 1
        }

        // Recuperar y mostrar el valor actual del atributo border
        function recuperarPropiedadBorder() {
            let x = $("#tabla1");
            if (x.attr("border") != undefined)
                alert("El valor del atributo border es: " + x.attr("border"));
            else
                alert("No está definida la propiedad border en la tabla");
        }

        // Eliminar la propiedad border de la tabla
        function eliminarPropiedadBorder() {
            let x = $("#tabla1");
            x.removeAttr("border"); // Eliminar el atributo border
        }
*/