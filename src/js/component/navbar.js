import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark thedarkness">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<i className="fas fa-home" />
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<Link to="/">
							<li className="nav-item active">
								<a
									className="nav-link"
									href="#"
									role="button"
									aria-haspopup="true"
									aria-expanded="false">
									<i className="fas fa-home" /> Home
								</a>
							</li>
						</Link>

						<Link to="/private/sales">
							<li className="nav-item active">
								<a
									className="nav-link"
									href="#"
									role="button"
									aria-haspopup="true"
									aria-expanded="false">
									<i className="fas fa-piggy-bank" /> Sales
								</a>
							</li>
						</Link>

						<Link to="/private/purchases">
							<li className="nav-item active">
								<a
									className="nav-link"
									href="#"
									role="button"
									aria-haspopup="true"
									aria-expanded="false">
									<i className="fas fa-file-invoice-dollar" /> Purchases
								</a>
							</li>
						</Link>
						<Link to="/private/inventory">
							<li className="nav-item active">
								<a
									className="nav-link"
									href="#"
									role="button"
									aria-haspopup="true"
									aria-expanded="false">
									<i className="fas fa-box-open" /> Inventory
								</a>
							</li>
						</Link>

						<Link to="/private/delivery">
							<li className="nav-item active">
								<a
									className="nav-link"
									href="#"
									role="button"
									aria-haspopup="true"
									aria-expanded="false">
									<i className="fas fa-truck" /> Delivery
								</a>
							</li>
						</Link>

						<Link to="/private/neworder">
							<li className="nav-item active">
								<a
									className="nav-link"
									href="#"
									role="button"
									aria-haspopup="true"
									aria-expanded="false">
									<i className="fas fa-folder-open" /> Sales List
								</a>
							</li>
						</Link>
					</ul>
				</div>
			</nav>
		);
	}
}
