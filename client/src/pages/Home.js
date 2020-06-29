import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import SignUpModal from "../components/Modals/SignUpModal";
import About from "../components/About/About";
import { Container } from "../components/Grid";

const styles = {
  bookImg: {
    width: 200,
    marginTop: 10,
  },
};

function Home() {
  return (
    <Container>
      <div className="row">
        <div className="col-md-7 text-center">
          <Banner />
        </div>
        <div className="col-md-5 card text-center">
          <div className="card-body">
            <h1>Welcome!</h1>
            <br />
            <form className="login">
              <input
                type="email"
                className="form-control special"
                id="email-input"
                placeholder="Email"
              />
              <br />

              <input
                type="password"
                className="form-control special"
                id="password-input"
                placeholder="Password"
              />
              <br />

              <button className="btn special">Log In!</button>

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
                  src={require("../images/Book-Pile.png")}
                  style={styles.bookImg}
                />
              </p>
            </form>
          </div>
        </div>
        <About />
        <SignUpModal />
      </div>
    </Container>
  );
}

export default Home;
