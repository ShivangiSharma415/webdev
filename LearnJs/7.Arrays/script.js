const words = ["Hello","Apple", "Bnanana"];

console.log(words);
// Arrays in javascript can be of mixed datatypes,it can even have object and functions as well

//To find length
console.log(words.length);

const newwords = words;

newwords[2]="Kiwi";
console.log(newwords)

//Common array methods
const nums = [2,8,5,13,7,10]

//1.indexOf
console.log(nums.indexOf(8));

//2.includes,returns true if that element is present
console.log(nums.includes(10));

//3.push,pushes an element at back
nums.push(67)

//4.unshift,pushes an element at front
nums.unshift(89)

//5.Pop,removes last element
nums.pop();

//6.shift,removes first element
nums.shift();

//7.sort
nums.sort();

//8.slice
const newarray = nums.slice(2,6)

