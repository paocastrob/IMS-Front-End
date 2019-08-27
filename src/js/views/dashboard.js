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
							<div className="column col-6 bg-primary border border-dark text-center text-light">
								<i className="fas fa-cart-arrow-down fa-5x mt-5" />
							</div>
							<div className="column col-6 bg-primary border border-dark text-light text-center">
								<i className="fas fa-dolly-flatbed fa-5x mt-5" />
							</div>
						</div>
						<div className="row">
							<div className="col column bg-info border border-dark text-light text-center">
								<i className="fas fa-boxes fa-7x mt-4" />
							</div>
						</div>
						<div className="row">
							<div className="column col-2 bg-primary border border-dark text-light text-center">
								<i className="fas fa-list fa-4x mt-5" />
							</div>
							<div className="column col-2 bg-info border border-dark text-light text-center">
								<i className="fas fa-list-ul fa-4x mt-5" />
							</div>
							<div className="column col-8 bg-dark border border-dark text-light text-center">
								<i className="fas fa-motorcycle fa-5x mt-5" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
