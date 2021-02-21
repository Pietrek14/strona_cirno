const gallery = document.getElementById("gallery");
const gallery_img = document.getElementById("gallery-img");
let photo_index = 0;
const photos = gallery.getAttribute("photos").split(",");
const alts = gallery.getAttribute("alts").split(",");

function updatePhoto() {
	gallery_img.setAttribute("src", photos[photo_index]);
	gallery_img.setAttribute("alt", alts[photo_index]);
}


