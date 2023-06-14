$(document).ready(function () {
	$('#nav-icon1').click(function () {
		$(this).toggleClass('open');
	});
});

const elCloseModal = document.querySelector('.site-header__close');
const elNav = document.querySelector('.site-header__nav');
const hamburger = document.querySelector('#nav-icon1');
const elList = document.querySelector('.site-header__list');

function headerActions() {
	hamburger.addEventListener('click', () => {
		elNav.classList.add('opennav');
	});

	elCloseModal.addEventListener('click', () => {
		elNav.classList.add('close');
		setTimeout(() => {
			elNav.classList.remove('opennav');
			elNav.classList.remove('close');
		}, 700);
		hamburger.classList.remove('open');
	});

	elList.addEventListener('click', () => {
		elNav.classList.add('close');
		setTimeout(() => {
			elNav.classList.remove('opennav');
			elNav.classList.remove('close');
		}, 500);
		hamburger.classList.remove('open');
	});
}

headerActions();
