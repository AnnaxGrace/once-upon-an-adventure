import React, { useState , useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../components/Grid";
import API from "../utils/API";

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
        path: "option1-4row.png"
    },
    {
        id: 2,
        img: require("../images/option2.png"),
        path: "option2-4row.png"
    },
    {
        id: 3,
        img: require("../images/option3.png"),
        path: "option3-4row.png"
    },
    {
        id: 4,
        img: require("../images/option4.png"),
        path: "option4-4row.png"
    },
    {
        id: 5,
        img: require("../images/option5.png"),
        path: "option5-4row.png"
    }
]

const characters2 = [
    {
        id: 6,
        img: require("../images/option6.png"),
        path: "option6-4row.png"
    },
    {
        id: 7,
        img: require("../images/option7.png"),
        path: "option7-4row.png"
    },
    {
        id: 8,
        img: require("../images/option8.png"),
        path: "option8-4row.png"
    },
    {
        id: 9,
        img: require("../images/option9.png"),
        path: "option9-4row.png"
    },
    {
        id: 10,
        img: require("../images/option10.png"),
        path: "option10-4row.png"
    }
]

function New() {
    const { id } = useParams();
   
    const [char, setChar] = useState(null)

    useEffect(()=>console.log(char), [char])

    const handleNewAdventureClick = (event) => {
        event.preventDefault()
        //create the post data structure
        let postObj = {
            sprite: "",
            name: "",
        };

        let itemsObj = {
            lives: "",
            itemName: "",
            money: 0
        }
        
        postObj.sprite = char;
        const nameData = document.querySelector("#character-name").value;
        console.log("******spriteData",nameData);
        postObj.name = nameData;
        //post to route
        API.saveSprite(postObj, id).then((res) => { 
            console.log("save sprite res:", res);
            window.location.replace("/continue/" + id)  
        })
        // .then(() => {
           
        //     API.saveInventory({})
        //     .then((res) => { 
        //         console.log("save inventory res:", res);
        //         // window.location.replace("/continue/" + id)  
        //     })
        // });
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
                                {characters1.map(item => {
                                    return (
                                    <div className="col-md-2 text-center" key={item.id}>
                                        <img className="img-path" src={item.img} alt={item.id} data-path={item.path} style={styles.option}  />
                                        <br />
                                        <div style={styles.input}>
                                            <input name="option" onChange={()=> setChar(item.path)} className="charRadio" type="radio" aria-label={item.id}></input>
                                        </div>
                                    </div>
                                )})}
                            </div>

                            <div className="row">
                                {characters2.map(item => (
                                    <div className="col-md-2 text-center" key={item.id}>
                                        <img src={item.img} alt={item.id} data-path={item.path} style={styles.option} />
                                        <br />
                                        <div style={styles.input}>
                                            <input name="option" onChange={()=> setChar(item.path)} className="charRadio" type="radio" aria-label={item.id}></input>
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