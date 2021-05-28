const getTitle = localStorage.getItem('title');
const getSession = localStorage.getItem('session');
let getDuration = localStorage.getItem('duration');
let getPause = localStorage.getItem('pause');

const title = document.querySelector('.title');
let duration = document.querySelector('.border span');
const circleSession = document.querySelector('.circle-session');
const session = document.querySelector('.session');
const btnPlay = document.querySelector('.play');
const goBack = document.querySelector('.go-back');

title.innerHTML = getTitle;
duration.innerHTML = `${getDuration}:00`;

goBack.addEventListener('click', () => {
    localStorage.clear();
});

btnPlay.addEventListener('click', () => {
    let time = getDuration.concat(':00');
    let limite = Math.round((Date.now() - time) / (1000 * 60));

    if(limite > 0) {
        limite--;
        duration.innerHTML = limite;
    }

    if(limite === 0) {
        duration.innerHTML = limite
    }
});