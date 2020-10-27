import { Menu } from './App/menu';
import { OurOffer } from './App/ourOffer';

class ResponsiveHandler {
	constructor() {
		this.mobile = window.innerWidth < 700 ? true : false;
		this.menuHandler();
	}

	menuHandler() {
		const menu = new Menu();
		if (this.mobile == true) {
			menu.showMenu('mobile');
			menu.navigationButton();
		} else {
			menu.showMenu('pc');
		}
	}
}

window.addEventListener('load', () => {
	const load = new ResponsiveHandler();
	const load1 = new OurOffer();
});