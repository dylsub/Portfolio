"use strict";

//DOM Elements Selector
const inputBox = document.querySelector(".js--add-text");
const addBtn = document.querySelector(".js--add-btn");
const h1 = document.querySelector(".js--title");
const th2 = document.querySelector(".js--clock");
const tasks = document.querySelector(".tasks");
const tasks2 = document.querySelector(".tasks2");
const infoBtn = document.querySelector(".js--info-btn");
const main1 = document.querySelector(".main1");
const main2 = document.querySelector(".main2");
const exitBtn = document.querySelector(".exit__button");
const notesTextbox = document.querySelector(".notes__textbox");
const pastInput = document.querySelector(".js--past-input");
const recoverBtn = document.querySelector(".js--recover-btn");
const deleteBtn = document.querySelector(".js--delete-btn");
const tasksCompletedText = document.querySelector(".js--stats-completed");
const colorBtns = document.querySelectorAll(".js--color-btn");
const color = document.querySelector(".colors");
const html2 = document.querySelector("html");
const body2 = document.querySelector("body");
const clear = document.querySelector(".clear");
const clearBtn = document.querySelector(".js--clear-btn");
const notes = document.querySelector(".notes");
const container = document.querySelector(".container");
const backNotes = document.querySelector(".js--backnotes-btn");
let finishBtns = [];
let cancelBtns = [];

//On Startup
let favTaskCount = 0;
let isNotesVisible = false;
let isNotesVisibleStart = true;
let tasksCompleted = 0;
let currentTasks = [];
let taskDates = [];
let pastTasks = [];
let pastDates = [];
let pastStatus = [];
if (localStorage.getItem("currentTasks")) {
    currentTasks = localStorage.getItem("currentTasks").split(",").filter(task => task.length > 0);
    taskDates = localStorage.getItem("taskDates").split(",").filter(task => task.length > 0);
}
if (localStorage.getItem("pastTasks")) {
    pastTasks = localStorage.getItem("pastTasks").split(",").filter(task => task.length > 0);
    pastDates = localStorage.getItem("pastDates").split(",").filter(task => task.length > 0);
    pastStatus = localStorage.getItem("pastStatus").split(",").filter(task => task.length > 0);
}
if (localStorage.getItem("tasksCompleted")) { tasksCompleted = localStorage.getItem("tasksCompleted"); }
if (localStorage.getItem("color")) {
    html2.style.backgroundColor = localStorage.getItem("color");
    body2.style.backgroundColor = localStorage.getItem("color");
}
if (localStorage.getItem("favTaskCount")) {
    favTaskCount = localStorage.getItem("favTaskCount");
}

tasksCompletedText.textContent = `Tasks Completed: ${tasksCompleted}`;
checkScreenSize();
displayPastTasks(pastTasks, pastDates, pastStatus);
displayTasks(currentTasks, taskDates);
setTime();

notesTextbox.value = localStorage.getItem("notesText");
// notesTextbox.style.width = `${localStorage.getItem("notesWidth")}px`;
// notesTextbox.style.height = `${localStorage.getItem("notesHeight")}px`;

///////////////////////////////////////////////////////////
// Creating new task

addBtn.addEventListener("click", e => {
    e.preventDefault();
    updateTasks();
    displayTasks(currentTasks, taskDates);
    loadFavBtn();
});

document.addEventListener("keyup", e => {
    if (e.keyCode == 13) {
        updateTasks();
        displayTasks(currentTasks, taskDates);
        loadFavBtn();
    }
});

function updateTasks() {
    const inputValue = inputBox.value.toString().trim();

    inputBox.value = "";

    //checks if inputValue is blank
    if (!inputValue) {
        console.log("Please enter task in box");
        return;
    }

    //creates task
    const date = new Date();
    let dateFormat = (date.getMonth() + 1) + "/" + (date.getDate());
    currentTasks.push(inputValue);
    taskDates.push(dateFormat);
    saveTasks();
}

function displayTasks() {
    tasks.innerHTML = '';
    currentTasks.forEach((task, i) => {
        const html = `<div class="task">
        <button class="fav__btn ${favTaskCount > i ? "fav__selected" : ""}">⭐</button>
        <div class="task__date">${taskDates[i]}</div>
        <div class="task__description">${task}</div>
        <div class="task__btns">
            <button class="finish__btn">✅</button>
            <button class="cancel__btn">❌</button>
        </div>
    </div>`;
        tasks.insertAdjacentHTML("beforeend", html);
    });
    addButtonListeners();
}
//image counteroption
/*<div class="task">
<button class="fav__btn ${favTaskCount > i ? "fav__selected" : ""}"><img src="taskAssets/star.png"></button>*/

function displayPastTasks() {
    tasks2.innerHTML = '';
    pastTasks.forEach((task, i) => {
        const html = `<div class="task">
        <div class="fav__filler"></div>
        <div class="task__date">${pastDates[i]}</div>
        <div class="task__description">${task}</div>
        <div class="task__status">${pastStatus[i]}</div>
        <div class="task__ID">${i + 1}</div>
    </div>`;
        tasks2.insertAdjacentHTML("afterbegin", html)
    });
}

function saveTasks() {
    localStorage.setItem("pastTasks", pastTasks);
    localStorage.setItem("pastDates", pastDates);
    localStorage.setItem("pastStatus", pastStatus);
    localStorage.setItem("currentTasks", currentTasks);
    localStorage.setItem("taskDates", taskDates);
    localStorage.setItem("tasksCompleted", tasksCompleted);
    localStorage.setItem("favTaskCount", favTaskCount);

    tasksCompletedText.textContent = `Tasks Completed: ${tasksCompleted}`;
}

/////////////////////////////////////////////////////////////////////////////
// Favorite Button

loadFavBtn();
function loadFavBtn() {
    const favBtn = document.querySelectorAll('.fav__btn');
    favBtn.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.classList.toggle("fav__selected");
            if (btn.classList.contains("fav__selected")) {
                favTaskCount++;
                currentTasks.splice(favTaskCount - 1, 0, currentTasks.splice(i, 1)[0]);
                taskDates.splice(favTaskCount - 1, 0, taskDates.splice(i, 1)[0]);
            } else {
                favTaskCount--;
                currentTasks.splice(favTaskCount, 0, currentTasks.splice(i, 1)[0]);
                taskDates.splice(favTaskCount, 0, taskDates.splice(i, 1)[0]);
            }
            // currentTasks.unshift(currentTasks.splice(i, 1)[0]);
            // taskDates.unshift(taskDates.splice(i, 1)[0]);
            displayTasks();
            saveTasks()
            loadFavBtn();
        });
    });
}

///////////////////////////////////////////////////////////
// finishing/canceling a task

function addButtonListeners() {
    finishBtns = document.querySelectorAll(".finish__btn");
    cancelBtns = document.querySelectorAll(".cancel__btn");
    finishBtns.forEach((btn, i) => {
        btn.addEventListener("click", e => {
            const date = new Date();
            let dateFormat = (date.getMonth() + 1) + "/" + (date.getDate());

            pastTasks.push(currentTasks[i]);
            pastDates.push(dateFormat);
            pastStatus.push("✅");

            currentTasks.splice(i, 1);
            taskDates.splice(i, 1);

            tasksCompleted++;

            if (btn.parentElement.parentElement.firstElementChild.classList.contains("fav__selected")) {
                favTaskCount--;
            }

            displayTasks(currentTasks, taskDates);
            displayPastTasks(pastTasks, pastDates, pastStatus);
            loadFavBtn();
            saveTasks();
        });
    });
    cancelBtns.forEach((btn, i) => {
        btn.addEventListener("click", e => {
            const date = new Date();
            let dateFormat = (date.getMonth() + 1) + "/" + (date.getDate());

            pastTasks.push(currentTasks[i]);
            pastDates.push(dateFormat);
            pastStatus.push("❌");

            currentTasks.splice(i, 1);
            taskDates.splice(i, 1);

            if (btn.parentElement.parentElement.firstElementChild.classList.contains("fav__selected")) {
                favTaskCount--;
            }

            displayPastTasks(pastTasks, pastDates, pastStatus);
            displayTasks(currentTasks, taskDates);
            loadFavBtn();
            saveTasks();
        });
    });
}

///////////////////////////////////////////////////////////
// Date/Time configuration

const oneSecLoop = setInterval(() => {
    setTime();
    saveNotesText();
}, 1000);

const fastLoop = setInterval(() => {
    checkScreenSize();
}, 20);

function checkScreenSize() {
    if (window.innerWidth <= 1340 && (isNotesVisible || isNotesVisibleStart)) {
        notes.classList.add("hidden");
        backNotes.classList.remove('hidden');
        isNotesVisible = false;
        isNotesVisibleStart = false;
    } else if (window.innerWidth > 1340 && !isNotesVisible || isNotesVisibleStart) {
        notes.classList.remove("hidden");
        backNotes.classList.add("hidden");
        container.classList.remove('hidden');
        isNotesVisible = true;
        isNotesVisibleStart = false;
    }
}

function setTime() {
    const date = new Date();
    const weekday = date.getDay();
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    h1.textContent = `Hello. Happy ${weekdays[weekday]}!`

    let hours = date.getHours();
    const meridiem = hours >= 12 ? "pm" : "am";
    hours = hours % 12 == 0 ? 12 : hours % 12;

    th2.textContent = `${hours}:${date.getMinutes().toString().padStart(2, "0")} ${meridiem}`;
}

/////////////////////////////////////////////////////////////////
//Switch to info screen

infoBtn.addEventListener("click", toggleHidden);
exitBtn.addEventListener('click', toggleHidden);

function toggleHidden() {
    main1.classList.toggle("hidden");
    main2.classList.toggle("hidden");
    color.classList.toggle("hidden");
    clear.classList.toggle("hidden");
}

///////////////////////////////////////////////////////////////////
//Saving notepad dimensions and text

function saveNotesText() {
    localStorage.setItem("notesText", notesTextbox.value);
    // localStorage.setItem("notesWidth", notesTextbox.getBoundingClientRect().width - 18);
    // localStorage.setItem("notesHeight", notesTextbox.getBoundingClientRect().height - 18);
}

///////////////////////////////////////////////////////////////////
//Delete and Recover Buttons

deleteBtn.addEventListener("click", (e) => {
    const ID = Number(pastInput.value) - 1;
    if (ID < pastTasks.length && ID >= 0) {
        pastInput.value = "";
        pastTasks.splice(ID, 1);
        pastDates.splice(ID, 1);
        pastStatus.splice(ID, 1);
        displayPastTasks();
        saveTasks();
    }
});

recoverBtn.addEventListener("click", (e) => {
    const ID = Number(pastInput.value) - 1;
    if (ID < pastTasks.length && ID >= 0) {
        pastInput.value = "";
        currentTasks.push(pastTasks[ID]);
        taskDates.push(pastDates[ID]);
        pastTasks.splice(ID, 1);
        pastDates.splice(ID, 1);
        if (pastStatus[ID] == "✅") tasksCompleted--;
        pastStatus.splice(ID, 1);
        displayPastTasks();
        displayTasks();
        loadFavBtn();
        saveTasks();
    }
});

///////////////////////////////////////////////////////////////////////////
// Change background color with buttons

colorBtns.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
        let bodyColor = "";
        if (btn.classList.contains("blue")) {
            bodyColor = "#4759df";
        } else if (btn.classList.contains("red")) {
            bodyColor = "rgb(199, 78, 78)";
        } else if (btn.classList.contains("cyan")) {
            bodyColor = "rgb(22, 197, 168)";
        } else if (btn.classList.contains("grey")) {
            bodyColor = "#777";
        } else if (btn.classList.contains("green")) {
            bodyColor = "rgb(76, 160, 76)";
        } else if (btn.classList.contains("purple")) {
            bodyColor = "rgb(173, 76, 211)";
        } else if (btn.classList.contains("pink")) {
            bodyColor = "rgb(201, 119, 183)";
        }
        body2.style.backgroundColor = bodyColor;
        html2.style.backgroundColor = bodyColor;
        localStorage.setItem("color", bodyColor);
    });
});

///////////////////////////////////////////////////////////////////////////
// Reset Save Data

clearBtn.addEventListener('click', (e) => {
    document.querySelector(".overlay").classList.remove("hidden2");
    document.querySelector(".modal").classList.remove("hidden2");
});

document.querySelector(".js--confirm-btn").addEventListener("click", (e) => {
    localStorage.clear();
    window.location.reload();
})

document.querySelector(".js--deny-btn").addEventListener("click", (e) => {
    document.querySelector(".overlay").classList.add("hidden2");
    document.querySelector(".modal").classList.add("hidden2");
})

document.querySelector(".overlay").addEventListener("click", (e) => {
    document.querySelector(".overlay").classList.add("hidden2");
    document.querySelector(".modal").classList.add("hidden2");
});

///////////////////////////////////////////////////////////////////////////
// Notes Button

document.querySelector(".js--notes-btn").addEventListener('click', () => {
    notes.classList.toggle("hidden");
    container.classList.toggle("hidden");

});

backNotes.addEventListener('click', () => {
    notes.classList.toggle("hidden");
    container.classList.toggle("hidden");
});






