import confetti from "canvas-confetti"
const button = document.querySelector(".button")

button.addEventListener("click", function(){
    console.log("h")
    confetti.start()
})