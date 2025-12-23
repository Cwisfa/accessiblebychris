document.addEventListener('DOMContentLoaded', function () {
	var btn = document.querySelector('.nav-toggle');
	var nav = document.getElementById('primary-navigation');
	var navContainer = btn ? btn.closest('.main-nav') : null;

	function closeNav() {
		btn.setAttribute('aria-expanded', 'false');
		nav.classList.remove('open');
		if (navContainer) navContainer.classList.remove('menu-open');
	}

	function openNav() {
		btn.setAttribute('aria-expanded', 'true');
		nav.classList.add('open');
		if (navContainer) navContainer.classList.add('menu-open');
	}

	btn.addEventListener('click', function (e) {
		var expanded = btn.getAttribute('aria-expanded') === 'true';
		if (expanded) closeNav(); else openNav();
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape' && nav.classList.contains('open')) {
			closeNav();
			btn.focus();
		}
	});

	document.addEventListener('click', function (e) {
		if (!nav.contains(e.target) && !btn.contains(e.target)) {
			closeNav();
		}
	});
});