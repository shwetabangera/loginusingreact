import { Component } from "react";
import Nav from "../components/Nav";
import "../styles/Home.css";
import Footer from "../components/Footer";
import img from "../images/welcome.jpeg";

class Home extends Component {
	render() {
		return (
			<div>
				<Nav />
				<div className="main-div">
					<h2> Home Page</h2>
					<img className="img" src={img} alt="Welcome" />
				</div>
				<Footer />
			</div>
		);
	}
}

export default Home;
