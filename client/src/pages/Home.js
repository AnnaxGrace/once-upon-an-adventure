import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner/Banner"
import SignUpModal from "../components/Modals/SignUpModal"
import About from "../components/About/About"
import { Container } from "../components/Grid";
import Login from "../components/Login/Login"

class Home extends Component {
    state = {
        email: "",
        password: ""
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
    
        this.setState({
          [name]: value
        });
      };

    handleFormSubmit = event => {
        event.preventDefault();

        this.setState({
            email: "",
            password: ""
        })
    }

    render() {
        return (
            <Container>
                <div className="row">
                    <div className="col-md-7 text-center">
                        <Banner />
                    </div>
                    <div className="col-md-5 text-center">
                        <Login
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit} />
                    </div>
                    <About />
                    <SignUpModal
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit} />
                </div>
            </Container>
        )
    }
}

export default Home;