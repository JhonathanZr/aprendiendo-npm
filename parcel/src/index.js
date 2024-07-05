import confetti from 'canvas-confetti'
console.log("hola mundoooo")

const button = document.querySelector(".button-confetti")

button.addEventListener("click", ()=>{
    confetti()
})