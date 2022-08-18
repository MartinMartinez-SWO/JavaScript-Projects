// temperature in kelvin
const kelvin = 0;

// temperature in celsius
var celsius = kelvin - 273;

// temperature in farenheit
var farenheit = celsius * (9/5) + 32;

// temperature in farenheit and in integer number
farenheit = Math.floor(farenheit);

console.log(`The temperature is ${farenheit} degrees Farenheit`);