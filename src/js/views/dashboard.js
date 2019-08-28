import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
export class Dashboard extends React.Component {
	render() {
		return (
			<div className="container">
				<ul className="circles mb-0">
					<li />
					<li />
					<li />
					<li />
					<li />
					<li />
					<li />
					<li />
					<li />
					<li />
				</ul>
				<div className="fila row">
					<div className="col-8 offset-2 mt-5">
						<div className="row">
							<div className="inventory column col-6 bg-primary border border-dark text-center text-light">
								<i className="inventory icon fas fa-cart-arrow-down fa-5x mt-5" />
								<div className="overlay3">
									<div className="text3">
										<h2>Purchases</h2>
									</div>
								</div>
							</div>
							<div className="sales column col-6 bg-primary border border-dark text-light text-center">
								<i className="salesicon fas fa-dolly-flatbed fa-5x mt-5" />
								<div className="overlay2">
									<div className="text2">
										<h2>Sales</h2>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="purchases col column bg-info border border-dark text-light text-center">
								<i className="purchasesicon fas fa-boxes fa-7x mt-4" />
								<div className="overlay">
									<div className="text">
										<h2>Inventory</h2>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="list column col-2 bg-primary border border-dark text-light text-center">
								<i className="listicon fas fa-list fa-4x mt-5" />
								<div className="overlay5">
									<div className="text5">Sales List</div>
								</div>
							</div>
							<div className="list column col-2 bg-info border border-dark text-light text-center">
								<i className="listicon fas fa-list-ul fa-4x mt-5" />
								<div className="overlay5">
									<div className="text5">Purchase List</div>
								</div>
							</div>
							<div className="delivery column col-8 logistics border border-dark text-light text-center">
								<i className="deliveryicon fas fa-motorcycle fa-5x mt-5" />
								<div className="overlay4">
									<div className="text4">
										<h2>Delivery</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
