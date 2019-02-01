import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Layout extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Brandon'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<div className="home">
				<div className="Aligner">
					<div className="Aligner-item">
						<img src="/img/logo.png" />
						<h1 />
						<div className="menu">
							<ul>
								<li>
									<a href="" target="new">
										Documentation
									</a>
								</li>
								<li>
									<a href="" target="new" />
								</li>
							</ul>
						</div>
						<div className="version-num">version 2.0.0</div>
						<br />
						<a
							className="github-button"
							href="#"
							data-icon="octicon-star"
							data-style="mega"
							data-count-href=""
							data-count-api=""
							data-count-aria-label="#"
							aria-label=""
						>
							Star
						</a>
					</div>
				</div>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
