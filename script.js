const seconds = document.querySelector(".second-hand");
const minutes = document.querySelector(".min-hand");
const hours = document.querySelector(".hour-hand");

function update() {
  const now = new Date();

  let second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours() % 12;
	console.log(second,hour)
  const secondDeg = (second+15)*6; // 360 / 60
  const minuteDeg = (minute+15) * 6 + (second+15) * 0.1 ; // 360 / 60 + progress
  const hourDeg = (hour+3) * 30 + (minute+15) * 0.5 + (second+15)*(30/3600);     // 360 / 12 + progress

  seconds.style.transform = `rotate(${secondDeg}deg)`;
  minutes.style.transform = `rotate(${minuteDeg}deg)`;
  hours.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(update, 1000);
update();
