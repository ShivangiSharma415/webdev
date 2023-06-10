// Finding the HTML Element.
// 4 methods: by id. by tagname. by classname, by queryselector

const myBody = document.body;
console.log(myBody);


//By id
const box2 = document.getElementById("box-2");
console.log(box2);


//By tagname
const divs = document.getElementsByTagName("p");
console.log(p);

//By classname
const boxes = document.getElementsByClassName("box")
console.log(boxes);

//By queryselector
const random = document.querySelector(".container .random")
console.log(random);


//Modifying html elements

const box1 = document.getElementById("Box-1");
box1.innerHTML = "Hello World"; //This is modifying the innerHtml

//Now we will see how to change the attribute of the html element.In this we use camel case

box1.style.backgroundColor = "red";
//to change the source of image attribute we use document.getelementbyid("myimage").src =  "";


//Modifying class in HTML
box1.classList.add("round-border"); //Added the class to box1

// adding class to all borders
const boxex = document.getElementsByClassName("box");

for(let i = 0; i<boxes.length();i++)
{
    boxes[i].classList.add("round-border");
}

//To remove any class property
box1.classList.remove("round-border");


//Creating and appending new HTML
const newPara = document.createElement("p");
newPara.innerText("This is brand new");
//agar is paragraph ko box class deni hai to add kar do
newPara.classList.add("box");

const conatiner = document.getElementById("constainer")
conatiner.appendChild("newPara");

