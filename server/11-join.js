//Join convierte un array a string y lo separa por el parametro que le pasemos. Ejemplo:

const browsers = ['FireFox', 'Chrome', 'Opera', 'Brave']
console.log(browsers.join(' vs. '));

//Ejemplo de convertir un titulo en una url

const title = "Manipulación de Arrays"

//.sprit() es lo contrario a join transforma un string a array
//.toLowerCase() convierte todo el texto a minusculas
const urlFinal = title. split(' ').join('-').toLowerCase()

console.log('Titulo: ',title);
console.log("URL: ",urlFinal);