import AbstractView from './AbstractView.js'

export default class extends AbstractView {
	constructor(params) {
			super(params);
			this.setTitle("About");
	}

	async getHtml() {
			return `
					<h1>About page</h1>
					<p> This is about page </p>
			`;
	}
}
