import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class PurchasesList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			order: "",
			scan: "",
			quantity: ""
		};
	}
	render() {
		return (
			<div className="row">
				<div className="col-10 mx-auto">
					<div className="text-center font">
						<h1>Purchases List</h1>
					</div>
					<Context.Consumer>
						{({ store, actions }) => {
							return <React.Fragment />;
						}}
					</Context.Consumer>
					<table className="table table-bordered tableborder">
						<thead>
							<tr>
								<th scope="col">ID Number</th>
								<th scope="col">Date</th>
								<th scope="col">{<i className="far fa-times-circle" />}</th>
							</tr>
						</thead>
						<tbody>
							<Context.Consumer>
								{({ store, actions }) => {
									return store.purchases.map((item, index) => {
										return (
											<tr key={index}>
												<td scope="row">{index + 1}</td>
												<td>{item.id}</td>
												<td>{item.date}</td>
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
