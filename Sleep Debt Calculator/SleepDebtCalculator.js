const getSleepHours = (day) => {
    switch (day){
      case 'monday':
            return 8;
            break;
      case 'tuesday':
            return 4;
            break;
      case 'wednesday':
            return 6;
            break;
      case 'thursday':
            return 8;
            break;
      case 'friday':
            return 4;
            break;
      case 'saturday':
            return 12;
            break;
      case 'sunday':
            return 14;
            break;
      default:
            return 'error';
            break;
    }
  }
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  
  const getIdealHours = () => {
    let idealHours = 8;
    return idealHours*7;
  }
  
  
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealHours();
  
    if (actualSleepHours === idealSleepHours){
      return 'perfect amount, nice';
    }
  
    if(actualSleepHours < idealSleepHours){
      return 'durme rapas, que non dormes';
    }
  
    if(actualSleepHours > idealSleepHours){
      return 'deixa de durmir, lacazán';
    }
  }
  
  console.log(calculateSleepDebt())