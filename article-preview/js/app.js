const shareButton = document.querySelector("#share-btn");
const shareBox = document.querySelector("#share-box");

shareButton.addEventListener("click", () => {
	shareBox.classList.toggle("active");
});
