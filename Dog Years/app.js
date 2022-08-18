// this is my current age
var myAge = 27;

// dogs early years
var earlyYears = 2;

earlyYears *= 10.5;

// edad actual menos los dos años de inicio del perro
var laterYears = myAge - 2;

//numero de años de perro pasados en 4 años de humano
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

//mis años totales si fuese un perro
var myAgeInDogYears = earlyYears + laterYears;

// conversión de mi nombre a minusculas
var myName = 'Martin'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);
