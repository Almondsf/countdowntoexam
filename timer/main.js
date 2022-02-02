const day = document.getElementById('dayd');
const hour = document.getElementById('dayh');
const min = document.getElementById('daym');
const second = document.getElementById('dayss');

const examDate = new Date("1 april 2022");
function countdown(){
    const startExam = new Date(examDate);
    const currentDate = new Date();

    const totSecs = (examDate - currentDate) / 1000;

    const days = Math.floor(totSecs / 3600 / 24);
    const hours = Math.floor(totSecs / 3600) % 24;
    const mins = Math.floor(totSecs / 60) % 60;
    const seconds = Math.floor(totSecs) % 60;

    dayd.innerHTML = days;
    dayh.innerHTML = hours;
    daym.innerHTML = mins;
    dayss.innerHTML = seconds;
    
     
}

countdown();
setInterval(countdown, 1000);