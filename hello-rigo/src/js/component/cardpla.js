import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export class Cardpla extends React.Component {
	render() {
		return (
			<div className="container ">
				<div className="card-deck ">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.planets.map((item, index) => {
								return (
									<div key={index} className="card" style={{ width: 300 }}>
										<img
											src="https://assets.metrolatam.com/mx/2013/05/21/abandoned-star-wars-tatooine-movie-set-tunisia-desert-lars-homestead-6-400x200.jpg"
											className="card-img-top"
											alt="..."
										/>
										<div className="card-body">
											<h7 className="card-title"> {item.name} </h7>
											<p className="card-text">
												Population: {item.population} <br /> Terrain:
												{item.terrain}
											</p>
											<Link to={"/single-planets/" + index + "/" + item.name}>
												<button className="btn btn-success">Details</button>
											</Link>
											<button type="button" className="btn btn-outline-warning">
												<i className="far fa-heart" />
											</button>
										</div>
									</div>
								);
							});
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}
