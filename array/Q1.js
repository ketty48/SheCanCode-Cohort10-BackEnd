let colors=["red","green","blue"];//how to create array
colors.push("yellow"); //adding a new color using push
colors.pop();// removing last element
let secondColor=colors[1]; // accessing element in the array
let isOrangeIncluded=colors.includes("orange");//to check if an item is included in the array
console.log(colors);
console.log(secondColor);
console.log(isOrangeIncluded);
for (let i = 0; i < colors.length; i++) {//to print using for
  console.log(colors[i]);
}
let indexOfGreen=colors.indexOf("green");//finding the index of the element
let reversedColors=colors.reverse();//reverse the order of the element
console.log(reversedColors);
let firstThreeColors=colors.slice(0,3);//return the first three element using slice() method
console.log(firstThreeColors);