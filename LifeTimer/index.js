let isDOBOpen = false;
let dateOfBirth;
const settingCogEl = document.getElementById("settingIcon");
const settingContentEl = document.getElementById("settingContent");
const initialTextEl = document.getElementById("initialText");
const afterDOBBtnTextEl = document.getElementById("afterDOBBtnText");
const dobButtonEl = document.getElementById("dobButton");
const dobInputEl = document.getElementById("dobInput");

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const makeTwoDigitNumber = (number) => {
     return number > 9 ? number : `0${number}`;
};

const toggleDateOfBirthSelector = () => {
    if(isDOBOpen) {
        settingContentEl.classList.add("hide");
    } else{
        settingContentEl.classList.remove("hide");
    }
    isDOBOpen = !isDOBOpen;
    console.log("Toggle",isDOBOpen);
};

const updateAge = () => {
    const currentDate =new Date();
    const dateDiff = currentDate - dateOfBirth;
    const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
    const month = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12);
    const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
    const hour = Math.floor(dateDiff / (1000 * 60 * 60 )) % 24;
    const minute = Math.floor(dateDiff / (1000 * 60)) % 60;
    const second = Math.floor(dateDiff / 1000) % 60;
    
    yearEl.innerHTML = makeTwoDigitNumber(year);
    monthEl.innerHTML = makeTwoDigitNumber(month); 
    dayEl.innerHTML = makeTwoDigitNumber(day); 
    hourEl.innerHTML = makeTwoDigitNumber(hour); 
    minuteEl.innerHTML = makeTwoDigitNumber(minute); 
    secondEl.innerHTML = makeTwoDigitNumber(second); 
};

const setDOBHandler = () => {
    const dateString = dobInputEl.value;

    dateOfBirth = dateString ? new Date(dateString) : null;

    // const year = localStorage.getItem("year");
    // const month = localStorage.getItem("month");
    // const date = localStorage.getItem("date");

    // if(year && month && date){
    //     dateOfBirth =new Date(year, month , date);
    // }
    if(dateOfBirth){
        //localStorage.setItem("year", dateOfBirth.getFullYear());
        ////localStorage.setItem("month", dateOfBirth.getFullYear());
        ////localStorage.setItem("date", dateOfBirth.getFullYear());
        initialTextEl.classList.add("hide");
        afterDOBBtnTextEl.classList.remove("hide");
        setInterval(() => updateAge(), 1000);
    }else{
        afterDOBBtnTextEl.classList.add("hide");
        initialTextEl.classList.remove("hide");
    }
    console.log("date of birth", dateOfBirth);
};
setDOBHandler();





settingCogEl.addEventListener("click", toggleDateOfBirthSelector);
dobButton.addEventListener("click", setDOBHandler); 