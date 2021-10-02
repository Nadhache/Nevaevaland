$(document).ready(function(){
  console.log("Hola lucius");
  var json;

  $.getJSON('JSON/main.json', function(objJson, status) {
      json = objJson;
      fillHtml();
  });

  function fillHtml() {
    console.log(json);

    $.each(json, function(index, field) {
      if (field.autor == "Lu" ) {
        console.log(field.autor + " / " + field.name);
        $("#jLu").html("<img src='" + field.url + "'>");
      } else if (field.autor == "Vicky" ) {
        console.log(field.autor + " / " + field.name);
        $("#jVicky").html("<img src='" + field.url + "'>");
      } else {
        console.log(field.autor + " / " + field.name);
        $("#jComun").html("<img src='" + field.url + "'>");
  }
    });
  }

});
