const dayEl = document.querySelector("#day");
const hourEl = document.querySelector("#hour");
const minEl = document.querySelector("#min");
const secEl = document.querySelector("#sec");

console.log(dayEl, hourEl, minEl, secEl);

let newYear = "1 Jan 2022";

function formatTime(time) {
	return time < 10 ? `0${time}` : time;
}

function countDown() {
	const newYearDate = new Date(newYear);
	const currentDate = new Date();

	const allSeconds = (newYearDate - currentDate) / 1000;

	const days = Math.floor(allSeconds / 3600 / 24);
	const hours = Math.floor(allSeconds / 3600) % 24;
	const minutes = Math.floor(allSeconds / 3600) % 60;
	const seconds = Math.floor(allSeconds % 60);

	dayEl.innerText = formatTime(days);
	hourEl.innerText = formatTime(hours);
	minEl.innerText = formatTime(minutes);
	secEl.innerText = formatTime(seconds);
}

countDown();
setInterval(countDown, 1000);
