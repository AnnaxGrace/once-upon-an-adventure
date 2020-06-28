import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner/Banner"
import SignUpModal from "../components/Modals/SignUpModal"
import About from "../components/About/About"
import { Container } from "../components/Grid";
import Login from "../components/Login/Login"

function Home() {
    return (
        <Container>
            <div className="row">
                <div className="col-md-7 text-center">
                    <Banner />
                </div>
                <div className="col-md-5 text-center">
                    <Login />
                </div>
                <About />
                <SignUpModal />
            </div>
        </Container>
    )
}

export default Home;