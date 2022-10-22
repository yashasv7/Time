let time = document.querySelector("#time")
let stop = document.querySelector("#stop")
let start = document.querySelector("#start")
let reset = document.querySelector("#reset")
let timeset = document.querySelector("#settime")

let stime;
// let ttime;
let winter
time.innerHTML = 0

timeset.addEventListener('click', () => {
    stime = prompt("Set The Timer(in integers):")
    // winter = setInterval(() => {
    //     stime = stime - 1
    //     console.log(stime)
    //     if (stime==0) {
    //         clearInterval(winter)
    //         time.innerHTML = stime
    //     }
    // }, 1000)
        time.innerHTML = stime
})


stop.addEventListener("click",()=>{
    
    clearInterval(winter)
})

start.addEventListener('click',()=>{
    winter = setInterval(() => {
        stime = stime - 1
        console.log(stime)
        if (stime<=0) {
            clearInterval(winter)
            stime = 0
            time.innerHTML = stime
        }
        time.innerHTML = stime
    }, 1000)
})

reset.addEventListener("click",()=>{
    stime = 0
    time.innerHTML = stime
    clearInterval(winter)
})
