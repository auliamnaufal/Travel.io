import AbstractView from './AbstractView.js'

export default class extends AbstractView {
	constructor(params) {
			super(params);
			this.setTitle("Dashboard");
	}

	async getHtml() {
			return `
				<div class="home-header">
					<div class="heading-home">
						<h1 class="heading__heading">Enjoy The <span>World</span></h1>
						<button class="cta__heading">Explore Now</button>
					</div>
				</div>
			`;
	}
}
