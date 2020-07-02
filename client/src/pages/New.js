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
        marginLeft: 40
    }
}

const characters1 = [
    {
        id: 1,
        img: require("../images/option1.png")
    },
    {
        id: 2,
        img: require("../images/option2.png")
    },
    {
        id: 3,
        img: require("../images/option3.png")
    },
    {
        id: 4,
        img: require("../images/option4.png")
    },
    {
        id: 5,
        img: require("../images/option5.png")
    }
]

const characters2 = [
    {
        id: 6,
        img: require("../images/option6.png")
    },
    {
        id: 7,
        img: require("../images/option7.png")
    },
    {
        id: 8,
        img: require("../images/option8.png")
    },
    {
        id: 9,
        img: require("../images/option9.png")
    },
    {
        id: 10,
        img: require("../images/option10.png")
    }
]

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
                                {characters1.map(item => (
                                    <div className="col-md-2 text-center" key={item.id}>
                                        <img src={item.img} alt={item.id} style={styles.option} />
                                        <br />
                                        <div style={styles.input}>
                                            <input name="option" type="radio" aria-label={item.id}></input>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="row">
                                {characters2.map(item => (
                                    <div className="col-md-2 text-center" key={item.id}>
                                        <img src={item.img} alt={item.id} style={styles.option} />
                                        <br />
                                        <div style={styles.input}>
                                            <input name="option" type="radio" aria-label={item.id}></input>
                                        </div>
                                    </div>
                                ))}
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