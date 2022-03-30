'use strict'

const today = document.getElementById("today")
const time = document.getElementById("time")



function getTime() {
    let present = new Date();
    time.textContent = present;
    let year = present.getFullYear();
    let month = present.getMonth() +1;
    let date = present.getDate();
    let hour = present.getHours();
    let minute = present.getMinutes();
    let second = present.getSeconds();

    month = month<10? `0${month}` : month
    date = date<10? `0${date}` : date
    hour = hour<10? `0${hour}` : hour
    minute = minute<10? `0${minute}` : minute
    second = second<10? `0${second}` : second

    today.textContent = `${month} ${date} ${year}`
    time.textContent = `${hour} ${minute} ${second}`
}
getTime() // to show the " very first NOW before setInterval kicks in in 1000ms" 
setInterval(getTime,1000);