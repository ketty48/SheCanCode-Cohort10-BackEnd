let array=[];
function capitalizeNames(array) {
  return array.map(name => name.charAt(0).toUpperCase() + name.slice(1));// capitalize the first letter of an array
};

console.log(capitalizeNames(["hello","hi","world"]));

var arry=[];
function getUniqueValues(arry) {
  return [...new Set(arry)];//function getUniqueValues to remove duplicates from an array
}
console.log(getUniqueValues([1,2,3,3,4,4,5,5,6]));

function groupByLength(array) {// function groupByLength to group strings in an array by their length.
  return array.reduce((acc, str) => {
    let length = str.length;
    acc[length] = acc[length] || [];
    acc[length].push(str);
    return acc;
  }, {});
}
console.log(groupByLength(["hello","hi","hey","world","money"]));

function rotateArray(array, k) {
  k = k % array.length;
  return [...array.slice(-k), ...array.slice(0, -k)]; //function rotateArray to rotate elements in an array to the right by k positions
}
console.log(rotateArray([1,2,3,4,5,6],4));
