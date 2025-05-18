var seconds = document.querySelector(".second-hand");
var minutes = document.querySelector(".min-hand");
var hours = document.querySelector(".hour-hand");
function update() {
var currTime = new Date();
var hour = (currTime.getHours()%12)*3600;
var second = currTime.getSeconds();
var minute = (currTime.getMinutes()%60)*60;
	hours.style.transform=`rotate(${(360/(3600*12))*hour}deg)`;
	minutes.style.transform=`rotate(${(1/10)*minute}deg)`;
	seconds.style.transform=`rotate(${second*6}deg)`;
}
setInterval(update,1000)
update();