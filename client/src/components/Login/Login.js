import React, { Component } from "react";

const styles={
    bookImg: {
        width: 200,
        marginTop: 10
    }
}

class Login extends Component {
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
        <div className="card">
            <div className="card-body">
            <h1>Welcome!</h1>
            <br />
            <form className="login">
                <input
                value={this.state.email}
                type="email"
                onChange={this.handleInputChange}
                className="form-control special"
                id="email-input"
                placeholder="Email"
                />
                <br />

                <input
                value={this.state.password}
                type="password"
                onChange={this.handleInputChange}
                className="form-control special"
                id="password-input"
                placeholder="Password"
                />
                <br />

                <button className="btn special" onClick={this.handleFormSubmit}>Log In!</button>

                <p>
                or
                <br />
                <a
                    href="#loginModal"
                    data-toggle="modal"
                    data-target="#loginModal"
                >
                    Create an Account
                </a>
                <br />
                to begin your Adventure!
                <br />
                <img
                    src={require("../../images/Book-Pile.png")}
                    style={styles.bookImg}
                />
                </p>
            </form>
            </div>
        </div>
        );
    }
}

export default Login;