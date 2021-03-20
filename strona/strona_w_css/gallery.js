window.onload = () => {
	const gallery = document.getElementById("gallery");
	const gallery_img = document.getElementById("gallery-img");
	let photo_index = 0;
	const photos = gallery.getAttribute("photos").split(",");
	const alts = gallery.getAttribute("alts").split(",");
	const rightArrow = document.getElementById("arrow-right");
	const leftArrow = document.getElementById("arrow-left");
	const galleryOrbs = document.getElementById("gallery-orbs");
	const orbs = [];

	photos.forEach((photo, index) => {
		const orb = document.createElement("img");
		orb.setAttribute("src", "img/gallery_orb.svg");
		orb.classList.add("inactive");
		orb.classList.add("gallery-orb");
		orb.onclick = () => {
			photo_index = index;
			updatePhoto();
		};
		galleryOrbs.appendChild(orb);
		orbs.push(orb);
	});

	function updatePhoto() {
		gallery_img.setAttribute("src", photos[photo_index]);
		gallery_img.setAttribute("alt", alts[photo_index]);
		orbs.forEach((orb, index) => {
			if (index == photo_index) {
				orb.classList.remove("inactive");
			} else {
				orb.classList.add("inactive");
			}
		});
	}

	updatePhoto();

	rightArrow.onclick = () => {
		photo_index = (photo_index + 1) % photos.length;
		updatePhoto();
	};
	leftArrow.onclick = () => {
		photo_index = (photo_index - 1) % photos.length;
		if (photo_index < 0) photo_index = photos.length - 1;
		updatePhoto();
	};
};
