const getSleepHours=day => {
    switch(day){
        case 'monday':
            return 8;
            break;
            case 'tuesday':
                return 7;
                break;
                case 'wednesday':
                    return 6;
                    break;
                    case 'thursday':
                        return 8;
                        break;
                        case 'friday':
                            return 7;
                            break;
                            case 'saturday':
                                return 8;
                                break;
                                case 'sunday':
                                    return 8;
                                    break;
                                    default:
                                        return 'enter valid day';
                                        break;
                                    

    }
    

};
//console.log(getSleepHours('tuesday'));
//console.log(getSleepHours('friday'));
const getActualSleepHours= () =>{
    //let sum=getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday');
    let sum=8+7+6+8+7+8+8;
    return sum;
};
const getIdealSleepHours=idealHours => idealHours * 7;



//console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week
//console.log(getIdealSleepHours()); //
const  calculateSleepDebt=() =>{
    const actualSleepHours=getActualSleepHours();
    const  idealSleepHours=getIdealSleepHours(8);
    if(actualSleepHours===idealSleepHours){
        console.log('The user got the perfect amount of sleep.');
    }else if(actualSleepHours>idealSleepHours){
        console.log('The user got more sleep than needed.')
    }else{
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
};
calculateSleepDebt();