import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-6 mx-auto">
					<div className="text-center mt-5">
						<h1>Purchases</h1>
					</div>
					<div>
						<p> August 15, 2019 </p> <p>0123456789 (order number)</p>
					</div>
					<table className="table table-bordered">
						<thead>
							<tr>
								<th scope="col">ID Number</th>
								<th scope="col">SKU</th>
								<th scope="col">Description</th>
								<th scope="col">Quantity</th>
								<th scope="col">Date</th>
								<th scope="col">Order Number</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>Mark</td>
								<td>Otto</td>
								<td>@mdo</td>
								<td>@mdo</td>
								<td>@mdo</td>
								<i className="far fa-times-circle fa-2x pt-2 pl-1 text-danger" />
							</tr>

							<tr>
								<th scope="row">2</th>
								<td>Jacob</td>
								<td>Thornton</td>
								<td>@fat</td>
								<td>@fat</td>
								<td>@fat</td>
							</tr>
							<tr>
								<td>@twitter</td>
								<td>@twitter</td>
								<td>@twitter</td>
								<td>@twitter</td>
								<td>@twitter</td>
								<td>@twitter</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
