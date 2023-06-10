const a = 5;
const b =10;
Sum(a,b);

const x = 8;
const y = 9;
Sum(x,y);

const p = 8;
const q = 5;
const sum = Sum(p,q);
console.log("Sum of p and q is:", sum);

function Sum(a,b) {
    const result = a+b;
    console.log("REsult is:", result);
    return result;
}

//Function expression: kisi function ko ek variable me daal sakte hai
//Function name diye bina bhi ban jata hai islie ise anonymous function bhi kahte hai.
//Syntax

const variable = function(parameter1, parameter2)
{
    //Code to be executed
    return something;
}

const square = function(num)
{
    return num*num;
}
console.log(square); //This will return a function;
//To call a function 
console.log(square(9));

//Nested Functions

function addsquares(a,b) {

    const sa = square(a);
    const sb = square(b);

    function square(num)
    {
        return num*num;
    } //This function cannot be called outside outer function
    return sa+sb;
    
}

console.log(addsquare(5,8));