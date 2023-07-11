document.addEventListener('DOMContentLoaded', () => {
	
	var hamburger = document.querySelector('.hamburger');
	var menu = document.querySelector('.menu');
	var menuClose = document.querySelector('.menu-close');

	hamburger.addEventListener('click', function() {
		menu.classList.add('is-active');
	});
	menuClose.addEventListener('click', function() {
		menu.classList.remove('is-active');
	});

})