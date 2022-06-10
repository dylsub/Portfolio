"use strict";

const goodQuestions = document.querySelectorAll(".q");
const badQuestions = document.querySelectorAll(".q2");
const questionTexts = document.querySelectorAll(".qt");
const questionTitles = document.querySelectorAll(".test-title");
const resultBtn = document.querySelector(".result");
const restartBtn = document.querySelector(".restart");
const resultText = document.querySelector(".result-text");
const spectrumText = document.querySelector(".spectrum-text");
const testHeader = document.querySelector(".section-test-h2");
const sectionTest = document.querySelector(".section-test");
const spectrumIMG = document.querySelector(".spectrum");

let scoreCount = 0;
let totalCount = 0;
let spectrum = "";
let scorePercentage = 0;

resultBtn.addEventListener("click", function (e)
{
    e.preventDefault();
    totalCount = 0;
    scoreCount = 0;
    goodQuestions.forEach(function (element)
    {
        totalCount++;
        if (!element.checked)
        {
            scoreCount++;
        }
        element.style.display = "none";
    });
    badQuestions.forEach(function (element)
    {
        totalCount++;
        if (element.checked)
        {
            scoreCount++;
        }
        element.style.display = "none";
    });
    scorePercentage = Math.floor(((totalCount - scoreCount) / totalCount) * 100);
    spectrum = calcSpectrum(scorePercentage);

    testHeader.textContent = "Your Results";
    spectrumText.style.display = "block";
    resultText.style.display = "block";
    resultBtn.style.display = "none";
    restartBtn.style.display = "block";
    spectrumIMG.style.display = "block";
    resultText.textContent = "Final Score: " + (totalCount - scoreCount) + "/" + totalCount + " (" + scorePercentage + "%) ";
    spectrumText.textContent = "You are " + spectrum.toUpperCase() + ".";
    deleteQuestions();
});

restartBtn.addEventListener("click", function ()
{
    location.reload();
});

function deleteQuestions()
{
    questionTexts.forEach(function (element)
    {
        element.style.display = "none";
    });
    questionTitles.forEach(function (element)
    {
        element.style.display = "none";
    });

}

function calcSpectrum(sp)
{
    if (sp >= 90)
    {
        resultText.style.backgroundColor = "#99D9EA";
        spectrumText.style.backgroundColor = "#99D9EA";
        return "not down bad";
    }
    else if (sp >= 80)
    {
        resultText.style.backgroundColor = "#00A3E8";
        spectrumText.style.backgroundColor = "#00A3E8";
        return "down bad";
    }
    else if (sp >= 70)
    {
        resultText.style.backgroundColor = "#23B14D";
        spectrumText.style.backgroundColor = "#23B14D";
        return "down terrible";
    }
    else if (sp >= 60)
    {
        resultText.style.backgroundColor = "#B5E51D";
        spectrumText.style.backgroundColor = "#B5E51D";
        return "down horrendous";
    }
    else if (sp >= 50)
    {
        resultText.style.backgroundColor = "#FEF200";
        spectrumText.style.backgroundColor = "#FEF200";
        return "down hideous";
    }
    else if (sp >= 40)
    {
        resultText.style.backgroundColor = "#FF7F26";
        spectrumText.style.backgroundColor = "#FF7F26";
        return "down monumental";
    }
    else if (sp >= 30)
    {
        resultText.style.backgroundColor = "#ED1B24";
        spectrumText.style.backgroundColor = "#ED1B24";
        return "down defecient";
    }
    else if (sp >= 20)
    {
        resultText.style.backgroundColor = "#A349A3";
        spectrumText.style.backgroundColor = "#A349A3";
        return "down pathetic";
    }
    else if (sp >= 10)
    {
        resultText.style.backgroundColor = "#7F7F7F";
        spectrumText.style.backgroundColor = "#7F7F7F";
        return "down despicable";
    }
    else if (sp >= 0)
    {
        resultText.style.backgroundColor = "#000000";
        spectrumText.style.backgroundColor = "#000000";
        resultText.style.color = "#fff";
        spectrumText.style.color = "#fff";
        return "down astronomical";
    }
}
