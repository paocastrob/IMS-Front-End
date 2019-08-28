import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class Navbar extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<React.Fragment>
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

										{store.token != null && (
											<Link to="/">
												<li onClick={() => actions.logout()} className="nav-item active">
													<a
														className="nav-link"
														href="#"
														role="button"
														aria-haspopup="true"
														aria-expanded="false">
														<i className="fas fa-folder-open" /> Logout
													</a>
												</li>
											</Link>
										)}

										<div className="dropdown-menu" aria-labelledby="navbarDropdown">
											<a className="dropdown-item" href="#">
												Action Inventory
											</a>
											<a className="dropdown-item" href="#">
												Another action
											</a>
											<div className="dropdown-divider" />
											<a className="dropdown-item" href="#">
												Something else here
											</a>
										</div>
									</ul>
								</div>
							</nav>
						</React.Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}
