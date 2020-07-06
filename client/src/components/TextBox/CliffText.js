import React from "react";
import "./TextBox.css";
import API from "../../utils/API";
import { withRouter } from "react-router";
import CanvasSnake from "../CanvasSnake";


let userName = "You";
 
class CliffText extends React.Component {


    state = {
        storyString: "",

        buttons: "hide",
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
                
                    this.setState({storyString:  userName + " emerges from the path and looks around. There is a cliff that looks out over mountains. At the edge of the cliff is a magical looking person. " + userName + " wonders if they should go up and talk to them... "})
                
                }
                if ( homeFirst === false) {
                    this.setState({storyString: userName + " emerges from the path and looks out at the mountains and Wizard Jace. "})
                }
               
            })
        })
        
    }
      
   
    jaceTalking = () => {
        if (this.state.firstTalk === true) {
            this.updateStory("Wizard Jace says 'Hello " + userName + "a little birdy told me you were trying to help our kingdom! I can give you money if you play my magical math game!' ")
            this.setState({buttons: "show"})
            this.setState({ firstTalk: false })
        }
        if (this.state.firstTalk === false) {
            this.updateStory("'Hi " + userName + " did you want to play my math game?' ")
            this.setState({ buttons: "show"})
        }
    }


    handleBtnClick = event => {
        // Get the data-value of the clicked button
        const btnType = event.target.attributes.getNamedItem("data-value").value;
        
    
        if (btnType === "yes") {
            console.log("yes")
            this.updateStory(userName + " says 'Math? Money? You bet!' ")
            this.setState({ minigame: "show"})
        } 
        if (btnType === "no") {
            console.log("no")
          this.updateStory(userName + " says, 'Not now, thanks. Maybe later!")
        }
        
      };


    updateStory = storyObjectPath => {
        this.setState({storyString: this.state.storyString + " " + storyObjectPath })
       
    }

    gameDone = () => {
        //give money
        this.updateStory("Wizard Jace says 'Good job! You got " + CanvasSnake.points + " gold. Let me know if you want to play again!' ")
    }




    render () {
    return(
            <div>
                <div className="textBG">
                    <div ref = "scroll">
                        {this.state.storyString}
                    </div>
                    
                </div>

                <div className = {this.state.minigame} id="snake">
    
                    <CanvasSnake />
                    {/* needs to tell me how many points I got */}
                </div>

                {/* Need to add buttons */}

                
            </div>
        )
    }

}

export default withRouter(CliffText); 
