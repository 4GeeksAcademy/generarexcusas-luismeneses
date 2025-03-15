import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  const action = ['ate', 'peed', 'crushed', 'broke'];
  const what = ['my homework', 'my phone', 'the car'];
  const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  const createRandomNumber = (limit) =>{
    return Math.floor(Math.random() * limit);

  }
  const randomWho = who[createRandomNumber(who.length)]
  const randoAction = action[createRandomNumber(action.length)]
  const randomWhat = what[createRandomNumber(what.length)]
  const randomWhen = when[createRandomNumber(when.length)]

  const excuse = randomWho+" "+randoAction+" "+randomWhat+" "+randomWhen
  const element = document.getElementById("myExcuse")
  element.innerHTML= excuse
  console.log(excuse);
};
