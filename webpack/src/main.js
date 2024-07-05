import confetti from 'canvas-confetti';

const button = document.querySelector(".button-confetti")

button.addEventListener("click", ()=>{
    console.log("hola")
    confetti();
})