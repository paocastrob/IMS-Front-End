import React from "react";
import { Context } from "../store/appContext";

export class Login extends React.Component {
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
									<button onClick={() => {
                                        let obj = {
                                            username: 'user',
                                            password: 'pass'
                                        }
                                    actions.login(pbj)}}>Login</button>
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
