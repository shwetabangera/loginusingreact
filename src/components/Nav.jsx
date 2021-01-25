import { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";
import logo from "../images/header-logo.jpg";
class Nav extends Component {
	render() {
		return (
			<div className="navbar">
				<img className="logo" src={logo} alt="logo" />
				<ul className="links">
					<li>
						<Link to="/signup">Signup</Link>
					</li>
					<li>
						<Link to="/login">Login </Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Nav;
