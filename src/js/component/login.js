import React from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export class Login extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="text-center font mt-5">
					<h1>IMS Login</h1>
				</div>
				<Context.Consumer>
					{({ actions }) => {
						return (
							<div className="login-page">
								<div className="form">
									<div className="login-form">
										<input
											onChange={e => this.setState({ username: e.target.value })}
											type="text"
											placeholder="Username"
											className="login-form"
										/>
										<input
											onChange={e => this.setState({ password: e.target.value })}
											type="password"
											placeholder="Password"
										/>
										<button
											className="loginButton"
											onClick={() => {
												actions.login(this.state.username, this.state.password, this.props);
											}}>
											<h2>Login</h2>
										</button>
										<p className="message">
											Not registered? <a href="#">Create an account.</a>
										</p>
									</div>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
			</React.Fragment>
		);
	}
}
