function addThreeNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
}

let resultOfSum = addThreeNumbers(10, 20, 50);
console.log("result", resultOfSum);

function multipltThreeNumbers(num1, num2, num3) {
  return num1 * num2 * num3;
}

let resultOfSum2 = multipltThreeNumbers(2, 8, 30);
console.log("result", resultOfSum2);

//task: change h1 color with button, change background with other button

let headContainer = document.querySelector(".container"); // div class container
let heading = document.querySelector("h1"); // first h1 tag in html
let buttonColours = document.querySelector(".colours"); // button with class colours
let button = document.querySelector("button"); // first button
let body = document.querySelector("body"); // add body to js script
let animalbutton = document.querySelector(".animal"); // adds the mewabutton from html

function changeHeading() {
  heading.innerHTML = "it is a god i dag";
}
button.onclick = changeHeading; //

function changeColours() {
  body.style.backgroundColor = "blue";
}
buttonColours.onclick = changeColours;

// Functions inside objects

const pet = {
  type: "cat",
  name: "titty",
  age: 10,
  isFriendly: false,
  meawMeaw: function () {
    console.log("the sound of the cat");
  },
};

pet.meawMeaw(); // first the object then the parameter = the sound of the cat

// create a button which is called meaw Meaw
//when clicking on this btn i want to rund the function in the object : pet.meawMeaw

animalbutton.onclick = pet.meawMeaw;
