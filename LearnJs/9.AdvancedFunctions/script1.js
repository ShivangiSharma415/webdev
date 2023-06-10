//Array callback functions

const a = [4,1,6,8,9,-5,8,-8,9,-3];

//1.find():returns the first value of an array element that passes a test

const firstneg = (num)=>
{
    return num<0;
}
const result = a.find(firstneg)
console.log(result);

//2.findIndex():returns the index

const firstneg2 = (num)=>
{
    return num<0;
}
const result2 = a.findIndex(firstneg)
console.log(result);

//3.for each
a.forEach((num,i)=>{
    console.log("Array numbers are:", num, i);
})
