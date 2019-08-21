import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
export class Inventory extends React.Component {
	render() {
		return (
			<form>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Email address</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Enter email"
					/>
					<small id="emailHelp" className="form-text text-muted">
						Well never share your email with anyone else.
					</small>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
				</div>
				<div className="form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					<label className="form-check-label" htmlFor="exampleCheck1">
						Check me out
					</label>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
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
			</form>
		);
	}
}
