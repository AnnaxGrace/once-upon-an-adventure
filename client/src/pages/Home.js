import React, { Component } from "react";
import Banner from "../components/Banner/Banner";
import SignUpModal from "../components/Modals/SignUpModal";
import About from "../components/About/About";
import { Container } from "../components/Grid";
import Login from "../components/Login/Login";
import API from "../utils/API";

class Home extends Component {
  state = {
    email: "",
    password: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    this.setState({
      [name]: value,
    });
  };

  HandleLoginSubmit = event => {
    event.preventDefault();
    const user = this.state;
    console.log("working")
    API.findUser({
      email: user.email,
      password: user.password
    }).then(function (user) {
      console.log(user)
      const id = user.data[0]._id
      console.log(id)

      window.location.replace("/user/" + id);
      // If there's an error, log the error
    })
      .catch(function (err) {
        alert("Please enter correct email")
      })
  }


  handleSignUpSubmit = (event) => {
    event.preventDefault();
    const user = this.state;
    // console.log(user);

    API.saveUser({
      email: user.email,
      password: user.password,
    }).then(function () {
      window.location.replace("/");
      // If there's an error, log the error
    })
      .catch(function (err) {
        alert("Try Again!")
      })
  };

  render() {
    return (
      <Container>
        <div className="row">
          <div className="col-md-7 text-center">
            {/* Opening splash image */}
            <Banner />
          </div>
          <div className="col-md-5 text-center">
            {/* Login Card */}
            <Login
              handleInputChange={this.handleInputChange}
              HandleLoginSubmit={this.HandleLoginSubmit}
            />
          </div>
          {/* An About Section */}
          <About />
          {/* Renders the sign-Up Modal */}
          <SignUpModal
            handleInputChange={this.handleInputChange}
            handleSignUpSubmit={this.handleSignUpSubmit}
          />
        </div>
      </Container>
    );
  }
}

export default Home;
