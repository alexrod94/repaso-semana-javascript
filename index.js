const numbers = [2, "hola", 9, true, "adios", 4, 1, 9];

// Calcular la media

// Media = suma de todos los elementos / número de elementos

// Paso extra: comprobar el tipo de elemento
// Si es número: sumar el número
// Si es string: sumar la longitud
// Si es booleano: sumar 1 si es true, sumar 0 si es false

function getAverage(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      suma = suma + arr[i];
    } else if (typeof arr[i] === "string") {
      suma = suma + arr[i].length;
    } else {
      if (arr[i] === true) {
        suma = suma + 1;
      }
    }
  }

  const media = suma / arr.length;

  return media;
}

const resultado = getAverage(numbers);

// console.log(resultado);

const words = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

// Saber cómo comprobar si una palabra está en un array (includes)
// Saber cómo ir palabra por palabra (for)
// Si no existe, guardarla en algún sitio (push)

function uniquifyArray(arrayViejo) {
  let newArray = [];
  for (let i = 0; i < arrayViejo.length; i++) {
    if (newArray.includes(arrayViejo[i])) {
    } else {
      newArray.push(arrayViejo[i]);
    }
    //if(!newArray.includes(arrayViejo[i]))
  }
  return newArray;
}

const result = uniquifyArray(words);

console.log(result);

const myButton = document.getElementById("#button");
