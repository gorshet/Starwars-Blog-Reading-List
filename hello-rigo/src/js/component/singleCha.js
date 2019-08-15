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
											<img
												src="https://avante.biz/wp-content/uploads/Dark-Vader-Wallpapers/Dark-Vader-Wallpapers-014.jpg"
												className="card-img-top"
											/>
										</div>
										<div className="col-6">
											<div className="text-wrapper">
												<LoremIpsum p={2.5} />
											</div>
										</div>
										<div className="row mt-5 container-fluid border-top border-danger">
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
													<strong>Birth Year</strong>
												</div>
												<div className="text-danger">
													{store.characters[this.props.match.params.theindex].birth_year}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Gender</strong>
												</div>
												<div className="text-danger">
													{store.characters[this.props.match.params.theindex].gender}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Height</strong>
												</div>
												<div className="text-danger">
													{store.characters[this.props.match.params.theindex].height}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Skin Color</strong>
												</div>
												<div className="text-danger">
													{store.characters[this.props.match.params.theindex].skin_color}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Eye Color</strong>
												</div>
												<div className="text-danger">
													{store.characters[this.props.match.params.theindex].eye_color}
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
