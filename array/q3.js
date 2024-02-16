let array=[];
function sum(array){
    return array.reduce((acc, num)=> acc + num, 0);// Implement a function sum to get the sum of all elements in an array
  
}

console.log('The sum is ' + sum(array=[1,2,3,4,5]));
function filterEven(array){
    return array.filter(num => num % 2 !==0);// Implement a function filterEven to filter out even numbers from an array.
};
console.log('The odd numbers are: ' + filterEven(array=[1,2,3,4,5]));
function doubleValues(array){
    return array.map(num => num*2);//Implement a function doubleValues to double each element in an array.
}
console.log(doubleValues(array=[1,2,3,4,5]));

let numbers=[1,2,3,4,5];
let allPositive=numbers.every(num=>num>0);// Check if all numbers in the numbers array are greater than 0
console.log(allPositive)

let sortedNumbers=numbers.sort((a,b)=>a-b);//Sort the numbers array in ascending order
console.log(sortedNumbers);

let firstArray=[1,2,3];
let secondArray=[4,5,6];
let combineArray=firstArray.concat(secondArray);//Concatenate two arrays:
console.log(combineArray);