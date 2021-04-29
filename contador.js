let texto =
  "El texto descriptivo, en este caso un retrato de una persona, provoca en el receptor una imagen tal que la realidad descripta cobra forma, se materializa en su mente. En este caso el texto habla de un personaje real: Doña Uzeada de Ribera Maldonado de Bracamonte y Anaya. Como se trata de una descripcion literaria, la actitud del emisor es subjetiva, dado que pretende transmitir su propia vision personal al describir y la funcion del lenguaje es predominantemente poetica, ya que persigue una estetica en particular.";

const palabraNormalizada = (palabra) => {
  // Remplazamos los puntos (.), las comas (,) y los dos puntos (:) por vacio
  return palabra.toLowerCase().replace(/[.,:]/g, "");
};

const contadorRepetidas = (texto) => {
  //  Diciconario con la palabra y su cantidad
  let diccionario = {};
  // Separamos todo el texto por cada espacio
  let separarPalabras = texto.split(" ");

  // Recorremos las palabras
  for (let palabra of separarPalabras) {
    // Si la palabra normalizada ya existe en el diccionario, Aumentamos su cantidad
    if (palabraNormalizada(palabra) in diccionario) {
      ++diccionario[palabraNormalizada(palabra)];
    } else {
      // Si no existe en el diccionario la agregamos
      diccionario[palabraNormalizada(palabra)] = 1;
    }
  }

  console.log(diccionario);
};

contadorRepetidas(texto);
