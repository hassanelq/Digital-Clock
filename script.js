var today = new Date();

var seconds = today.getSeconds()<10 ? '0'+today.getSeconds() : today.getSeconds();
var hours = today.getHours()<10 ? '0'+today.getHours() : today.getHours();
var minutes = today.getMinutes()<10 ? '0'+today.getMinutes() : today.getMinutes();
var format = today.getHours()>= 12 ? "PM" : "AM"

document.getElementById("seconds").innerHTML = seconds;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("hours").innerHTML = hours;
document.getElementById("format").innerHTML = format;