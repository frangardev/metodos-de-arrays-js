const users = [
    {name: 'Pepe', id: 1, username: 'pepeeltoro', online: true},
    {name: 'Marianita', id: 2, username: 'mari123', online: false},
    {name: 'Pepita', id: 3, username: 'pepitalaguerfanita', online: true},
    {name: 'José Fernando', id: 4, username: 'josefernandoelprofesional', online: true},
    {name: 'Chui', id: 5, username: 'elchui', online: false},
]

// Guardamos en name solo los nombre de users
// const name = users.map(item => item.name)
// console.log(name);

//Si queremos agregar un nuevo atributo. 
    // const usersBasic = users.map(item => {
    //     item.tipe = 'basic'
    //     return item
    // })
    // console.log('Nuevo array',usersBasic);
    // console.log('Viejo array',users);
//Esto modifica el array original ya que los objetos son inmutables, es decir que no guarda los valores como tal sino el espacio en memoria:

//Para corregir eso:
const usersBasic2 = users.map(item => {
    
    return { 
        //Usamos es sprit operatior que lo que hace es crear una copia del array
        ...item,
        //Ahora si agregamos el nuevo atributo
       type: 'basic'
    }
})
console.log('Nuevo array',usersBasic2);
console.log('Viejo array',users);