import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Delivery extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container">
							<div className="row">
								<div className="col">
									<div className="row">
										<div className="col">
											<h5>ID</h5>
										</div>
										<div className="col">
											<h3>STATUS</h3>
										</div>
										<div className="col">
											<h5>LOCATION </h5>
										</div>
										<div className="col">
											<div className="row">
												<h5>LOCATION </h5>
											</div>
											<div className="row">
												<img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiur66g0qHkAhWM1lkKHcheC9IQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.google.com%2Fpermissions%2Fgeoguidelines%2Fattr-guide%2F&psig=AOvVaw0M3hw9x-_RLMf0Kp3hiagj&ust=1566946907599222" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
