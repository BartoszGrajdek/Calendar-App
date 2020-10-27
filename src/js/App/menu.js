export class Menu {
	constructor() {}

	showMenu(screen) {
		const header = document.querySelector('.header');
		const wrap = document.querySelector('.page-wrap');

		if (screen === 'mobile') {
			const templateMobile = document.getElementById('header');
			const clone = templateMobile.content.cloneNode(true);

			header.appendChild(clone);

			const navTemplate = document.getElementById('navigation');
			const navClone = navTemplate.content.cloneNode(true);

			wrap.insertBefore(navClone, header);
		} else if (screen === 'pc') {
			const templatePc = document.getElementById('header-pc');
			const clone = templatePc.content.cloneNode(true);
			header.appendChild(clone);
		}
	}

	navigationButton() {
		const switchButton = document.querySelector('.header__switch');
		const switchSpan = document.querySelector('.header__span');
		const nav = document.querySelector('.navigation');

		switchButton.addEventListener(
			'click',
			() => {
				switchSpan.classList.toggle('header__span--switched');
				switchButton.classList.toggle('header__switch--switched');
				nav.classList.toggle('show');
			},
			false
		);
	}
}
