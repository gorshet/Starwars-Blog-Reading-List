import React from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { LoremIpsum, Avatar } from "react-lorem-ipsum";

export class SingleCha extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<div className="row">
						<Context.Consumer>
							{({ store }) => {
								return (
									<React.Fragment>
										<div className="col-6">
											<img src="http://placehold.it/800x600" className="card-img-top" />
										</div>
										<div className="col-6">
											<h1>{store.characters[this.props.match.params.myId].name}</h1>
											<div className="text-wrapper">
												<LoremIpsum p={1.5} />
											</div>
										</div>
										<div className="row mt-5 container-fluid">
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Name</strong>
												</div>
												<div className="text-danger">
													{store.characters[this.props.match.params.theindex].name}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Climate</strong>
												</div>
												<div className="text-danger">
													{store.characters[this.props.match.params.theindex].climate}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Population</strong>
												</div>
												<div className="text-danger">
													{store.characters[this.props.match.params.theindex].population}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Orbital Period</strong>
												</div>
												<div className="text-danger">
													{store.characters[this.props.match.params.theindex].orbital_period}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Rotation Period</strong>
												</div>
												<div className="text-danger">
													{store.characters[this.props.match.params.theindex].rotation_period}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Diameter</strong>
												</div>
												<div className="text-danger">
													{store.characters[this.props.match.params.theindex].diameter}
												</div>
											</div>
										</div>
									</React.Fragment>
								);
							}}
						</Context.Consumer>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
SingleCha.propTypes = {
	match: PropTypes.object
};
