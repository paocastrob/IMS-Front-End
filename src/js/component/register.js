import React from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class Register extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="text-center font mt-5">
					<h1>IMS Register</h1>
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
											placeholder="Email / Username"
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
											<h2>Register</h2>
										</button>
										<p className="message">
											Already registered? <Link to="/">Login!</Link>
										</p>
										<p className="message">
											Don
											{"'"}t feel like waiting?{" "}
											<Link to="private/dashboard">Go to dashboard!!</Link>
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
