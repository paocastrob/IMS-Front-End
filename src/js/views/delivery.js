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
						<div className="container mt-5">
							<div className="row mb-5 bg-dark pt-2">
								<div className="col text-light">
									<h5>Warehouse Name</h5>
								</div>
								<div className="col text-light">
									<h5>Products in the Warehouse</h5>
								</div>
								<div className="col text-light">
									<h5 className="pl-3">Warehouse Location</h5>
								</div>
								<div className="col text-light">
									<h5>Update Location</h5>
								</div>
							</div>
							{store.warehouses.map((item, index) => {
								return (
									<div className="row map" key={index}>
										<div className="col text-warning pt-5 pl-5">
											<h4>{item.warehouse_name.toUpperCase()}</h4>
										</div>
										<div className="col pt-5 pl-5">
											<ul>
												{item.products.map((item, index) => {
													return (
														<li key={index} className="text-light">
															{item.products_id}
														</li>
													);
												})}
											</ul>
										</div>

										<div className="col">
											<row className="map">
												<GoogleMap lat={item.latitude} lng={item.longitude} />
											</row>
										</div>

										<div className="col text-light pt-5 pl-5">
											<button
												className="btn btn-danger"
												onClick={() => actions.updateLocation(item.id)}>
												Update Location
											</button>
										</div>
									</div>
								);
							})}
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
