// Fuciona 2 o mas arrays en uno solo. Concat es immutable (No modifica el array original)

const array1 = [2,34,63,6,7,8]
const array2 = [4,43,23,35,1,0]

const arry = array1.concat(array2)
console.log('Usando concat: ',arry);

//Otra forma de hacer una concatenacion podria ser usando el spread operation 

const rta = [...array1, ...array2]
console.log('Usando el spread: ',rta);


//Concat crea otro array, pero que pasa si quiero modificar el array original. 
//Podemos modificar el array original y agregandole el otro array usando .push()

//Pero esto agregara el array entero en la ultima posicion del array original
//array1.push(array2)

//Si queremos que se agregen los ELEMENTOS del segundo array al array original usamos push() y spread operation:
array1.push(...array2)
console.log('Array 1: ',array1);


// Si estas trabajando con un arrays de Objs igual una forma de copiar cada elemento sin la referencia podría ser:
// const newArray = myArray.map(a => ({…a}));