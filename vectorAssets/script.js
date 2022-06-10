'use strict';

function calcCrossProduct(a1, b1, c1, a2, b2, c2)
{
    let a = (b1 * c2 - b2 * c1);
    let b = -1 * (a1 * c2 - a2 * c1);
    let c = (a1 * b2 - a2 * b1);
    console.log("A = " + a);
    console.log("B = " + b);
    console.log("C = " + c);
    console.log("Equation: " + a + "i + " + b + "j + " + c + "k");
    answer.textContent = "The Cross Product is: " + a + "i + " + b + "j + " + c + "k";
}

function calcDotProduct(a1, b1, c1, a2, b2, c2)
{
    let dotProduct = (a1 * a2) + (b1 * b2) + (c1 * c2);
    console.log("Dot Product: " + dotProduct);
    answer.textContent = "The Dot Product is: " + dotProduct;
}

function calcMagnitude(a, b, c)
{
    let magnitude = a ** 2 + b ** 2 + c ** 2;
    console.log("Magnitude: sqrt(" + magnitude + ")");
    answer.textContent = "The Magnitude is: sqrt(" + magnitude + ")";
}

//UI application
const a1 = document.querySelector(".A1");
const b1 = document.querySelector(".B1");
const c1 = document.querySelector(".C1");
const a2 = document.querySelector(".A2");
const b2 = document.querySelector(".B2");
const c2 = document.querySelector(".C2");
const answer = document.querySelector(".answer");

document.querySelector(".buttonC").addEventListener("click", function (e)
{
    e.preventDefault();
    const inputs = [Number(a1.value), Number(b1.value), Number(c1.value), Number(a2.value), Number(b2.value), Number(c2.value)];
    calcCrossProduct(inputs[0], inputs[1], inputs[2], inputs[3], inputs[4], inputs[5]);
});
document.querySelector(".buttonD").addEventListener("click", function (e)
{
    e.preventDefault();
    const inputs = [Number(a1.value), Number(b1.value), Number(c1.value), Number(a2.value), Number(b2.value), Number(c2.value)];
    calcDotProduct(inputs[0], inputs[1], inputs[2], inputs[3], inputs[4], inputs[5]);
});
document.querySelector(".buttonM").addEventListener("click", function (e)
{
    e.preventDefault();
    const inputs = [Number(a1.value), Number(b1.value), Number(c1.value), Number(a2.value), Number(b2.value), Number(c2.value)];
    calcMagnitude(inputs[0], inputs[1], inputs[2]);
});



