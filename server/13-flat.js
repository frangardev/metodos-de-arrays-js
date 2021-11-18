// Sirve para convertir arrays que estan dentro de otros (matricez por ejemplo) a un array de una sola linea

//Falt resive como parametro la profundida a la que va a llegar la matriz, es decir cuantos arrays hay a dentro de cada array.  


const matriz3X3 = [
    [1,2,3,[1,2,3]],
    [4,5,6],
    [7,8,9]
]

const arry = matriz3X3.flat(2)//Es 2 porque 2 niveles por dentro
console.log(arry);


const matriz = [
    [1,4,6,'af'],
    [48,9,0,[1,5,3]],
    1,[2,7,'Rasdf'],
    ['ss',1,[123,[12,3,[12,2,[1,2]]]]]
]

// Aplanando la mariz sin usar flat:
let arryFinal = []
const aplanador = (arry) =>{
    arry.forEach( (item) =>{
        if(typeof(item) == "object"){
            aplanador(item)
        }else{
            arryFinal.push(item)
            return item
        }
    })
}
aplanador(matriz)
console.log('Matriz origina', matriz);
console.log('Matriz aplanada',arryFinal);
console.log('Matriz aplanada con flat: ', matriz.flat(6));