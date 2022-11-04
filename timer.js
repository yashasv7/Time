let time = document.querySelector("#time")
let stop = document.querySelector("#stop")
let start = document.querySelector("#start")
let reset = document.querySelector("#reset")
let timeset = document.querySelector("#settime")
let audio = new Audio("audio//as.mp3")
let stime;
let noti;
let winter
Notification.requestPermission().then(() => {


    time.innerHTML = 0


    timeset.addEventListener('click', () => {
        stime = prompt("Set The Timer(in integers):")
        time.innerHTML = stime
    })

    // let noti;

    stop.addEventListener("click", () => {

        clearInterval(winter)
    })

    start.addEventListener('click', () => {

        winter = setInterval(() => {
            stime = stime - 1
            if (stime <= 0) {

                noti = new Notification("Timer Notification", {
                    body: "Time is Over!"

                })
                audio.play()
                setTimeout(() => {
                    noti.close()
                }, 8000);
                clearInterval(winter)
                stime = 0
                time.innerHTML = stime
            }
            time.innerHTML = stime
        }, 1000)
    })

    reset.addEventListener("click", () => {
        stime = 0
        time.innerHTML = stime
        clearInterval(winter)
    })

})
