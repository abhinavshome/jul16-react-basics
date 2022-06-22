console.log("redux");

const arr = [1, 2, 5, 6];
const el = 4;

//Impure function
const addElementToArray = (arr, el) => {
  arr.push(el);
};

addElementToArray(arr, el);

console.log(arr);

const arr1 = [1, 8, 9, 2];
const el1 = 9;

//Pure function
const addElementToArray1 = (arr, el) => {
  return arr.concat(el);
};

const res = addElementToArray1(arr1, el1);
console.log(res, arr1);
