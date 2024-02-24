
class CollapseButton {
	constructor(id) {
		if (id) {
			this.id = id;
			this.btn = document.querySelector(`button[data-collapse="${this.id}"]`);
			this.div = document.querySelector(`div[data-collapse="${this.id}"]`);
			if (this.btn && this.div) {
				this.btn.addEventListener('click', this.onBtnClick.bind(this));
			}	
		}

		if (!this.id || !this.btn || !this.div) {
			throw new Error('Initialization error.');
		}
	}

	onBtnClick() {
		this.div.classList.toggle('show');	
	}
}

document.addEventListener("DOMContentLoaded", () => {
	try {
		const buttons = [];
		const collapseButtons = document.querySelectorAll(".collapse");

		collapseButtons.forEach((button) => {
			buttons.push(new CollapseButton(button.dataset.collapse));
		});

		console.log('init ok');
	} catch (err) {
		console.error(err) 
	}	
});

