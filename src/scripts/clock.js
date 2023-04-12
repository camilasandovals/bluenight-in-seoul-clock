const getCurrentTime = () => {
    //Get new date 
    const today = new Date();

    //Convert 
    let day = today.getDay();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();
    let miliseconds= today.getMilliseconds();

    //Day Array
    const dayArray = [
        "Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"
    ];

    //Check leading zero
    hour = checkLeadingZero(hour)
    minute = checkLeadingZero(minute)
    seconds = checkLeadingZero(seconds)

    //Assemble
    let currentTime = `${dayArray[day]}  ${hour} : ${minute} : ${seconds}`

    //Render
    document.querySelector(".clock").innerHTML = currentTime;
    setTimeout(getCurrentTime, 100)
}

const checkLeadingZero = paramTime => {
    paramTime <10 
    ? paramTime = `0${paramTime}`
    : null 

    return paramTime;
}