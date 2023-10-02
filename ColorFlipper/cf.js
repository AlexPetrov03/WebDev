const colors = ["Red", "Green", "Blue", "White", "Magenta", "Pink", "Purple", "Yellow"];

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("button");
    const currentColor = document.getElementById("current-color");
    button.addEventListener("click", function(){
        const randIndex = Math.floor(Math.random() * 10 % 8);
        currentColor.innerHTML = "Currrent Color : " + colors[randIndex];
        document.body.style.backgroundColor = colors[randIndex];
    });
});