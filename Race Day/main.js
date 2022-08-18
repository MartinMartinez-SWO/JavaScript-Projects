let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 18;

if (runnerAge >= 18 && registeredEarly){
  raceNumber+=1000;
  console.log("See the registration desk");
}


if (runnerAge > 18 && registeredEarly){
  console.log('Your race will start at 9:30');
  console.log('Your race number is ' + raceNumber)
} else if (runnerAge >= 18 && !registeredEarly){
  console.log('Your race will start at 11');
  console.log('Your race number is ' + raceNumber);
  console.log('See the registration desk');
}


if (runnerAge < 18){
  console.log('Youth reistrants run at 12:30 pm (regardless of registration)');
  console.log('Your number is ' + raceNumber);
}