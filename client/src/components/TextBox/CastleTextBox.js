import React from "react";
import "./TextBox.css";
import API from "../../utils/API";
import { withRouter } from "react-router";
import CanvasType from "../CanvasType/index"
import KingExposition from "../Exposition/kingExposition"


let userName = "You";

 
class StoreTextBox extends React.Component {


    state = {
        storyString: "",
        image: "placeholder.gif",
        kingButtons: "hide1",
        poofShow: "hide",
        homeFirst: true,
        typeMinigame: "hide",
        lives: "",
        money: 0,
        home: {
            
        castle: {
            
            path2: {
                start: {
                    start: {
                        p1: userName + " enters a grand hall. At the end of it sits the king. ",
                        //dialogue box
                        p2: "'Hello citizen', says the king. 'Can you help me? I'm not a good king if I can't type, but no one can teach me!' ",
                        //prompt with yes or no
                        //if no
                        p3: userName + " shakes their head and says 'I can't right now'. 'Oh.' Says the king. 'That's unfortunate and awkward. Well, come talk to me if you change your mind!' ",
                        //from then on you can approach the king to take the challenge 
                        //if yes
                        p4: userName + " says 'You bet I can!' 'Fantastic!' says the king. 'Let's start now!"
                        //typing mini-game starts
                    },
                    enter: {
                        //walk up to king
                        p1: "'Hello again!' Says the king. 'Have you come to help me?' ",
                        //prompt yes or no
                        //if no
                        p2: userName + " shakes their head and says 'I can't right now'. 'Oh.' Says the king. 'I feel like you're playing games with my heart. Well, come talk to me if you change your mind!' ",
                        //if yes
                        p3: userName+ " gives the king a big thumbs up and says 'I have!' The king smiles at " + userName + " and says 'Then let's get started!' ",
                        //mini game starts
                    },
                    //if lose 
                    p1: userName + " feels ashamed that they were not able to help the king. The king signs and then says 'Well... come talk to me if you would like to try again.' ",
                    //if win
                    p2: userName + " has helped the king. " + userName + " feels a big sense of accomplishment, and wonders if they should revisit any old friends... "
                    
                }
            }
        },
       

            
        }
    }

    //we could also do if storyString === ""
    //so this.state.storyString === ""
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
           
        }).then(()=>{
            API.getUserSprite(id).then(user => {
                console.log(user.data[0].sprite[0])
                const { sprite, homeFirst, lives } = user.data[0].sprite[0]
           
                console.log("../../assets/sprites/", sprite)
                console.log(lives)
                this.setState({ image: sprite})
                this.setState({ homeFirst: true})
                this.setState({ lives: lives })

                userName = user.data[0].sprite[0].name
                if ( this.state.homeFirst === true ) {
                   
                   this.setState({storyString: userName + " enters a grand hall. At the end of it sits King Bryan. 'Hello citizen', says the king. 'Can you help me? I'm not a good king if I can't type, but no one can teach me!' "})
                   setTimeout(this.ButtonsAppear, 5000);
               }
               if ( this.state.homeFirst === false ) {
                console.log("variable Change: ", userName)
                
                this.setState({storyString:  userName + " awakens in a strange land. " + userName + " looks around. There's a beautiful field and there are paths that seem to lead in different directions. There seems to be a path that leads to a forest, and one that leads to a cliff. In the distance, " + userName+ " can see a beautiful castle - it looks like it would be hard to take in battle! "})
                setTimeout(this.poofAppears, 9000);
                // this.scrollToBottom();
            }
               
            })
        })
        
    }
      

    ButtonsAppear = () => {
        console.log("step1")
        this.setState({kingButtons: "show1"})
    }

    

    handleBtnClick = event => {
        // Get the data-value of the clicked button
        const btnType = event.target.attributes.getNamedItem("data-value").value;
        console.log(btnType)
        
    
        if (btnType === "kingYes") {
            console.log("yes")
            this.setState({typeMinigame: "show"})
            this.setState({kingButtons: "hide1"})
          this.updateStory(userName + " says 'You bet I can!' 'Fantastic!' says King Bryan. 'Let's start now!")
        } 
        if (btnType === "kingNo") {
            console.log("no")
            this.setState({kingButtons: "hide1"})
          this.updateStory(userName + " shakes their head and says 'I can't right now'. 'Oh.' Says King Bryan. 'That's unfortunate and awkward. Well, come talk to me if you change your mind!' ")
        }
        
      };

    updateStory = storyObjectPath => {
        console.log("*****",userName)
        console.log(this.state.storyString)
        this.setState({storyString: this.state.storyString + " " + storyObjectPath })
       
        // let endScroll = this.refs.scroll
        //  endScroll.scrollTop = this.endScroll.scrollHeight - this.endScroll.clientHeight;
        // API.UpdateUserStory(this.state.id, this.storyString). then(res => console.log("story updated")).catch(err => console.log(err));
    }

    // createStory = () => {
    //     API.createStory({
    //         text: this.state.storyString, 
    //         UserId: this.state.Id
    //     }).then(res => console.log("story created")).catch(err => console.log(err));
    // }

    
    handleDoneButtonClick = () =>{
        console.log("you win!")
        this.setState({typeMinigame: "hide"})
        
        // window location reload to win game page
    }

    handleLoseDoneButtonClick = () => {
        this.updateStory(userName + " feels ashamed that they were not able to help the king. The king signs and then says 'Well... come talk to me if you would like to try again.' ")

        //api lose heart
    }
   

    render () {
    return(
            <div>
                <div className="textStore">
                    <div ref = "scroll">
                        {this.state.storyString}
                    </div>
                    
                </div>

                <div className="kingBtns">
                    <KingExposition 
                    handleBtnClick={this.handleBtnClick}
                    hideState={this.state.kingButtons} />
                </div>

                <div className={this.state.typeMinigame} id="type" >
                    <CanvasType
                    handleDoneButtonClick={this.handleDoneButtonClick}
                    />
                </div>
                <div >
                    {/* <img className="avatar-image" src={require("../../assets/sprites/1-" + this.state.image)} /> */}
                </div>
            </div>
        )
    }

}

export default withRouter(StoreTextBox);

