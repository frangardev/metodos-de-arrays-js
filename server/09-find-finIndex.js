//Find es parecido a filter pero solo retorna UN objeto, no un array de estos. Es decir solo va a retornar el objeto en cuestión.
//El objeto va a ser el primero que cumpla con la condición.
//Si ningun objeto cumple con la condición nos va a retornar un undefined.

const numbers =[1,4,23,64,75,12,80]

//Buscamos en el array el número 4.
const number4 = numbers.find(item => item === 4)
console.log(number4);

//Existe una variante "findIndex" que en vez de devolvernos el objeto nos debuelve su posición.
//Si no encuentra el elemento retorna un -1

const number4Position = numbers.findIndex(item => item === 4)
console.log(`El número ${number4} esta en la posición ${number4Position} del array`);



const users = [
    {name: 'Pepe', id: 1, username: 'pepeeltoro', online: true},
    {name: 'Marianita', id: 2, username: 'mari123', online: false},
    {name: 'Pepita', id: 3, username: 'pepitalaguerfanita', online: true},
    {name: 'José Fernando', id: 4, username: 'josefernandoelprofesional', online: true},
    {name: 'Chui', id: 5, username: 'elchui', online: false},
]

//Buscamos al usuario con el id 3
const usr = users.find(item => item.id === 3)
console.log(usr);

const usrIndex = users.findIndex(item => item.id === 3)
console.log(`El usuario ${usr.name} esta en la posición ${usrIndex} del array de usuarios`);