// Sort sirve para ordenar los array. Es un metodo mutable.

//Ordena los elementos en vase al código ASCII

const numbers = [1, 30, 4, 21, 100000];
numbers.sort();
console.log(numbers); //Ordena mediante el código ASCII

numbers.sort((a,b) => a - b); //Modificamos el comportamiento para que lo ordene de mayor a menor
console.log(numbers);
numbers.sort((a,b) => b - a); //Modificamos el comportamiento para que lo ordene de menor a mayor
console.log(numbers);
// ¿Por qué a - b o b - a?
// La función que le enviamos a sort es la función compareFn donde:
    // Si compareFn(a, b) devuelve un valor mayor que 0, ordena b antes a.
    // Si compareFn(a, b) devuelve un valor menor que 0, ordena a antes b.
    // Si compareFn(a, b) devuelve 0 a y b se consideran iguales.


const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
console.log(words); // A veces no funciona bien
words.sort((a,b) => a.localeCompare(b)); //Lo modificamos para que lo ordene en orden alfabetico 
console.log(words);

//Ejemplo usando objetos

const orders = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
      date : new Date(2021, 1, 1, 15),
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
      date : new Date(2021, 1, 1, 2),
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
      date : new Date(2021, 1, 1, 12),
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
      date : new Date(2021, 1, 1, 16),
    },
  ];
// Ordenando por el que tenga un mayor total
//   orders.sort((a,b) => b.total - a.total);

// Ordenando por la fecha
  orders.sort((a,b)=> a.date - b.date)
  console.log(orders);