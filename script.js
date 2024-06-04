function updateTime() {
    // Get the current time in Alaska
    const now = new Date().toLocaleString("en-US", {timeZone: "America/Anchorage"});
    const timeArray = now.split(', ')[1].split(':');
    const hours = timeArray[0];
    const minutes = timeArray[1];
    const seconds = timeArray[2].split(' ')[0];

    //Update clock display
    document.getElementById('time').innerHTML = `${hours}:${minutes}:${seconds}`;
}

//Call updateTime every second
setInterval(updateTime, 1000);

//Initial call to display time as soon as page loads
updateTime();