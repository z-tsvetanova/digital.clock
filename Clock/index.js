const months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    
    let hourStr = hour.toString().padStart(2, "0");
    let minStr = min.toString().padStart(2, "0");
    let secStr = sec.toString().padStart(2, "0");

    document.getElementById("hour1").src = `numbers/digit-${hourStr[0]}.png`;
    document.getElementById("hour2").src = `numbers/digit-${hourStr[1]}.png`;
    document.getElementById("minute1").src = `numbers/digit-${minStr[0]}.png`;
    document.getElementById("minute2").src = `numbers/digit-${minStr[1]}.png`;
    document.getElementById("second1").src = `numbers/digit-${secStr[0]}.png`;
    document.getElementById("second2").src = `numbers/digit-${secStr[1]}.png`;
}

function showDate() {
    let date = new Date();
    let dayNum = date.getDate();
    let longMonth = months[date.getMonth()];
    let year = date.getFullYear();

    document.getElementById("dayname").innerText = dayNum;
    document.getElementById("month").innerText = longMonth;
    document.getElementById("year").innerText = year;
}


showTime();
showDate();
setInterval(showTime, 1000);
setInterval(showDate, 1000);
