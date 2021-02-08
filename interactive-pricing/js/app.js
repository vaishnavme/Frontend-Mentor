const planSwitch = document.querySelector(".switch input");
const pageView = document.querySelector("#page-view");
const pricePer = document.querySelector("#price-amount");
const priceSlider = document.querySelector("#range-slider");

const priceData = [
	{ viewcount: "10K", price: 8 },
	{ viewcount: "50K", price: 12 },
	{ viewcount: "100K", price: 16 },
	{ viewcount: "500K", price: 24 },
	{ viewcount: "1M", price: 36 },
];

function priceHandler(val = priceSlider.value) {
	let price = planSwitch.checked
		? priceData[val].price * 0.75
		: priceData[val].price;
	pricePer.innerText = `$${price}`;
	pageView.innerText = priceData[val].viewcount;
}

priceSlider.addEventListener("change", (e) => {
	let value = e.target.value;
	priceHandler(value);
});

planSwitch.addEventListener("change", (e) => {
	priceHandler();
});
