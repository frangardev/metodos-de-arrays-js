const arry = ['hola', 'XD', 123, {name: 'juan', lastname : 'perez'}]

// Usando for
for (let index = 0; index < arry.length; index++) {
    const element = arry[index];
    console.log('for: ', element)
}

//usando forEach
arry.forEach(item => console.log('forEach: ',item))