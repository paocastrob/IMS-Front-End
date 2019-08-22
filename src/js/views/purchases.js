import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Purchases extends React.Component {
	constructor(props) {
		super(props);
		// Don't do this!
		this.state = { scan: "" };
	}
	render() {
		return (
			<div className="row">
				<div className="col-6 mx-auto">
					<div className="text-center mt-5">
						<h1>Purchases</h1>
					</div>
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<div>
									<p> August 15, 2019 </p>
									<p>Enter order number:</p>
									<input
										placeholder="Scan Barcode..."
										className="mb-3 border"
										onChange={e => this.setState({ scan: e.target.value })}
									/>
									<button
										onClick={() => actions.scanNewCode(this.state.scan)}
										className="btn btn-info">
										Add
									</button>
									<input
										placeholder="Enter Quantity..."
										className="mb-3 border"
										onChange={e => this.setState({ qty: e.target.value })}
									/>
								</div>
							);
						}}
					</Context.Consumer>
					<table className="table table-bordered">
						<thead>
							<tr>
								<th scope="col">ID Number</th>
								<th scope="col">SKU</th>
								<th scope="col">Description</th>
								<th scope="col">Quantity</th>
								<th scope="col">Date</th>
								<th scope="col">Order Number</th>
								<th scope="col">{/*space for x's*/}</th>
							</tr>
						</thead>
						<tbody>
							<Context.Consumer>
								{({ store, actions }) => {
									return store.purchases.map((item, index) => {
										return (
											<tr key={index}>
												<th scope="row">{index + 1}</th>
												<td>{item.title}</td>
												<td>{item.sku}</td>
												<td>{item.description}</td>
												<td>@mdo</td>
												<td>@mdo</td>
												<td>
													<i className="far fa-times-circle fa-2x pt-2 pl-1 text-danger" />
												</td>
											</tr>
										);
									});
								}}
							</Context.Consumer>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
