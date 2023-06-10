//Arrow Function

const greet = (count) => {
    for(let i = 0; i<count; i++) 
      console.log("Hello World!");
}
greet(3);

//Another syntax
const square = (num) => num*num

console.log(square(3));


//Callback functions in js:A callback function is a function passed as an argument to another function
const calculate = (a, b, operation) =>
{
  return operation(a,b);
}

/////Method1
const addition = calculate (3, 4, function(num1,num2){
  return num1+num2;
})

console.log(addition);


/////Method2

const subtraction = (a,b) => a-b;

const subresult = calculate(9,8,subtraction);

console.log(subresult);


/////Method3

function multiply(num1, num2)
{
  return num1*num2;
}

const mulresult = calculate(5, 8, multiply);
console.log(mulresult);