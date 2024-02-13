
let keyValueArray = [["name", "Alice"], ["age", 30], ["city", "New York"]];
let reconstructedObject = Object.fromEntries(keyValueArray);// create an object from an array
console.log(reconstructedObject);
let object1 = { a: 1, b: 2 };
let object2 = { b: 3, c: 4 };
let mergedObject = { ...object1, ...object2 };//merge two objects
console.log(mergedObject);
let objectA = { a: 1, b: 2, c: 3 };
let objectB = { b: 3, c: 4, d: 5 };
let commonKeys = Object.keys(objectA).filter(key => objectB.hasOwnProperty(key));//find common keys btn two object
console.log(commonKeys);
let commonValues = commonKeys.map(key => objectA[key]);// create an array of values from common keys in object
console.log(commonValues);