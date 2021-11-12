//Reduce reduce todos los elementos de un array a una sola expreción
//Sintaxis:
    // const arryReduce = originArry.reduce((acumulador, item) =>{
        //Lo que va a hacer
    // }, 0 (iniciador del acumulador))

//Ejemplo:
const originArry = [10,2,9,3,4,2,3,3,3,19]

const arryReduce = originArry.reduce((sum, item) => sum + item, 0)
console.log('La suma de los elementos de array es: ',arryReduce);

const mayor = originArry.reduce((mayor, item) =>(mayor < item) ? item : mayor ,0)
console.log('El número mayor del array es: ',mayor);

const repit = originArry.reduce((obj, item)=> { 
    if(!obj[item]){
        obj[item] = 1
    }else{
        obj[item] = obj[item] + 1
    }
    return obj;
},{})

console.log('Las veces que se repite un valor: ',repit);