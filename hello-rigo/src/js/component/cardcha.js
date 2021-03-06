import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export class Cardcha extends React.Component {
	render() {
		return (
			<div className="container ">
				<div className="card-deck ">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.characters.map((item, index) => {
								return (
									<div key={index} className="card" style={{ width: 300 }}>
										<img
											src="https://www.car-revs-daily.com/wp-content/uploads/2015/12/FCA-Star-Wars-16-400x200.jpg"
											className="card-img-top"
											alt="..."
										/>
										<div className="card-body">
											<h7 className="card-title"> {item.name} </h7>
											<p className="card-text">
												{" "}
												Gender: {item.gender} <br /> Hair Color: {item.hair_color} <br /> Eye
												color:
												{item.eye_color}
											</p>

											<Link to={"/single-people/" + index + "/" + item.name}>
												<button className="btn btn-primary">Details</button>
											</Link>
											<button
												onClick={() => actions.markFavorite(index, item.name)}
												type="button"
												className="btn btn-outline-warning">
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
