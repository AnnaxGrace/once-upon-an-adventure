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
        poofShow: "hide",
        homeFirst: true,
        typeMinigame: "hide",
        lives: "",
        money: 0,
        livesImg: require("../../images/threeHearts.png"),
        heartClass: "heart"
    }


    componentDidMount() {
        console.log("pre API", userName)
        const id = this.props.match.params.id;
        // this.fetchData(id)
        //this will be a beginning trait in the user, then all the rest will be from story
        API.getUserSprite(id).then(user => {
            console.log(user.data[0].sprite[0])
            const { name } = user.data[0].sprite[0]

            console.log("post API: ", name)
            userName = user.data[0].sprite[0].name
            //     if ( first === "true" ) {
            //        console.log("variable Change: ", userName)

            //        console.log(this.state.home.start.p1)
            //        this.setState({storyString:  userName + " awakens in a strange land. " + userName + " looks around. There's a beautiful field and there are paths that seem to lead in different directions. There seems to be a path that leads to a forest, and one that leads to a cliff. In the distance, " + userName+ " can see a beautiful castle - it looks like it would be hard to take in battle! "})
            //        setTimeout(this.poofAppears, 9000);
            //        // this.scrollToBottom();
            //    }

        }).then(() => {
            API.getUserSprite(id).then(user => {
                console.log(user.data[0].sprite[0])
                const { sprite, homeFirst, lives, money } = user.data[0].sprite[0]

                console.log("../../assets/sprites/", sprite)
                console.log(lives)
                this.setState({ image: sprite })
                this.setState({ homeFirst: true })
                this.setState({ lives: lives })
                this.setState({ money: money })
                console.log(this.state.lives)
                this.heart()

                userName = user.data[0].sprite[0].name
                if (this.state.homeFirst === true) {

                    this.setState({ storyString: userName + " enters a grand hall. At the end of it sits King Bryan. 'Hello citizen', says the king. 'Can you help me? I'm not a good king if I can't type, but no one can teach me!' " })
                    setTimeout(this.ButtonsAppear, 5000);
                }
                if (this.state.homeFirst === false) {
                    console.log("variable Change: ", userName)

                    this.setState({ storyString: userName + " awakens in a strange land. " + userName + " looks around. There's a beautiful field and there are paths that seem to lead in different directions. There seems to be a path that leads to a forest, and one that leads to a cliff. In the distance, " + userName + " can see a beautiful castle - it looks like it would be hard to take in battle! " })
                    setTimeout(this.poofAppears, 9000);
                    // this.scrollToBottom();
                }

            })
        })

    }

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
        console.log("step1")
        this.setState({ kingButtons: "show1" })
    }



    handleBtnClick = event => {
        // Get the data-value of the clicked button
        const btnType = event.target.attributes.getNamedItem("data-value").value;
        console.log(btnType)


        if (btnType === "kingYes") {
            console.log("yes")
            this.setState({ typeMinigame: "show" })
            this.setState({ kingButtons: "hide1" })
            this.updateStory(userName + " says 'You bet I can!' 'Fantastic!' says King Bryan. 'Let's start now!")
        }
        if (btnType === "kingNo") {
            console.log("no")
            this.setState({ kingButtons: "hide1" })
            this.updateStory(userName + " shakes their head and says 'I can't right now'. 'Oh.' Says King Bryan. 'That's unfortunate and awkward. Well, come talk to me if you change your mind!' ")
        }

    };

    updateStory = storyObjectPath => {
        console.log("*****", userName)
        console.log(this.state.storyString)
        this.setState({ storyString: this.state.storyString + " " + storyObjectPath })

    }




    handleDoneButtonClick = () => {
        const id = this.props.match.params.id;
        console.log("you win!")
        // this.setState({ typeMinigame: "hide" })
        window.location.replace("/youwin/"+ id)

        // window location reload to win game page

    }

    handleLoseDoneButtonClick = () => {
        console.log("you lose!")
        this.updateStory(userName + " feels ashamed that they were not able to help the king. The king signs and then says 'Well... come talk to me if you would like to try again.' ")

        //api lose heart
        const id = this.props.match.params.id;
        let newLives = this.state.lives - 1;
        console.log(newLives);
        console.log(id)
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
                <div className="textStore">
                    <div ref="scroll">
                        {this.state.storyString}
                    </div>

                </div>

                < InnerCastleInventory
                    money={this.state.money}
                    livesImg={this.state.livesImg}
                    heartClass={this.state.heartClass}
                />

                <div className="kingBtns">
                    <KingExposition
                        handleBtnClick={this.handleBtnClick}
                        hideState={this.state.kingButtons} />
                </div>

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

