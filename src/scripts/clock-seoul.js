const getCurrentTime = () => {
    const options = {
        timeZone: 'Asia/Seoul',
        hour12: true,
        weekday: "long", //Monday
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }

    const currentTime = new Date().toLocaleString("en-US", options)
    //Render
    document.querySelector(".clock").innerHTML = currentTime;
    setTimeout(getCurrentTime, 100)
}
