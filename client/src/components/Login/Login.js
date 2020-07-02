import React from "react";

const styles={
    bookImg: {
        width: 200,
        marginTop: 10
    }
}

function Login(props) {

    return (
        <div className="card">
            <div className="card-body">
            <h1>Welcome!</h1>
            <br />
            <form className="login">
                <input
                name="email"
                value={props.email}
                type="email"
                onChange={props.handleInputChange}
                className="form-control special"
                id="email-input"
                placeholder="Email"
                />
                <br />

                <input
                name="password"
                value={props.password}
                type="password"
                onChange={props.handleInputChange}
                className="form-control special"
                id="password-input"
                placeholder="Password"
                />
                <br />

                <button className="btn special" onClick={props.HandleLoginSubmit}>Log In!</button>

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
                    alt="books"                   
                />
                </p>
            </form>
            </div>
        </div>
        );
}

export default Login;