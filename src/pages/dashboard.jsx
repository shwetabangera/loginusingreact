import { Component } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/Dashboard.css";
class Dashboard extends Component {
	render() {
		return (
			<div>
				<div className="main-div">
					<h2> Logged In Succesfully</h2>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Dashboard;
