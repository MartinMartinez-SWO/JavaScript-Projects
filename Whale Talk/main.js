let input = 'se viene la moabu';
let vowels = ['a','e','i','o','u'];
let resultArray = [];
let resultString;

for (let i = 0; i< input.length; i++){
//console.log(input[i]);
if(input[i] === 'e' || input[i] === 'u')
resultArray.push(input[i]);
  for(let j = 0; j < vowels.length; j++){

    if (input[i] === vowels[j] ){
      console.log(vowels[j]);
      resultArray.push(input[i]);
    }
  }
}
  console.log(resultArray);
  resultString = resultArray.join().toUpperCase();
  console.log(resultString);
