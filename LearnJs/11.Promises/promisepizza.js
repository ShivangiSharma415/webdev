function getcheese(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const cheese = "Cheese";
            console.log("Here is the cheese", cheese);
            resolve(cheese);
            
        }, 2000);
    })
}

console.log(getcheese()); //Yha pe promise show hoga lakin pending state me dikhaega kyuki settimeout kiye hai,agar asynchronous code ko matlab setimeout ko agar comment kar k call kare to fulfilled show hoga

function makedough(cheese){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dough = cheese + "dough";
            console.log("Here is the dough", dough);
            resolve(dough);
            //reject("Bad Cheese")
            
        }, 2000);
    })
}

function bakePizza(dough){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const pizza = dough + "pizza";
            console.log("Here is the pizza", pizza);
            resolve(pizza);
            
        }, 2000);
    })
}

getcheese()
.then((cheese) => {
    console.log("Here is the cheese", cheese);
    makedough(cheese);
})
.then((dough) => {
    console.log("Here is the dough", dough);
    bakePizza(dough);
})
.then((pizza) => {
    console.log("Here is the pizza", pizza);
})
.catch((data) => {
    console.log("Error Occurred");
})
.finally(() => {
   console.log("Process Ended");
});

//Instead of using this chaining we can also use async method

async function orderPizza()
{
    try{
   const cheese = await getcheese();
   console.log("Here is the cheese", cheese);

   const dough = await makedough(cheese);
   console.log("Here is the dough", dough);

   const pizza = await bakePizza(dough);
   console.log("Here is the pizza", pizza);
    } catch(err)
    {
        console.log("Error Occurred", err);
    }

    console.log("Process Ended");


}

orderPizza();