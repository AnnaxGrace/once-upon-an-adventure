import React from "react";
import { Container } from "../components/Grid";
import { Link, useParams } from "react-router-dom";
import UserSplash from "../components/UserSplash/UserSplash";
import MusicBtn from "../components/SoundBtns/MusicBtn"

const styles={
    bookImg: {
        width: 200,
        marginTop: 10
    }
}

function User() {
    const handleClick = event => console.log(event);
    let { id } = useParams();
    // console.log(id)
    
    return(
        <Container>
                <h1 className="text-center">Welcome to Your Realm</h1>

                <div className="row">
                    <div className="col-md-6">
                        <UserSplash />
                    </div>

                    <div className="col-md-6">
                        <div className="card text-center">
                            <div className="card-body special">
                                <h3>Your Menu</h3>
                                <img src={require("../images/Book-Pile.png")} alt="book pile" style={styles.bookImg} />

                                <p>
                                    Once Upon an Adventure is an interactive 
                                    learning game. From this menu you can continue 
                                    a previous Adventure (if you have one saved), 
                                    or start a new Adventure. Enjoy your time exploring 
                                    the word we've created for you!
                                </p>

                                <Link to={"/continue/" + id}>
                                    <button className="btn">
                                        Continue your Adventure!
                                    </button>
                                </Link>
                                <br />

                                <Link to={"/new/" + id}>
                                    <button className="btn" onClick={handleClick}>
                                        Start a New Adventure!
                                    </button>
                                </Link>
                                <br />

                                <Link to="/">
                                    <button className="btn">
                                        Log Out
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>
    )
}

export default User;