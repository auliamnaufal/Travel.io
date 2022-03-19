import AbstractView from './AbstractView.js'

export default class extends AbstractView {
	constructor(params) {
			super(params);
			this.setTitle("About");
	}

	async getHtml() {
			return `
				<div class="about-header">
					<div class="about-heading">
						<h1 class="heading__about">About page</h1>
						<p class="detail__about"> This is about page </p>
					</div>
				</div>
			`;
	}
}
