const users = [
    {name: 'Pepe', id: 1, username: 'pepeeltoro', online: true, type: 'primeUser'},
    {name: 'Marianita', id: 2, username: 'mari123', online: false, type: 'freeUser'},
    {name: 'Pepita', id: 3, username: 'pepitalaguerfanita', online: true, type: 'proUser'},
    {name: 'José Fernando', id: 4, username: 'josefernandoelprofesional', online: true, type: 'primeUser'},
    {name: 'Chui', id: 5, username: 'elchui', online: false, type: 'freeUser'},
    {name: 'Chui', id: 5, username: 'elchui2', online: true, type: 'freeUser'},
]

const typeUsers = users
    .filter(item => item.online)
    .map(item => item.type)
    .reduce((obj, item) => {
        (!obj[item])
            ? obj[item] = 1
            : obj[item] += 1
        return obj
    }, {})

console.log('Los tipos de usuarios en linea son: ',typeUsers);

//otro ejercicio
arry2 = [1,2,3,1,3,4,5,7,8,10]

arryReduce2 = arry2.reduce