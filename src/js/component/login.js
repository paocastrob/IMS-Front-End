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
									<input
										onChange={e => this.setState({ username: e.target.value })}
										type="text"
										placeholder="username"
									/>
									<input
										onChange={e => this.setState({ password: e.target.value })}
										type="password"
										placeholder="password"
									/>
									<button
										onClick={() => {
											actions.login(this.state.username, this.state.password, this.props);
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
