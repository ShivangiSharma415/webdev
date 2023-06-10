//There are two types of code, Synchronous and Asynchronous,av tak jo padhte aa rahe hai wo synchronous tha.

// 1.setTimeout() Function: It calls a method after a number of milliseconds

console.log("Hello");

setTimeout(function (){
    console.log("This will execute after 3 millisecond");
}, 3000);

console.log("World");

function getcheese(callback)
{
    
    setTimeout(() => {
        const cheese = "cheeessee";
        console.log("Here is your cheese", cheese);
        callback();
        
    }, 2000);
}

getcheese((cheese)=>{
    console.log("Got the cheese", cheese);
})
//this is called callback hell
//To handle all these asynchronous conditions we will use promises
