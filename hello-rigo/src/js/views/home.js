import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Cardcha } from "../component/cardcha.js";
import { Cardpla } from "../component/cardpla.js";
export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<h2> Characters </h2>
				</div>
				<div className="row">
					<Cardcha />
				</div>
				<div className="row">
					<h3> Planets </h3>
				</div>
				<div className="row">
					<Cardpla />
				</div>
			</div>
		);
	}
}
