import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		return (
			<div id="login">
				<form>
					<h1>Sign In</h1>
					<input type="text" placeholder="Username" />
					<input type="password" placeholder="Password" />
					<button>Sign in</button>
				</form>
			</div>
		);
	}
}
