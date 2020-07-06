import React from "react";
import "./TextBox.css";
import API from "../../utils/API";
import { withRouter } from "react-router";
import CanvasSnake from "../CanvasHangman";


let userName = "You";

forest: {
    path1: {
        start: {
            p1: userName +  " enters the forest. There are trees on either side of them, and in the distance, " + userName + " can see a shop! But in the path, inbetween " + userName + " and the shop is a person... ",
            //this would be where a prompt says "do you go back? Or keep walking forward?"
            //If you go forward past a certain point thief runs up to user
            p2: "Thief Anna runs up to " + userName + " and says ",
            p3: "'GIMMIE YOUR MONEY!'", 
            //prompt "okay" gives thief all money, prompt "no way"
            p4: userName + " says 'okay!' ",
            //your money is zero!
            p4: userName + " says 'no way!' ",
            //mini game starts
            //if you win
            p5: "Thief Anna says 'I can't believe you beat me... here's 10 gold, leave me alone!' ",
            //you receive 10 gold
            //Thief Anna goes into her corner, permanent placement
            //if you lose
            p6: "Thief Anna laughs in " + userName + "'s face 'HA. You LOSE. Gimmie your money!' ",
            //you lose 10 gold
            //Thief Anna goes into her corner, permanent placement
        },
        enter: {
            p1: userName + " enters the forest. " + userName + " notices Thief Anna watching them warily. ", 
            //if you go talk to Thief Anna
            p2: "Thief Anna says 'What do you want?' ",
            //prompt "nothing" and "gimmie your money!"
            //nothing
            p3: userName + " decides to leave Thief Anna alone for now. ",
            //choose gimmie your money
            p4: userName + " says 'Gimmie your money!' Thief Anna looks shocked for a minute, then says, 'Bring it on!' "
            
        },
        //if you win
        p1: "Thief Anna says 'I can't believe you beat me... here's 10 gold, leave me alone!' ",
        //you receive 10 gold
        p2: "Thief Anna laughs in " + userName + "'s face 'HA. You LOSE. Gimmie your money!' ",
        //you lose 10 gold
 
class ForestText extends React.Component {


    state = {
        storyString: "",

        buttons: "hide",
        buttons2: "hide",
        minigame: "hide",
        homeFirst: true,
        firstTalk: true,
        firstTalkOrc: true,
        permit: false,
        
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
      
        }).then(()=>{
            API.getUserSprite(id).then(user => {
                console.log(user.data[0].sprite[0])
                const { sprite, homeFirst } = user.data[0].sprite[0]
           
                console.log("../../assets/sprites/", sprite)
                console.log(homeFirst)
                this.setState({ image: sprite})
                this.setState({ homeFirst: homeFirst})

              
               if ( homeFirst === true ) {
                
                    this.setState({storyString:  userName +  " enters the forest. There are trees on either side of them, and in the distance, " + userName + " can see a shop! But in the path, inbetween " + userName + " and the shop is a person... "})
                    homeFirst = false
                
                }
                if ( homeFirst === false) {
                    this.setState({storyString:  userName + " enters the forest. " + userName + " notices Thief Anna watching them warily. "})
                }
               
            })
        })
        
    }
      
   
    thiefTalking = () => {
        if (this.state.firstTalk === true) {
            this.updateStory("Thief Anna grins and says 'GIMMIE YOUR MONEY!' ", )
            this.setState({buttons: "show"})
            this.setState({ firstTalk: false })
        }
        if (this.state.firstTalk === false) {
            this.updateStory("Thief Anna says 'What do you want?' ")
            this.setState({ buttons2: "show"})
        }
    }


    handleBtnClick = event => {
        // Get the data-value of the clicked button
        const btnType = event.target.attributes.getNamedItem("data-value").value;
        
    
        if (btnType === "yes") {
            console.log("yes")
            this.updateStory(userName + " says 'okay!' ")
            // money = 0
        } 
        if (btnType === "no") {
            console.log("no")
            this.updateStory(userName + " says 'no way!' ")
            this.setState({ minigame: "show"})
        }
        if (btnType === "money") {
            this.updateStory(userName + " says 'Gimmie your money!' Thief Anna looks shocked for a minute, then says, 'Bring it on!' ")
            this.setState({ minigame: "show"})

        }
        if (btnType === "nothing") {
            this.updateStory(userName + " decides to leave Thief Anna alone for now. ")
        }
        
      };


    updateStory = storyObjectPath => {
        this.setState({storyString: this.state.storyString + " " + storyObjectPath })
       
    }

    gameDone = () => {
        if (CanvasHangman.state.win === "You win") {
            this.updateStory("Thief Anna says 'I can't believe you beat me... here's 10 gold, leave me alone!' ")
            //api gain 10 gold
        }
        if (CanvasHangman.state.win === "You lose") {
            this.updateStory("Thief Anna laughs in " + userName + "'s face 'HA. You LOSE. Gimmie your money!' ")
            //api lose 10 gold
        }
    }




    render () {
    return(
            <div>
                <div className="textBG">
                    <div ref = "scroll">
                        {this.state.storyString}
                    </div>
                    
                </div>

                <div className = {this.state.minigame} id="hangman">
    
                    <CanvasHangman />
                    {/* needs to tell me how many points I got */}
                </div>

                {/* Need to add buttons */}

                
            </div>
        )
    }

}

export default withRouter(ForestText); 