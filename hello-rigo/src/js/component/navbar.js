import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
export class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false
		};
	}

	toggle() {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}
	render() {
		return (
			<nav className="navbar navbar-light bg-light">
				<img src="https://i.dlpng.com/static/png/116175_preview.png" className="logo" />
				<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<DropdownToggle caret>
									Favorites
									<span className="badge badge-secondary ml-2">{store.favorites.length}</span>
								</DropdownToggle>
							);
						}}
					</Context.Consumer>{" "}
					<DropdownMenu>
						<Context.Consumer>
							{({ store, actions }) => {
								return store.favorites.map((item, index) => {
									return (
										<DropdownItem key={index} header>
											<span> {item.name} </span>
											<button onClick={() => actions.removeFavorites(item, index)}>
												<i className="fas fa-trash-alt" />
											</button>
										</DropdownItem>
									);
								});
							}}
						</Context.Consumer>
					</DropdownMenu>
				</Dropdown>
			</nav>
		);
	}
}
