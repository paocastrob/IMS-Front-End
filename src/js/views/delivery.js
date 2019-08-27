import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import GoogleMap from "../component/map";

import "../../styles/demo.scss";

export class Delivery extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container">
							<div className="row w-100">
								<div className="col bg-">
									<h3>ID</h3>
								</div>
								<div className="col">
									<h3>STATUS</h3>
								</div>
								<div className="col">
									<h3>LOCATION </h3>
								</div>
								<div className="col map">
									<h3>LOCATION </h3>
									<GoogleMap lat={23} lng={10} />
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
