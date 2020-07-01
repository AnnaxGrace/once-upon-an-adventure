import React from "react";
import { Container } from "../components/Grid";

const styles={
    newCard: {
        margin: 20
    },
    option: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10
    },
    input: {
        marginLeft: 35
    }
}

function New() {
    return(
        <Container>
            <h1 className="text-center">Start a New Adventure</h1>

            <div className="row">
                <div className="col-md-5 card" style={styles.newCard} >
                    <div className="card-body text-center">
                        <h5>Select a Character!</h5>
                        <form className="characterSelect special">
                            <div className="row">
                                <div className="col-md-2 text-center">
                                    <img src={require("../images/placeholder.png")} alt="option 1" style={styles.option} />
                                    <br />
                                    <div style={styles.input}>
                                        <input className="text-center" name="option" type="radio" aria-label="option1"></input>
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <img src={require("../images/placeholder.png")} alt="option 2" style={styles.option} />
                                    <br />
                                    <div style={styles.input}>
                                        <input name="option" type="radio" aria-label="option2"></input>
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <img src={require("../images/placeholder.png")} alt="option 3" style={styles.option} />
                                    <br />
                                    <div style={styles.input}>
                                        <input name="option" type="radio" aria-label="option3"></input>
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <img src={require("../images/placeholder.png")} alt="option 4" style={styles.option} />
                                    <br />
                                    <div style={styles.input}>
                                        <input name="option" type="radio" aria-label="option4"></input>
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <img src={require("../images/placeholder.png")} alt="option 5" style={styles.option} />
                                    <br />
                                    <div style={styles.input}>
                                        <input name="option" type="radio" aria-label="option5"></input>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-2">
                                    <img src={require("../images/placeholder.png")} alt="option 6" style={styles.option} />
                                    <br />
                                    <div style={styles.input}>
                                        <input name="option" type="radio" aria-label="option6"></input>
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <img src={require("../images/placeholder.png")} alt="option 7" style={styles.option} />
                                    <br />
                                    <div style={styles.input}>
                                        <input name="option" type="radio" aria-label="option7"></input>
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <img src={require("../images/placeholder.png")} alt="option 8" style={styles.option} />
                                    <br />
                                    <div style={styles.input}>
                                        <input name="option" type="radio" aria-label="option8"></input>
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <img src={require("../images/placeholder.png")} alt="option 9" style={styles.option} />
                                    <br />
                                    <div style={styles.input}>
                                        <input name="option" type="radio" aria-label="option9"></input>
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <img src={require("../images/placeholder.png")} alt="option 10" style={styles.option} />
                                    <br />
                                    <div style={styles.input}>
                                        <input name="option" type="radio" aria-label="option10"></input>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="col-md-6 card" style={styles.newCard} >
                    <div className="card-body text-center">
                        <h5>Create Your Character!</h5>
                        <form className="newGame">
                            Enter Your Character's Name:
                            <input name="character" 
                                type="name" 
                                className="form-control special" 
                                id="character-name" 
                                placeholder="Character Name" 
                            />

                            <br />
                            <button className="btn special" type="submit">
                                Start a New Adventure!
                            </button>

                            <br />
                            (BEWARE: Starting a new Adventure will overwite any existing Adventure!)

                        </form>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default New;