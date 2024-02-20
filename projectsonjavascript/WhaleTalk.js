const input= 'turpentine and turtles';
//const input= 'a whale of a deal!'; will print AAEEOAEEA
const vowels=['a','i','u','e','o'];
let resultArray=[];
for(let i=0;i<input.length;i++){
  //console.log('inputIndex is: ' + i);
  if(input[i]==='e'){
    resultArray.push(input[i]);
  }
  if(input[i]==='u'){
    resultArray.push(input[i]);
  }


  for(let j=0;j<vowels.length;j++){
     //'vowelIndex is: ' + j);
     if (input[i] === vowels[j]) {
        //console.log(input[i]);
      resultArray.push(input[i]);
      
  }
  
}}
//console.log(resultArray);
    let resultString=resultArray.join('').toUpperCase()
    console.log(resultString);