let iclock = document.getElementById("clock")
let idate = document.getElementById("ddate")
let amopm = document.getElementById("ampm")

setInterval(() => {
    // declaring new date
    let d = new Date()
    // getting time
    let hour = d.getHours()
    let min = d.getMinutes()
    let sec = d.getSeconds()
    // getting date
    let date = d.getDate()
    let month = d.getMonth()
    let year = d.getFullYear()
    let day = d.getDay()
    month = month + 1;
    let ampm;
    if (hour > 12) {
        ampm = "PM"
    }
    else {
        ampm = "AM"
    }
    if (hour > 12) {

        switch (hour) {
            case 13:
                hour = 1
                break;

            case 14:
                hour = 2
                break;

            case 15:
                hour = 3
                break;

            case 16:
                hour = 4
                break;

            case 17:
                hour = 5
                break;

            case 18:
                hour = 6
                break;

            case 19:
                hour = 7
                break;

            case 20:
                hour = 8
                break;

            case 21:
                hour = 9
                break;

            case 22:
                hour = 10
                break;

            case 23:
                hour = 11
                break;
            default:
                break;
        }
    }
    switch (day) {
        case 0:
            day = "Sunday"
            break;

        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednessday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
        default:
            break;
    }
    if (min < 10) {
        console.log(hour, min, sec)
        let t_t = "Time:"
        // iclock.innerHTML = t_t;
        iclock.innerHTML = hour + ":" + "0" + min + ":" + sec;
        amopm.innerHTML = ampm
        let d_t = "Date:"
        idate.innerHTML = d_t + "<br>" + date + " - " + month + " - " + year + "," + "<br>" + day;
    }
    else {


        console.log(hour, min, sec)
        let t_t = "Time:"
        // iclock.innerHTML = t_t;
        iclock.innerHTML = hour + ":" + min + ":" + sec;
        amopm.innerHTML = ampm
        let d_t = "Date:"
        idate.innerHTML = d_t + "<br>" + date + " - " + month + " - " + year + "," + "<br>" + day;
    }

}, 1000)