import React from "react";
import { Container } from "../components/Grid";
import API from "../utils/API"

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
        img: require("../images/option1.png"),
        path: "../features/player/erik - fourLine.png"
    },
    {
        id: 2,
        img: require("../images/option2.png"),
        path: ""
    },
    {
        id: 3,
        img: require("../images/option3.png"),
        path: ""
    },
    {
        id: 4,
        img: require("../images/option4.png"),
        path: ""
    },
    {
        id: 5,
        img: require("../images/option5.png"),
        path: ""
    }
]

const characters2 = [
    {
        id: 6,
        img: require("../images/option6.png"),
        path: ""
    },
    {
        id: 7,
        img: require("../images/option7.png"),
        path: ""
    },
    {
        id: 8,
        img: require("../images/option8.png"),
        path: ""
    },
    {
        id: 9,
        img: require("../images/option9.png"),
        path: ""
    },
    {
        id: 10,
        img: require("../images/option10.png"),
        path: ""
    }
]

function New() {

    const handleNewAdventureClick = (event) => {
        event.preventDefault()
        //create the post data structure
        let postObj = {
            sprite: "",
            name: "",
        }
        //get the data to populate this object
        const spriteData = document.querySelector(".characterSelect.special img").getAttribute("dataSprite");
        console.log("******spriteData",spriteData);
        postObj.sprite = spriteData;
        const nameData = document.querySelector("#character-name").value;
        console.log("******spriteData",nameData);
        postObj.name = nameData;
        //post to route
        API.saveSprite(postObj).then((res) => { 
            console.log("save sprite res:", res);
            window.location.replace("/continue  ")  
        });
    }

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
                                        <img src={item.img} alt={item.id} dataSprite={item.path} style={styles.option}  />
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
                            <button className="btn special" onClick={handleNewAdventureClick}>
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