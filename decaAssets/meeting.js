"use strict";

//WORK IN PROGRESS

//////////////////////////////////////////////////////////
//Meeting objects
//////////////////////////////////////////////////////////

//HOW TO ADD A MEETING
//1) Copy this: 
/* 
    {
        link: "",
        image: "",
        title: "",
        description: "",
    },
*/
//2) Fill out the information for the new meeting insidse the ""
//3) For the image, take a screenshot of the title slide and save it into the img folder
//4) put the file path into the image property: "assets/img/imagefile"

///////////////////////////////////////////////////////////

const meetings = [
    {
        link: "",
        image: "img/meeting3.png",
        title: "Custom Meeting",
        description: "Unique meetings can easily be added as an object.",
    },
    {
        link: "https://docs.google.com/presentation/d/1U5RDkDRVb8AV6i9SMeYNh4zvuuUELOumPxrzFnfTyh8/edit?usp=sharing",
        image: "img/meeting1.png",
        title: "February 3 Meeting",
        description: "Introductions and Icebreakers",
    },
    {
        link: "",
        image: "img/meeting2.png",
        title: "January 6 Meeting",
        description: "State Information",
    },
    {
        link: "",
        image: "img/meeting3.png",
        title: "December 21 Meeting",
        description: "Study tips and manual due date",
    },
    {
        link: "https://docs.google.com/presentation/d/1U5RDkDRVb8AV6i9SMeYNh4zvuuUELOumPxrzFnfTyh8/edit?usp=sharing",
        image: "img/meeting1.png",
        title: "February 3 Meeting",
        description: "Introductions and Icebreakers",
    },
    {
        link: "",
        image: "img/meeting2.png",
        title: "January 6 Meeting",
        description: "State Information",
    },
    {
        link: "",
        image: "img/meeting3.png",
        title: "December 21 Meeting",
        description: "Study tips and manual due date",
    },
    {
        link: "",
        image: "img/meeting2.png",
        title: "January 6 Meeting",
        description: "State Information",
    },
]



///////////////////////////////////////////////////////////////////////////////
//Displays the meetings on website
///////////////////////////////////////////////////////////////////////////////

const meetingsSlides = document.querySelector(".meetings__slides");

displayMeetings();
function displayMeetings() {
    meetingsSlides.innerHTML = '';
    for (let i = 0; i < meetings.length - 2; i += 3) {
        const html = `<div class="meetings__row">
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetings[i].link}"><img src="${meetings[i].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetings[i].link}"
                    class="disable-select">${meetings[i].title}</a>
                <p>${meetings[i].description}</p>
            </div>
        </div>
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetings[i + 1].link}"><img src="${meetings[i + 1].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetings[i + 1].link}"
                    class="disable-select">${meetings[i + 1].title}</a>
                <p>${meetings[i + 1].description}</p>
            </div>
        </div>
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetings[i + 2].link}"><img src="${meetings[i + 2].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetings[i + 2].link}"
                    class="disable-select">${meetings[i + 2].title}</a>
                <p>${meetings[i + 2].description}</p>
            </div>
        </div>
    </div>`;
        meetingsSlides.insertAdjacentHTML("beforeend", html);
    }

    const left = meetings.length % 3;
    if (left == 1) {
        const html = `<div class="meetings__row">
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetings[meetings.length - 1].link}"><img src="${meetings[meetings.length - 1].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetings[meetings.length - 1].link}"
                    class="disable-select">${meetings[meetings.length - 1].title}</a>
                <p>${meetings[meetings.length - 1].description}</p>
            </div>
        </div>
    </div>`;
        meetingsSlides.insertAdjacentHTML("beforeend", html);
    } else if (left == 2) {
        const html = `<div class="meetings__row">
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetings[meetings.length - 2].link}"><img src="${meetings[meetings.length - 2].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetings[meetings.length - 2].link}"
                    class="disable-select">${meetings[meetings.length - 2].title}</a>
                <p>${meetings[meetings.length - 2].description}</p>
            </div>
        </div>
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetings[meetings.length - 1].link}"><img src="${meetings[meetings.length - 1].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetings[meetings.length - 1].link}"
                    class="disable-select">${meetings[meetings.length - 1].title}</a>
                <p>${meetings[meetings.length - 1].description}</p>
            </div>
        </div>
    </div>`;
        meetingsSlides.insertAdjacentHTML("beforeend", html);
    }

}

/*
`<div class="meetings__row">
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetingRow[0].link}"><img src="${meetingRow[0].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetingRow[0].link}"
                    class="disable-select">${meetingRow[0].title}</a>
                <p>${meetingRow[0].description}</p>
            </div>
        </div>
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetingRow[1].link}"><img src="${meetingRow[1].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetingRow[1].link}"
                    class="disable-select">${meetingRow[1].title}</a>
                <p>${meetingRow[1].description}</p>
            </div>
        </div>
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetingRow[2].link}"><img src="${meetingRow[2].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetingRow[2].link}"
                    class="disable-select">${meetingRow[2].title}</a>
                <p>${meetingRow[2].description}</p>
            </div>
        </div>
    </div>`
*/