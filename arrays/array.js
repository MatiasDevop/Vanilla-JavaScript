
// 2 Ways to Merge Arrays 

const cars = ['🚗', '🚙'];
const trucks = ['🚚', '🚛'];

 console.log(cars);
// Method 1: Concat 
const combined1 = [].concat(cars, trucks);
console.log(combined1)
// Method 2 : spread
 const combined2 = [...cars, ...trucks]

console.log(combined2);

var array = [1,2,3,'random'];

function combineArray(array1, array2){
    return [...array1, ...array2];
}
// const isArray = [1,2,3];
// const notArray = 'random';
//console.log(combineArray(isArray, notArray));

function combineArray(array1, array2) {
    return [].concat(array1, array2);
  }
  
  const isArray = [1,2,3];
  const notArray = 'random';
  
  combineArray(isArray, notArray);
console.log(combineArray(isArray,notArray));

const cars2 = ['🚗', '🚙'];
const trucks2 = ['🚚', '🚛'];

const combined = cars2.push(...trucks2);

console.log(combined); // 4