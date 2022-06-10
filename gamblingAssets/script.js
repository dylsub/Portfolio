"use strict";

//dom elements
const btn = document.querySelector(".bet__button");
const inpt = document.querySelector(".bet__input");
const bal = document.querySelector(".bet__total");
const rslt = document.querySelector(".bet__result");
const rst = document.querySelector(".bet__reset");

//event listeners
let total = 1000;
bal.textContent = `$${total}`;
document.addEventListener("keyup", function (e) {
    if (event.keyCode === 13) {
        gamble();
    }
});
btn.addEventListener("click", gamble);
rst.addEventListener("click", reset);

//functions
function gamble() {
    if (isNaN(inpt.value) || inpt.value == "" || total == 0 || inpt.value == 0) return;
    let bet = Number(inpt.value);
    if (bet > total) return;
    let randNum = Math.floor(Math.random() * 100);
    rslt.textContent = randNum;
    if (randNum <= 49 && randNum > 0) {
        total -= bet;
        rslt.style.color = 'rgb(248, 99, 72)';
    }
    else if (randNum >= 50 && randNum < 99) {
        total += bet;
        rslt.style.color = 'rgb(36, 250, 83)';
    }
    else if (randNum == 0) {
        total -= bet * 100;
        rslt.style.color = 'grey';
    }
    else if (randNum == 99) {
        total += bet * 100;
        rslt.style.color = 'yellow';
    }
    if (total < 0) total = 0;
    bal.textContent = `$${total}`;
    inpt.value = "";
}

function reset() {
    total = 1000;
    rslt.textContent = "BET";
    rslt.style.color = "#fff";
    inpt.value = "";
    bal.textContent = `$${total}`
}