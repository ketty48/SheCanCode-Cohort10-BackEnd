const myAge=24; // a variable called MyAge and gives it a value of my age 
let earlyYears=2; //a variable called earlyYears set to 2 as a value but value can be changed any time that's why i used let keyword
earlyYears*=10.5; //.I Used  multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears
laterYears=myAge-2; //I subtract 2 from myAge and save the result in the variable called laterYears
laterYears*=4; //I multiply laterYears by 4, I Used the multiplication assignment operator to multiply and assign in one step or you can use laterYears=laterYears*4
console.log("EarlyYears");
console.log("---------");
console.log(earlyYears);
console.log("LaterYears");
console.log("---------");
console.log(laterYears);
let myAgeInDogYears=earlyYears+laterYears; //I added earlyYears with laterYears and store the result in variable called myAgeInDogYears
let myName='Magnifique'.toLowerCase(); //I stored my name in the variable called myName and use toLowerCase() method to convert all strings into lower letters
// I displayed what i was doing using cconsole.log() statement and i will use string interpolation to display values
console.log(`\nMy name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.\n`);
