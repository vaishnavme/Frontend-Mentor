const emailText = document.querySelector("#email-input");
const submit = document.querySelector("#submit");
const errorImg = document.querySelector("#error-img");

let isEmail = false;
let emailExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const inputHandler = () => {
	let email = emailText.value;
	if (!checkMail(email)) {
		errorImg.classList.add("active");
	}
};

const checkMail = (email) => {
	return emailExpression.test(String(email).toLowerCase());
};

submit.addEventListener("click", inputHandler);
