import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Saleslist extends React.Component {
	constructor(props) {
		super(props);
		// Don't do this!
		this.state = { scan: "" };
	}
	render() {
		return (
			<div className="row">
				<div className="col-10 mx-auto">
					<div className="text-center font">
						<h1>Sales List</h1>
					</div>
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<React.Fragment>
									<div className="row">
										<div className="col-3">August 15, 2019</div>
									</div>

									<div className="row">
										<div className="col-3">
											<input
												placeholder="Enter order number:"
												className="mb-2 border w-100"
												onChange={e => this.setState({ scan: e.target.value })}
											/>
										</div>
									</div>
									<div className="row">
										<div className="col-3">
											<input
												placeholder="Scan Barcode..."
												className="mb-2 border w-100"
												onChange={e => this.setState({ scan: e.target.value })}
											/>
										</div>
									</div>
									<div className="row">
										<div className="col-3">
											<input
												placeholder="Enter Quantity..."
												className="mb-3 border w-100"
												onChange={e => this.setState({ qty: e.target.value })}
											/>
										</div>
										<div className="col-4 ">
											<button
												onClick={() => actions.scanNewCode(this.state.scan)}
												className="btn btn-info m-1">
												Add
											</button>
										</div>
									</div>
								</React.Fragment>
							);
						}}
					</Context.Consumer>
					<table className="table table-bordered tableborder">
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
									return store.saleslist.map((item, index) => {
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
