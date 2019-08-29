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
						<div className="container mt-4">
							<div className="row w-100">
								<div className="col">
									<h3>ID</h3>
								</div>
								<div className="col">
									<h3>Name</h3>
								</div>
								<div className="col">
									<h3>Latitude </h3>
								</div>
								<div className="col">
									<h3>Longitude </h3>
								</div>
								<div className="col">
									<h3>Map </h3>
								</div>
								<div className="col" />
							</div>
							<div className="row">
								<div className="col" />
								<div className="col" />
								<div className="col" />
								<div className="col" />
								<div className="col mr-5">
									<GoogleMap lat={23} lng={10} />
								</div>
								<div className="col">
									<button type="button" className="btn btn-primary ml-5">
										Primary
									</button>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
