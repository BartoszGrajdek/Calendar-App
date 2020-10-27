export class OurOffer {
	constructor() {
		this.follow();
	}

	follow() {
		const followButtons = document.querySelectorAll(
			'.our-offer__follow-box'
		);

		for (const button of followButtons) {
			const span = button.firstElementChild;
			button.addEventListener('click', () => {
				span.classList.toggle('our-offer__follow--followed');
			});
		}
	}
}
