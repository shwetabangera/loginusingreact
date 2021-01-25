import { Component } from "react";
import "../styles/Loginpage.css";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Url from "../apicalls/apicall";
import Dashboard from "./dashboard";
// import Signup from "./signup";

class Login extends Component {
	state = {
		status: "",
	};
	onLogin = (event) => {
		event.preventDefault();
		fetch(Url + "users/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			mode: "cors",
			body: JSON.stringify({
				emailId: event.target.email.value,
				userPassword: event.target.password.value,
			}),
		})
			.then((response) => {
				console.log(response.emailId);
				return response.json();
			})
			.then((data) => {
				if (data.data) {
					this.setState({ status: "successful" });
				} else {
					alert("Invalid Email or Password");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		return (
			<div>
				{this.state.status === "successful" ? (
					<Dashboard />
				) : (
					<div>
						<Nav />
						<div className="login">
							<h2>Login Page</h2>
							<form className="form-container" onSubmit={this.onLogin}>
								<p>Email</p>
								<input
									type="text"
									placeholder="Enter your email"
									name="email"
								/>
								<p>Password</p>
								<input
									type="password"
									placeholder="Enter your password"
									name="password"
								/>
								<button type="submit">Login</button>
								<Link to="/signup">
									<input type="button" name="signup" value="signup" />
								</Link>
								<button type="reset" name="cancel" value="cancel">
									clear
								</button>
							</form>
						</div>
						<Footer />
					</div>
				)}
			</div>
		);
	}
}

export default Login;
