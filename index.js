let time = 0;
let running = 0;
let interval;
let lapCount = 0;

function startStop() {
    if (running == 0) {
        running = 1;
        increment();
        document.getElementById("startStop").innerHTML = "Stop";
        document.getElementById("startStop").style.backgroundColor = "red";
        document.getElementById("lapReset").innerHTML = "Lap";
    } else {
        running = 0;
        clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        document.getElementById("startStop").style.backgroundColor = "green";
        document.getElementById("lapReset").innerHTML = "Reset";
    }
}

function lapReset() {
    if (running == 1) {
        lapCount++;
        let li = document.createElement("li");
        li.id="li-1";
        let min = Math.floor(time/10/60);
        let sec = Math.floor(time/10 % 60);
        let tenth = time % 10;

        if (min < 10) min = "0" + min;
        if (sec < 10) sec = "0" + sec;

        li.appendChild(document.createTextNode(`Lap ${lapCount} ${min}:${sec}:${tenth}`));
        document.getElementById("laps").prepend(li);
    } else {
        time = 0;
        lapCount = 0;
        document.getElementById("time").innerHTML = "00:00:00";
        document.getElementById("laps").innerHTML = "";
    }
}

function increment() {
    interval = setInterval(function() {
        time++;
        let min = Math.floor(time/10/60);
        let sec = Math.floor(time/10 % 60);
        let tenth = time % 10;

        if (min < 10) min = "0" + min;
        if (sec < 10) sec = "0" + sec;

        document.getElementById("time").innerHTML = min + ":" + sec + ":" + "0" + tenth;
    }, 100);
}

document.getElementById("startStop").addEventListener("click", startStop);
document.getElementById("lapReset").addEventListener("click", lapReset);