const ticket = Promise(function (resolve, reject) {
    const isBoarded = false;
    if (isBoarded) {
        console.log("You have succeessfully boarded");
    }
    else {
        console.log("Flight has been cancelled");
    }
})

//A promise has three states,pending,fulfilled,rejected.
// pending se ya to resloved me jaega ya to rejected me. Then method se resolve status dekh sakte hai and catch se rejected status

ticket
    .then((data) => {
        console.log("Woohooo", data);
    })
    .catch((data) => {
        console.log("ohh no", data);
    })
    .finally(()=>{
        console.log("I'll always be executed");
    })