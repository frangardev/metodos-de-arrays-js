//Every es lo opuesto a some. Es decir TODOS los elementos deben cumplir con la condición. Retorna True o false

const numbers =[1,4,23,64,75,12,80]

//Si los números son menores a 80 debuelve true
                                            //condicion
const numbersMinor80 = numbers.every(item => item < 80)

console.log(`Los números del array ${numbers} ${(numbersMinor80) ? 'SI' : 'NO'} son menores de 80.`);

//Ejercicio:
//Solo pueden ser aceptados los equipos que todos los jugadores sean menores a 15 años.

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 14,
    },
];

const teamAccepted = team.every(item => item.age < 15)

if(teamAccepted){
    console.log('¡Felicidades! Su team ha sido aceptado');
} else{
    console.log('Lo sentimos su team no puede ser aceptado');
}