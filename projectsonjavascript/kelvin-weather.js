const kelvin=293; // kelvin is a valiable name that contains 293 as a value and it will not change that's why i used const to declare.
//const kelvin=0;
let celsius=kelvin-273; //This line is converting value of kelvin into Celsius by subtracting 273 from the kelvin and I stored the result in the variable called celsius.
let fahrenheit=celsius*(9/5)+32; //This eqaution will help to calculate Fahrenheit and we stored the result in the variable called fehrenheit.
fahrenheit=Math.floor(fahrenheit); // This Math.floor() method is used to round down the answer  of fehrenheit because on the above equation we will get decimal answer.
/*to log the temperature in Fahrenheit to the console I used console.log and string interpolation the answer will be The temperature is 68
 degrees Fahrenheit if the kelvin=293, if kelvin=0 answer will be The temperature is -460 degrees Fahrenheit*/
console.log("\n\nTemperature in Fahrenheit");
console.log("-------------------------\n");
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.\n\n`);  

//Convert celsius to the Newton
let newton = celsius * (33 / 100); 
newton=Math.floor(newton); //Round down
console.log("Temperature in Newton");
console.log("---------------------\n");
console.log(`The temperature is ${newton} degrees Newton.\n`);

