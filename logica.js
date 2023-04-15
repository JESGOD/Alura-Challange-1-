let texto_usuario = document.querySelector(".input-texto");
let contenedor_resultado = document.querySelector(".resultado");
let contenedor_sinResultado = document.querySelector(".sin_resultado");
let btns = document.querySelectorAll(".btn");
let textpProcesado = document.querySelector(".resultado")

let array = [];
let array2 = [];

/* ENCRIPTAR */
btns[0].addEventListener("click", () => {
  /* comprobamos si el texto contiene alguna de las vocales */
  if (/[aeiou]/gi.test(texto_usuario.value)) {
    contenedor_sinResultado.classList = "sin_resultado esconder";
    contenedor_resultado.classList.add("aparecer")
    /* quitamos espacios al inicio y al final de la cadena y guardamos en un arreglo el texto separado por letras */
    array = texto_usuario.value.toLowerCase().trim().split("");
    /* si el arrglo(el texto) contiene alguna de las vocales se hace el cambio de dicha vocal por su respectivo valor nuevo  */
    let i = 0;
    while (i < array.length) {
      if (array[i] === "a") array[i] = "ai";

      if (array[i] === "e") array[i] = "enter";

      if (array[i] === "i") array[i] = "imes";

      if (array[i] === "o") array[i] = "ober";

      if (array[i] === "u") array[i] = "ufat";

      i++;
    }
    /* se une el texto y se lo pasamos a el contenedor que mostrara el resultado al ususario por pantalla */
    contenedor_resultado.innerHTML = array.join("");
  }
});
/*FIN ENCRIPTAR */

/* DESENCRIPTAR */
btns[1].addEventListener("click", () => {

  if (/(ai|enter|imes|ober|ufat)/gi.test(texto_usuario.value)) {
    contenedor_sinResultado.classList = "sin_resultado esconder";
    contenedor_resultado.classList.add("aparecer")
    array2 = texto_usuario.value.toLowerCase().trim().split(" ");

    let j = 0;
    while (j < array2.length) {
      if (array2[j].includes("ai"))
        array2[j] = array2[j].replace(/(ai)/gi, "a");
      if (array2[j].includes("enter"))
        array2[j] = array2[j].replace(/(enter)/gi, "e");
      if (array2[j].includes("imes"))
        array2[j] = array2[j].replace(/(imes)/gi, "i");
      if (array2[j].includes("ober"))
        array2[j] = array2[j].replace(/(ober)/gi, "o");
      if (array2[j].includes("ufat"))
        array2[j] = array2[j].replace(/(ufat)/gi, "u");
      j++;
    }
    console.log(contenedor_resultado.innerHTML = array2.join(" "));
    contenedor_resultado.innerHTML = array2.join(" ");
  }
});
/* hace aparecer la imagen y el texto en la seccion de resultados(mensaje ecriptado/decem) */
if (!contenedor_resultado.value) {
  contenedor_sinResultado.classList = "sin_resultado aparecer";
}


/* copiar texto al porta papeles */
function copiarTexto(){
   
  // Crea un campo de texto "oculto"
  var aux = document.createElement("input");

  // Asigna el contenido del elemento especificado al valor del campo
  aux.setAttribute("value", contenedor_resultado.innerHTML);

  // Añade el campo a la página
  document.body.appendChild(aux);

  // Selecciona el contenido del campo
  aux.select();

  // Copia el texto seleccionado
  document.execCommand("copy");

  // Elimina el campo de la página
  document.body.removeChild(aux);
}
/* fin copiar texto al porta papeles */