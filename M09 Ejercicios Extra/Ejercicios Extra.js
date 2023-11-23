/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arregloPadre = [];
   let keysObjeto = Object.keys(objeto);
   for (let i = 0; i < keysObjeto.length; i++) {
      let arregloHijoI = [keysObjeto[i], objeto[keysObjeto[i]]];
      arregloPadre.push(arregloHijoI);
   }
   return arregloPadre;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let arregloP = [];
   let arregloS = [];
   for(let i = 0; i < string.length; i++){
      let carc = string.charAt(i);
      if(!arregloP.includes(carc)){
         arregloP.push(carc);
         arregloS.push(1);
      } else{
         let index = arregloP.indexOf(carc);
         arregloS[index]++;
      }
   }

   let objeto = {}

   for(let i = 0; i < arregloP.length; i++){
         objeto[arregloP[i]] = arregloS[i];
   }

   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let arrayP = string.split("");
   let mayus = [];
   let minus = [];
   for(let i = 0; i < arrayP.length; i++){
      let carac = arrayP[i];
      if(carac === carac.toUpperCase()){
         mayus.push(carac);
      } else{
         minus.push(carac);
      }
   }
   let arrayF = mayus.concat(minus);
   return arrayF.join("");
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let fraseDos = [];
   let palabra = [];
   for(let i = 0; i < frase.length; i++){
      let carac = frase.charAt(i);
      if(carac != " "){
         palabra.push(carac);
      } else{
         fraseDos.push(palabra.reverse().join(""));
         // fraseDos.push(" ");
         palabra = [];
      }
   }
   fraseDos.push(palabra.reverse().join(""));
   let fraseDosString = fraseDos.join(" ");
   return fraseDosString;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let arrayNum = numero.toString().split("");
   let capicua = true;
   for(let i = 0; i < arrayNum.length / 2; i++){
      if(arrayNum[i] !== arrayNum[arrayNum.length - (i+1)]){
         capicua = false;
         break;
      }
   }

   if(capicua){
      return "Es capicua";
   } else{
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let arrayString = string.split("");
   for(let i = 0; i < arrayString.length; i++){
      let carac = arrayString[i];
      if(carac === "a" || carac === "b" || carac === "c"){
         arrayString[i] = "";
      }
   }
   string = arrayString.join("");
   return string;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var n = arrayOfStrings.length;

   for (var i = 0; i < n - 1; i++) {
      for (var j = 0; j < n - i - 1; j++) {
         if (arrayOfStrings[j].length > arrayOfStrings[j + 1].length) {
            // Intercambiar elementos si están en el orden incorrecto
            var temp = arrayOfStrings[j];
            arrayOfStrings[j] = arrayOfStrings[j + 1];
            arrayOfStrings[j + 1] = temp;
         }
      }
   }

   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let arreglo = [];
   for(let i = 0; i < array1.length; i++){
      let a = array1[i];
      for(let j = 0; j < array2.length; j++){
         let b = array2[j];
         if(a === b){
            arreglo.push(a);
            break;
         }
      }
   }
   return arreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
