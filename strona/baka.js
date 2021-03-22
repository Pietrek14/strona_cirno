const bakaButton = document.querySelector("#baka-button");
const funkyFumo = document.querySelector("#funky-fumo");

bakaButton.onclick = () => {
	funkyFumo.style.color = `#${Math.floor(Math.random() * 16777215).toString(
		16
	)}`;
};
