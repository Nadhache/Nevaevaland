$(document).ready(function() {
  // Inicializacion variable para guardar el json
  var json;

  // Llamada a JSON
  $.getJSON('JSON/main.json', function(objJson, status) {
    json = objJson;
    fillHtml();
  });

  // Cargamos las imagenes del home
  function fillHtml() {
    $.each(json, function(index, field) {
      if (field.autor == "Lu") {
        console.log(field.autor + " / " + field.name);
        $("#jLu").append("<img src='" + field.url + "'>");
      } else if (field.autor == "Vicky") {
        console.log(field.autor + " / " + field.name);
        $("#jVicky").append("<img src='" + field.url + "'>");
      } else {
        console.log(field.autor + " / " + field.name);
        $("#jComun").append("<img src='" + field.url + "'>");
      }
    });
  }

  //Escuchadores de Galleria
  $("#gVicky").click(function() {
    console.log("Hola soy galeria de vicky");
    printPictures("Vicky");
  });

  $("#gLu").click(function() {
    console.log("Hola galeria de lu");
    printPictures("Lu");
  });

  $("#gComun").click(function() {
    console.log("Hola galeria comun");
    printPictures("Comun");
  });

  //Carga de galeria
  function printPictures(autors) {
    // console.log(autors);
    var htmlStr = "<div>";
    $.each(json, function(index, el) {
      if (el.autor == autors) {
        console.log(el.autor + " / " + el.name);
        htmlStr = htmlStr + "<img src='" + el.url + "'>";
      } else {
        console.log("imagen no de autor");
      }
    });
    htmlStr = htmlStr + "</div>";
    console.log(htmlStr);
    $("main").html(htmlStr);

  }




});
