import React from "react";
import { Container } from "../components/Grid";
import { Link } from "react-router-dom";

function User() {
    return(
        <Container>
            <div className="text-center">
                <h1>Welcome to Your Realm</h1>

                <p>
                    (maybe insert random sprite here!)
                </p>

                <p>
                    <Link to="/continue">
                        <button className="btn">
                            Continue your Adventure!
                        </button>
                    </Link>
                    <br />
                    <Link to="/new">
                        <button className="btn">
                            Start a New Adventure!
                        </button>
                    </Link>
                    <br />
                    <Link to="/">
                        <button className="btn">
                            Log Out
                        </button>
                    </Link>
                </p>
            </div>
        </Container>
    )
}

export default User;