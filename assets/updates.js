"use strict";

const updates = [
    {
        date: "August 27, 2022",
        description: "🆕 New project \"STEM & Buds Naperville\" has Released!"
    },
    {
        date: "August 21, 2022",
        description: "🆕 New project \"NVHS DECA Website\" has Released!<br>🔨 Replaced Twitter link with Youtube<br>🔨 Other Minor adjustments"
    },
    {
        date: "July 10, 2022",
        description: "🔨 Minor adjustments"
    },
    {
        date: "July 1, 2022",
        description: "🆕 New game \"Bee Careful!\" has Released!<br>📝 Play it now in the \"Projects\" Tab."
    },
    {
        date: "May 30, 2022",
        description: "🔗 Linked Discord profile<br>🆕 Added 🔥 to most popular projects<br>🔨 Other minor adjustments"
    },
    {
        date: "April 27, 2022",
        description: "🆕 My New Game \"PocaPola Island Adventure\" has Released!<br>📝 Play it now in the \"Projects\" Tab."
    },
    {
        date: "April 3, 202",
        description: "🔨 Improved \"About\" tab<br>🔨 Updated Website Colors<br>🆕 New Game Annoucement in \"Projects\" Tab<br>📝 Weekly GameDev Updates will be Posted<br>📝 Game Release Date: 4/28/22"
    },
    {
        date: "February 27, 2022",
        description: "🆕 Added \"Gambling Simulator\" Project"
    },
    {
        date: "January 18, 2022",
        description: "🆕 Added new \"Updates\" Tab<br>🔨 Improved Mobile Formatting<br>🔨 Improved \"About\" Tab"
    },
    {
        date: "January 16, 2022",
        description: "🧨 Removed \"Contact Me\" Tab<br>🔨 Improved Mobile Formatting<br>🆕 Added Favoriting to \"To-Do List\"<br>🔨 Optimized Web Page Load Time"
    },
    {
        date: "Announcement",
        description: "Hey everyone! I thought it would be easier to start logging my changes here in this \"Updates\" tab. Stop by once a while to see what's new!"
    },
    // {
    //     date: "",
    //     description: ""
    // },
]

const updateHTML = document.querySelector(".updates");


displayUpdates();
function displayUpdates() {
    updateHTML.innerHTML = '';
    for (let i = 0; i < updates.length; i += 1) {
        const html = `<div class="update">
        <img src="assets/img/updatelogo.png">
        <div class="update__content">
            <h3>${updates[i].date}</h3>
            <p>${updates[i].description}</p>
        </div>
    </div>`;
        updateHTML.insertAdjacentHTML("beforeend", html);
    }
}