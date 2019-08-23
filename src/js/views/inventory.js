import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<div className="col-4 offset-4">
					<table className="table table-bordered">
						<thead>
							<Context.Consumer>
								{({ store, actions }) => {
									return (
										store.products[0] &&
										Object.keys(store.products[0]).map(key => {
											return <td key={key}>{key}</td>;
										})
									);
								}}
							</Context.Consumer>
						</thead>
						​
						<Context.Consumer>
							{({ store, actions }) => {
								return store.products.map((item, index) => {
									return (
										<tr key={index}>
											<td>{item.description}</td>
											<td>{item.id}</td>
											<td>{item.item}</td>
											<td>{item.qty}</td>
										</tr>
									);
								});
							}}
						</Context.Consumer>
					</table>
				</div>
			</div>
		);
	}
}
