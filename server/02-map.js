const numbers = [1,2,3,4,5,6,7,8,9]

const squaredNumbers = numbers.map(item => item ** 2)
const cubedNumbers = numbers.map(item => item ** 3)

console.log(numbers);
console.log(squaredNumbers);
console.log(cubedNumbers);


for (let index = 0; index < numbers.length; index++) {
    const squaredNumbers = numbers.map(item => item ** numbers[index])
    console.log( 'Números al ' + numbers[index] +':     ' + squaredNumbers)
}

numbers.forEach(item => {
    const squaredNumbers = numbers.map(item2 => item2 ** item)
    console.log( 'Números al ' + item +' usando fordEach y map:     ' + squaredNumbers)
})