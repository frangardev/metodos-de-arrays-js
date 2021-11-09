//Sirve para filtrar los elementos de un array es como un for y un if combinados. La sintaxis es:
//arry.filter(item => condicion)

const words = ['spray', 'limit', 'elite', 'exuberant'];

//Guarda las palabras con más de 6 letras
const rta = words.filter(item => item.length >= 6)

console.log('original', words);
console.log('new array', rta);



const users = [
    {name: 'Pepe', id: 1, username: 'pepeeltoro', online: true},
    {name: 'Marianita', id: 2, username: 'mari123', online: false},
    {name: 'Pepita', id: 3, username: 'pepitalaguerfanita', online: true},
    {name: 'José Fernando', id: 4, username: 'josefernandoelprofesional', online: true},
    {name: 'Chui', id: 5, username: 'elchui', online: false},
]

//Nuevo array con los usuarios conectados

const usersOnline = users.filter(item => item.online)
console.log('Todos los usuarios', users);
console.log('Usuarios en linea', usersOnline);

//Creando un buscador 
const search = (query)=>{
    return users.filter(item =>{
        return item.name.includes(query)
    })
}
console.log(search('Pe'));