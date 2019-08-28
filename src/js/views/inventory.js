import React from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
export class Inventory extends React.Component {
	constructor() {
		super();
		this.state = {
			search: ""
		};
	}

	render() {
		return (
			<div>
				<div className="text-center font">
					<h1>Inventory</h1>
				</div>
				<div className="col-6 offset-2 mt-5">
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							id="search"
							placeholder="Search for a product"
							onChange={e => {
								this.setState({
									search: e.target.value
								});
							}}
						/>
					</div>
				</div>
				<div className="text-center mt-5">
					<div className="col-8 offset-2">
						<table className="table table-bordered">
							<thead>
								<th>ID</th>
								<th>ITEM</th>
								<th>DESCRIPTION</th>
								<th>QUANTITY</th>
							</thead>
							<tbody>
								<Context.Consumer>
									{({ store, actions }) => {
										return this.state.search
											? store.products
													.filter(e => {
														return e.item.includes(this.state.search);
													})
													.map((item, index) => {
														return (
															<tr key={index}>
																<td>{item.id}</td>
																<td>{item.item}</td>
																<td>{item.description}</td>
																<td>{item.quantity}</td>
															</tr>
														);
													})
											: store.products.map((item, index) => {
													return (
														<tr key={index}>
															<td>{item.id}</td>
															<td>{item.item}</td>
															<td>{item.description}</td>
															<td>{item.quantity}</td>
														</tr>
													);
											  });
									}}
								</Context.Consumer>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}
