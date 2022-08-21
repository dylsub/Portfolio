"use strict";

//auto control the slider until manual click
let counter = 1;
setChecked(counter);
const sliderTimer = setInterval(function () {
    counter++;
    if (counter > 4) {
        counter = 1;
    }
    setChecked(counter);
}, 5000);

//checks for slider click
document.getElementById('radio1').addEventListener("click", () => {
    console.log("radio1");
    setChecked(1);
    clearInterval(sliderTimer);
});
document.getElementById('radio2').addEventListener("click", () => {
    console.log("radio2");
    setChecked(2);
    clearInterval(sliderTimer);
});
document.getElementById('radio3').addEventListener("click", () => {
    console.log("radio3");
    setChecked(3);
    clearInterval(sliderTimer);
});
document.getElementById('radio4').addEventListener("click", () => {
    console.log("radio4");
    setChecked(4);
    clearInterval(sliderTimer);
});

//checks for arrow key input
let rightReleased = true;
let leftReleased = true;
document.onkeydown = function (event) {
    if (event.keyCode == 37) {
        if (leftReleased == false) return;
        if (counter == 1) {
            setChecked(4);
        } else {
            setChecked(counter - 1);
        }
        leftReleased = false;
        clearInterval(sliderTimer);
    } else if (event.keyCode == 39) {
        if (rightReleased == false) return;
        if (counter == 4) {
            setChecked(1);
        } else {
            setChecked(counter + 1);
        }
        rightReleased = false;
        clearInterval(sliderTimer);
    }
}
document.onkeyup = function (event) {
    if (event.keyCode == 37) leftReleased = true;
    if (event.keyCode == 39) rightReleased = true;
}

//moves to chosen slide and highlights the correct slider navigation dot
function setChecked(num) {
    document.getElementById('radio' + num).checked = true;
    counter = num;
    for (let i = 1; i < 5; i++) {
        document.querySelector(".manual-btn" + i).classList.remove("selected");
    }
    document.querySelector(".manual-btn" + num).classList.add("selected");
}

