let array=[];
function sum(array){
    return array.reduce((acc, num)=> acc + num, 0);
  
}

console.log('The sum is ' + sum(array=[1,2,3,4,5]));
function filterEven(array){
    return array.filter(num => num % 2 !==0);
};
console.log('The even numbers are: ' + filterEven(array=[1,2,3,4,5]));
function doubleValues(array){
    return array.map(num => num*2);
}
console.log(doubleValues(array=[1,2,3,4,5]));