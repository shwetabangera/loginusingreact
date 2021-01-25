import { Component } from "react";
import "../styles/Signupage.css";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Url from "../apicalls/apicall";

class Signup extends Component {
	onSubmit = (event) => {
		event.preventDefault();
		fetch(Url + "users/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			mode: "cors",
			body: JSON.stringify({
				firstName: event.target.firstName.value,
				lastName: event.target.lastName.value,
				emailId: event.target.emailId.value,
				userPassword: event.target.userPassword.value,
				confirmPassword: event.target.confirmPassword.value,
			}),
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				if (data.data) {
					console.log("Signup Successful");
					alert("You have successfully signed up.");
					this.props.history.push("/");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// }
	render() {
		return (
			<div>
				<Nav />
				<div className="signup">
					<h2> User signup </h2>
					<form className="form-container" onSuit={this.onSubmit}>
						<p>First Name</p>
						<input
							type="text"
							placeholder="Enter first name"
							name="firstName"
						/>
						<p>Last Name</p>
						<input type="text" placeholder="Enter last Name" name="lastName" />
						<p>Email</p>
						<input type="text" placeholder="Enter email id" name="emailId" />
						<p>Password</p>
						<input
							type="password"
							placeholder="Enter Password"
							name="userPassword"
						/>
						<p>Confirm Password</p>
						<input
							type="password"
							placeholder="Confirm password"
							name="confirmPassword"
						/>
						<button type="submit" className="buttonheight">
							Signup
						</button>
						<Link to="/login">
							<input type="button" name="login" value="login" />
						</Link>
						<button type="reset" name="cancel" value="cancel">
							Clear
						</button>
					</form>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Signup;
