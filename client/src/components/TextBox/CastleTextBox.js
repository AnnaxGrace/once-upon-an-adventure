import React from "react";
import "./TextBox.css";
import API from "../../utils/API";
import { withRouter } from "react-router";
import CanvasType from "../CanvasType/index"
import KingExposition from "../Exposition/kingExposition"
import InnerCastleInventory from "../Inventory/innerCastleInventory"


let userName = "You";

//The text box for the inner castle, the throne room
class CastleTextBox extends React.Component {


    state = {
        storyString: "",
        image: "placeholder.gif",
        kingButtons: "hide1",
        typeMinigame: "hide",
        lives: "",
        money: 0,
        livesImg: require("../../images/threeHearts.png"),
        heartClass: "heart"
    }


    //when the page loads
    componentDidMount() {

        // get the id from the parameters
        const id = this.props.match.params.id;
        
        //set our username for our story
        API.getUserSprite(id).then(user => {
            const { name } = user.data[0].sprite[0]
            userName = name

        }).then(() => {
            //grab our image for our back of the head image, and our lives and money so they can render on the page
            API.getUserSprite(id).then(user => {
                const { sprite, lives, money } = user.data[0].sprite[0]

                this.setState({ image: sprite })
                this.setState({ lives: lives })
                this.setState({ money: money })
                this.heart()

                userName = user.data[0].sprite[0].name
                this.setState({ storyString: userName + " enters a grand hall. At the end of it sits King Bryan. 'Hello citizen', says the king. 'Can you help me? I'm not a good king if I can't type, but no one can teach me!' " })
                
                // has the buttons on an interval so that the story can be read
                setTimeout(this.ButtonsAppear, 5000);
            })
        })

    }

    //  Runs function to set image and class state depending on lives in our database 
    heart = () => {
        if (this.state.lives === 3) {
            this.setState({ livesImg: require("../../images/threeHearts.png") })
            this.setState({ heartClass: "heart-three"})
        } else if (this.state.lives === 2) {
            this.setState({ livesImg: require("../../images/twoHearts.png") })
            this.setState({ heartClass: "heart-two"})
        } else if (this.state.lives === 1) {
            this.setState({ livesImg: require("../../images/oneHeart.png") })
            this.setState({ heartClass: "heart-one"})
        }
    }


    ButtonsAppear = () => {
        this.setState({ kingButtons: "show1" })
    }


    //when the yes or not buttons are clicked
    handleBtnClick = event => {

        // Get the data-value of the clicked button
        const btnType = event.target.attributes.getNamedItem("data-value").value;

        if (btnType === "kingYes") {
            this.setState({ typeMinigame: "show" })
            this.setState({ kingButtons: "hide1" })
            this.updateStory(userName + " says 'You bet I can!' 'Fantastic!' says King Bryan. 'Let's start now!")
        }
        if (btnType === "kingNo") {
            this.setState({ kingButtons: "hide1" })
            this.updateStory(userName + " shakes their head and says 'I can't right now'. 'Oh.' Says King Bryan. 'That's unfortunate and awkward. Well, come talk to me if you change your mind!' ")
        }

    };

    //function to set the state with the string given in the parameter
    updateStory = storyObjectPath => {
        
        this.setState({ storyString: this.state.storyString + " " + storyObjectPath })

    }



    //Done if you win button
    handleDoneButtonClick = () => {
        //grabs our id and redirects to the win page
        const id = this.props.match.params.id;
        window.location.replace("/youwin/"+ id)
    }

    //Done if you lose button
    handleLoseDoneButtonClick = () => {

        this.updateStory(userName + " feels ashamed that they were not able to help the king. The king signs and then says 'Well... come talk to me if you would like to try again.' ")
        const id = this.props.match.params.id;
        let newLives = this.state.lives - 1;
        
        //Updates our mongo db so we can keep track of this life loss globally
        API.UpdateSpriteLives(newLives, id).then(() => {
            console.log("updated newLives", newLives);
            this.setState({ lives: newLives })
            if (this.state.lives === 0) {
                window.location.replace("/youlose/" + id)
            } else {
                this.setState({ typeMinigame: "hide" })
                this.heart()
            }
        });
    }


    render() {
        return (
            <div>
                {/* Our textbox for this page */}
                <div className="textStore">
                    <div ref="scroll">
                        {this.state.storyString}
                    </div>

                </div>

                {/* Pass our props to our inventory so they change in page */}
                < InnerCastleInventory
                    money={this.state.money}
                    livesImg={this.state.livesImg}
                    heartClass={this.state.heartClass}
                />

                {/* Our buttons that we pass our btn click to */}
                <div className="kingBtns">
                    <KingExposition
                        handleBtnClick={this.handleBtnClick}
                        hideState={this.state.kingButtons} />
                </div>

                {/* Our type minigame, and we pass on both the lose and win functions */}
                <div className={this.state.typeMinigame} id="type" >
                    <CanvasType
                        handleDoneButtonClick={this.handleDoneButtonClick}
                        handleLoseDoneButtonClick={this.handleLoseDoneButtonClick}
                    />
                </div>
                
            </div>
        )
    }

}

export default withRouter(CastleTextBox);

