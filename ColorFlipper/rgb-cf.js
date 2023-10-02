document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("rgb-button");
    const currentColor = document.getElementById("current-color");
    button.addEventListener("click", function(){
        const randR = Math.floor(Math.random() * 1000) % 256;
        const randG = Math.floor(Math.random() * 1000) % 256;
        const randB = Math.floor(Math.random() * 1000) % 256;
        const randRGB = "rgb(" + randR + "," + randG + "," + randB + ")";
        currentColor.innerHTML = "Currrent Color : " + randRGB;
        document.body.style.backgroundColor = randRGB;
    });
});