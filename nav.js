const hauteur = navbar.getBoundingClientRect().height;
document
	.querySelector(":root")
	.style.setProperty("--navbar-height", hauteur + "px");

burgerIcon.addEventListener("click", () => {
	navUl.classList.toggle("active");
	burgerIcon.classList.toggle("active");
});
