const title = document.querySelector('#title');
const btnContinue = document.querySelector('.continue');
const btnUp = document.querySelector('.btn-up');
const btnDown = document.querySelector('.btn-down');
const duration = document.querySelector('#duration');


const btnUp2 = document.querySelector('.btn-up-break');
const btnDown2 = document.querySelector('.btn-down-break');
const durationPause = document.querySelector('#break');

const btnUp3 = document.querySelector('.btn-up-session');
const btnDown3 = document.querySelector('.btn-down-session');
const session = document.querySelector('#session');

let count = 0;
let count2 = 0;
let count3 = 0;

btnUp.addEventListener('click', () => {
    if(count > 100 || count === 100) return count = 100, duration.value = 100;

    count++;
    duration.value = count;
    return localStorage.setItem('duration', duration.value);
});
btnDown.addEventListener('click', () => {
    if(count < 0 || count === 0) return count = 0, duration.value = count;

    count--;
    duration.value = count;
    return localStorage.setItem('duration', duration.value);
});

btnUp2.addEventListener('click', () => {
    if(count2 > 100 || count2 === 100) return count2 = 100, durationPause.value = 100;

    count2++;
    durationPause.value = count2;
    return localStorage.setItem('pause', durationPause.value);
});
btnDown2.addEventListener('click', () => {
    if(count2 < 0 || count2 === 0) return count2 = 0, durationPause.value = count;

    count2--;
    durationPause.value = count2;
    return localStorage.setItem('pause', durationPause.value);
});


btnUp3.addEventListener('click', () => {
    if(count3 > 100 || count3 === 100) return count3 = 100, session.value = 100;

    count3++;
    session.value = count3;
    return localStorage.setItem('session', session.value);
});
btnDown3.addEventListener('click', () => {
    if(count3 < 0 || count3 === 0) return count3 = 0, session.value = count3;

    count3--;
    session.value = count;
    return localStorage.setItem('session', session.value);
});


// ======= continue ========
btnContinue.addEventListener('click', () => {
    if(title.value === '' || title.value === null || title.value === undefined) {
        console.log(title)
        title.value = 'Pomodoro'
        return localStorage.setItem('title', title.value);
    } else {
        return localStorage.setItem('title', title.value);
    }
});
