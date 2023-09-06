let time = document.querySelector("#time")
let stop = document.querySelector("#stop")
let start = document.querySelector("#start")
let reset = document.querySelector("#reset")

let seconds = 0;
let winter;
let min = 0;

time.innerHTML = `00:0${min}:0${seconds}:${msec}`;

if (seconds > 59) {
    min = min + 1
    seconds = 0
}


start.addEventListener('click', () => {
    console.log("StopWatch Started!")

    winter = setInterval(() => {
        msec+=1
        if (msec > 98) {
            seconds += 1
            msec= 0
        }
        
        if (seconds > 58) {
            min = min + 1
            seconds = 0
        }
        // seconds = seconds + 1
        console.log(seconds)
        if (seconds < 10) {
            time.innerHTML = `00:0${min}:0${seconds}`;
        }
        else {

            time.innerHTML = `00:0${min}:${seconds}`;
        }
    }, 1)
})

stop.addEventListener('click', () => {
    // console.log(seconds)
    clearInterval(winter)
})

reset.addEventListener('click', () => {
    seconds = 0
    min = 0
    time.innerHTML = `00:0${min}:0${seconds}`;
    clearInterval(winter)
})
