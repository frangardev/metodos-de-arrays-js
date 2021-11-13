//Debuelve true o false si alguno de los elementos cumple con la condicion

const numbers = [1,2,3,4]

//Comprueba si algun elemento del array es par
const rta = numbers.some(item => item % 2 === 0)
console.log(rta);


//Ejemplo usando objetos
const users = [
    {name: 'Pepe', id: 1, username: 'pepeeltoro', online: true, type: 'primeUser'},
    {name: 'Anastacio', id: 3, username: 'MDSElanastacio', online: false, type: 'proUser'},
    {name: 'Marianita', id: 2, username: 'mari123', online: false, type: 'freeUser'},
    {name: 'Pepita', id: 3, username: 'pepitalaguerfanita', online: false, type: 'proUser'},
    {name: 'José Fernando', id: 4, username: 'josefernandoelprofesional', online: true, type: 'primeUser'},
    {name: 'Chui', id: 5, username: 'elchui', online: false, type: 'freeUser'},
    {name: 'Firulais', id: 3, username: 'Wow', online: false, type: 'proUser'},
    {name: 'Chui', id: 5, username: 'elchui2', online: false, type: 'freeUser'},
]

//Veremes si hay algun usuario pro para resolver algo
const proUsersAvailable = users.filter(item => item.type == "proUser").some(item => item.online)
(proUsersAvailable) 
    ? console.log("En momento uno de nuestros usuario pro se comunicaran con usted") 
    : console.log("Lo sentimos. De momento no hay nadie que pueda ayudarle");
