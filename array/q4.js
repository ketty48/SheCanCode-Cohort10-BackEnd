let array=[];
function flattenArray(array) {
  return array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);//Implement a function flattenArray to flatten a nested array.
};
console.log(flattenArray([1,2,[3,[4,5],9],[6,8]]));

function chunkArray(array, size) {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
    array.slice(index * size, (index + 1) * size)//Implement a function chunkArray to chunk an array into subarrays of a specified size.
  );
}
console.log(chunkArray([1,2,3,4,5,6,7],3));

function removeFalsyValues(array) {
  return array.filter(Boolean);//Implement a function removeFalsyValues to remove falsy values
};
console.log(removeFalsyValues([0,1,3,"hello",false,null]));