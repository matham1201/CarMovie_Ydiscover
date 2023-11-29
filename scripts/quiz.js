let seconds = document.getElementById('seconds');
let ss = document.getElementById('ss');
let sec_dot = document.querySelector('.sec_dot');

let timer = 19;

const interval = 1000;

//const time = setInterval(updateTimer, interval);

ss.style.strokeDashoffset = 1;

function updateTimer() {
    seconds.innerHTML = timer;
    ss.style.strokeDashoffset = -(440 - (440 * timer)/19);
    sec_dot.style.transform = `rotateZ(${-(timer*19)}deg)`;

    if(timer != 0){
        timer--;
    }
}

questionManager()

function questionManager(){
    const time = setInterval(updateTimer, interval);
}
