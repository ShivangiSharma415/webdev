// There are two ways to handle events in javascript.
// 1. By using an event handler
// 2. By using an event listener

//Event Handlers:It gets triggered based on specific actions on html elements.ye html element likh rahi or uske funcyion js me define karte hai.

function myFunction(){
    console.log("I was clicked");
}

const mouseOver = () => {
    console.log("I am a mouse over function");
}

function onKeyPress() //then second number pe ye
{
    console.log("Key was pressed");
}

function onKeyDown() //pahle ye hoga
{
    console.log("Key down was pressed");
}

function onKeyUp() //then third pe ye
{
    console.log("Key up was pressed");
}


//Event Listeners:Inhe html element me nahi likhte, yahi par unki id se access kar k lagate hai, isme 2 dunction ek sath laga sakte hai dono trigger hone

const box1 = document.getElementById('box-1')
box1.addEventListener('click', ()=>{
    console.log("Click by event");
})

box1.addEventListener('click', ()=>{
    console.log("Click by event2");
})

//sare events yaha use kar sakte hai,ek fayda ye bhi hai ki event object bhi le k aa sakte hai
box1.addEventListener('click', (e)=>{
    console.log("Event Object", e); // e me sari information hogi uss event object k bare me
    
})