import React from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
	}
	render() {
		return (
			<Context.Consumer>
				{({ actions }) => {
					return (
						<div className="login-page">
							<div className="form">
								<div className="login-form">
									<input type="text" placeholder="username" />
									<input type="password" placeholder="password" />
									<button
										onClick={() => {
											let usernameVariable = document.querySelector("[placeholder=username]")
												.value;
											let passwordVariable = document.querySelector("[placeholder=password]")
												.value;
											actions.login(usernameVariable, passwordVariable, this.props);
										}}>
										Login
									</button>
									<p className="message">
										Not registered? <a href="#">Create an account</a>
									</p>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
