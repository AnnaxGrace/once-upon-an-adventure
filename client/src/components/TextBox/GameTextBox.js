import React from "react";
import "./TextBox.css";
// import { storyObject } from "../StoryObject";
import API from "../../utils/API";
import Exposition from "../Exposition";
import { Container } from "../Grid";
import { withRouter } from "react-router";
// import { guardTalk } from "../../features/sound";


let first = "true";
let userName = "You";
// const { id } = useParams();
const storyObj = {
    home: {
        start: {
            p1: userName + " poofs into a strange land. " + userName + " looks around. There's a beautiful field and there are paths that seem to lead in different directions. To " + userName + "'s right there seems to be a path that leads into a forest - there are a bunch of trees! There's another path to the left... but " + userName + " can't see where it leads. Looking to the right, " + userName+ " can see a beautiful castle - it looks like it would be hard to take in battle! ",
            //beautiful woman code appearing 
            p2: "As " + userName + " looks around suddenly - POOF. ",
            //dialouge window of beautiful lady pops up for below dialog
            p3: " A strange but handsome man appears! 'Hello' says Wilson. 'I am here to help. And in return, I hope you can help us. ",
            //dialouge window of beautiful lady pops up for below dialog
            p4: " There is something wrong with the King. He lives in the castle. I do not know how this plane of existence works, so here's 10 gold. I hope that's enough!' ",
            //beautiful woman poofs away
            p5: "And then, in another POOF, he was gone! " + userName+ " looked around again and thought about what to do... ", 
        }
}
}
 

class GameTextBox extends React.Component {


    state = {
        storyString: "",
        //this will be the user's Id
        image: "wilson.gif",
        //will be character name
        name: "Misterman",
        poofShow: "hide",
        homeFirst: true,
        wilsonShow: "hide",
        home: {
            start: {
                p1: userName + " poofs into a strange land. " + userName + " looks around. There's a beautiful field and there are paths that seem to lead in different directions. To " + userName + "'s right there seems to be a path that leads into a forest - there are a bunch of trees! There's another path to the left... but " + userName + " can't see where it leads. Far in the distance, " + userName+ " can see a beautiful castle - it looks like it would be hard to take in battle! ",
                //beautiful woman code appearing 
                p2: "As " + userName + " looks around suddenly - POOF. A strange but handsome man appears! ",
                //dialouge window of beautiful lady pops up for below dialog
                p3: " 'Hello' says Wilson. 'I am here to help. And in return, I hope you can help us. ",
                //dialouge window of beautiful lady pops up for below dialog
                p4: " There is something wrong with the King. He lives in the castle. I do not know how this plane of existence works, so here's 10 gold. I hope that's enough!' ",
                //beautiful woman poofs away
                p5: "And then, in another POOF, he was gone! " + userName+ " looked around again and thought about what to do... ", 
            },
            enter: {
                p1: userName + " enters where they first came into the land. " + userName + " looks around and decides what to do. "
            }
            
        },
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
                

                
            },
            path2: {
                p1: userName + " enters the shop and looks around. It's a well-kept shop, with a lot of good items. Shopkeeper Erik looks at " + userName + " inquisitively. 'What can I do for you?', he asks. ",
                //popup with "buy something?"
                p2: userName + " looks around and chooses to buy a " + userName + ". ",
                //popup with how much gold you've lost

                //If leave without buying something - we don't need it too much logic
                p3: userName + " decides to leave the shop without buying anything. "
            }
        },
        castle: {
            path1: {
                start: {
                    p1: userName + " follows the path to the castle. Up close it is even more marvelous. " + userName + " notices a guard in front of the castle, glittering in the sunlight in their armor. " + userName + " also thinks they hear a person very faintly saying '...find me...I'll give you hearts...' ",
                    p2: userName + " decides to talk to the guard. 'Hello.' says Guard Tony. 'Do you have a permit to enter Castle Richfield?' ",
                    //prompt yes or no
                    //if yes, but don't actually have a permit
                    p3: userName + " says 'Sure! Sure I have a permit!' and tries to smile as innocently as possible. 'LIES? LYING to ME?' Guard Tony says. He is clearly very upset. 'You clearly don't have a permit. Come back when you do!' ",
                    //if yes and has permit
                    p4: userName + " shows Guard Tony their permit, and Guard Tony says 'Enter citizen!', and moves aside so that " + userName+ " can choose to enter the castle. ",
                    //guard moves out of the way, this is a new permanent position
                },
                enter: {
                    p1: userName + " walks up to the castle once again. ",
                    //speaks to tony, if moved
                    p2: userName + " decides to speak to Guard Tony. Guard Tony says 'Enjoy your visit!' ",
                    //speaks to tony, if not moved, if permit
                    p3: userName + " decides to speak to Guard Tony. Guard Tony smiles and says 'It looks like you have a permit!', and moves aside so that" + userName + " can choose to enter the castle. ",
                    //speaks to tony, if not moved, if no permit
                    p4: userName + " decides to speak to Guard Tony. Guard Tony frowns and shakes his head. 'Still no permit?', he says. 'I would try the shopkeeper. He usually has some. His store is in the forest' "
                }
            },
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
        cliff: {
            path1: {
                start: {
                    p1: userName + " emerges from the path and looks around. There is a cliff that looks out of a vast ocean. At the edge of the cliff is a magical looking person. " + userName + " wonders if they should go up and talk to them... ",
                    p2: "Wizard Jace says 'Hello " + userName + "a little birdy told me you were trying to help our kingdom! I can give you money if you play my magical math game!' ",
                    //Play game? 
                    //if yes
                    p3: userName + " says 'Math? Money? You bet!' ",
                    //mini game starts
                    //if no
                    p3: userName + " says, 'Not now, thanks. Maybe later!"
                },
                enter: {
                    p1: userName + " emerges from the path and looks out at the ocean and Wizard Jace. ",
                    p2: "'Hi " + userName + " did you want to play my math game?' ",
                    //Play game? If yes 
                    //if yes
                    p3: userName + " says 'Math? Money? You bet!' ",
                    //mini game starts
                    //if no
                    p3: userName + " says, 'Not now, thanks. Maybe later!"
                },
                p3: "Wizard Jace says 'Good job! Let me know if you want to play again!' "


            }
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
                const { sprite, homeFirst } = user.data[0].sprite[0]
           
                console.log("../../assets/sprites/", sprite)
                console.log(homeFirst)
                this.setState({ image: sprite})
                this.setState({ homeFirst: homeFirst})

                // userName = user.data[0].sprite[0].name
            //     if ( homeFirst === true ) {
            //        console.log("variable Change: ", userName)
                   
            //     //    console.log(this.state.home.start.p1)
            //        this.setState({storyString: storyObj.home.start.p1})
            //        setTimeout(this.poofAppears, 9000);
            //        // this.scrollToBottom();
            //    }
               if ( homeFirst === true ) {
                console.log("variable Change: ", userName)
                
                this.setState({storyString:  userName + " follows the path to the castle. Up close it is even more marvelous. " + userName + " notices a guard in front of the castle, glittering in the sunlight in their armor. " + userName + " also thinks they hear a person very faintly saying '...find me...I'll give you hearts...' "})
                // setTimeout(this.poofAppears, 9000);
                // this.scrollToBottom();
            }
               
            })
        })
        
    }
      
   
    guardTalking = () => {
        this.updateStory(userName + " decides to talk to the guard. 'Hello.' says Guard Tony. 'Do you have a permit to enter Castle Richfield?' ",)
    }

    wilsonTalks = () => {
        this.updateStory(storyObj.home.start.p4)
        //adds gold
        setTimeout(this.wilsonGoes, 6000)
    }

    wilsonGoes = () => {
        console.log("step 3")
        // this.updateStory(this.state.home.start.p4)

        this.setState({wilsonShow: "hide"})
        this.setState({poofShow: "show"})
        setTimeout(this.poofGoes, 3000)
    }

    poofGoes = () => {
        console.log("step 4")
        this.setState({poofShow: "hide"})
        this.updateStory("And then, in another POOF, he was gone! " + userName+ " looked around again and thought about what to do... ")
        ///This needs to be update boolean value in API
    }

    handleBtnClick = event => {
        // Get the data-value of the clicked button
        const btnType = event.target.attributes.getNamedItem("data-value").value;
        
    
        if (btnType === "yes") {
            console.log("yes")
            // let storyContainer = this.refs.scroll
            // storyContainer.scrollTop = storyContainer.scrollHeight - storyContainer.clientHeight;
          this.updateStory(storyObj.home.start.p2)
        } 
        if (btnType === "no") {
            console.log("no")
          this.updateStory(storyObj.home.start.p3)
        }
        
      };

    updateStory = storyObjectPath => {
        
        this.setState({storyString: this.state.storyString + " " + storyObjectPath })
       
        // let endScroll = this.refs.scroll
        //  endScroll.scrollTop = this.endScroll.scrollHeight - this.endScroll.clientHeight;
        // API.UpdateUserStory(this.state.id, this.storyString). then(res => console.log("story updated")).catch(err => console.log(err));
    }

    createStory = () => {
        API.createStory({
            text: this.state.storyString, 
            UserId: this.state.Id
        }).then(res => console.log("story created")).catch(err => console.log(err));
    }

    personAppears = () => {
        // animationshows
        this.updateStory(storyObj.home.start.p2)
    }

    // let endScroll = this.refs.scroll
    // endScroll.scrollTop = this.messagesEnd.scrollHeight - this.messagesEnd.clientHeight;
    


    render () {
    return(
            <div>
                <div className="textBG">
                    <div ref = "scroll">
                        {this.state.storyString}
                    </div>
                    
                </div>
                
                {/* <Exposition handleBtnClick={this.handleBtnClick} /> */}

                {/* <div className= {this.state.poofShow}>
                    <img className ="poof-image" src={require("../../images/prettypoof.gif")} />
                </div>

                <div className={this.state.wilsonShow}>
                    <img className="appear-image" src={require("../../assets/sprites/wilson.gif")} />
                </div>
                <div >
                    <img className="avatar-image" src={require("../../assets/sprites/" + this.state.image)} />
                </div> */}
            </div>
        )
    }

}

export default withRouter(GameTextBox); 
// withRouter(GameTextBox);