import React, { useState ,useEffect } from "react";
import "./TextBox.css";
// import { storyObject } from "../StoryObject";
import API from "../../utils/API";
import Exposition from "../Exposition";
import { Container } from "../Grid";
import { useParams } from "react-router-dom";
import { observeImpassable } from "../../features/player/movement"
// import GuardTalking from "../../utils/ingameFunctions";



let first = "true";
let userName;
 
function GameTextBox() {


    const { id } = useParams();

    // const [story, setStory] = useState(0);
    const [storyString, setStoryString] = useState("");
    // const [name, setName] = useState("");
    const [homeFirst, setFirst] = useState(true);
    const [firstTalk, setTalk] = useState(true);
    const [firstTalkOrc, setOrc] = useState(true);
    const [permit, setPermit] = useState(false);
    const [buttons, setButtons] = useState("hide");
    

   

    
   
    useEffect( () => {


        API.getUserSprite(id).then(user => {
            console.log(user.data[0].sprite[0])
            const { name, homeFirst } = user.data[0].sprite[0]
            userName = user.data[0].sprite[0].name
            console.log(name)
            // setName(name)
            setFirst(homeFirst)
            if ( homeFirst === true ) {
                setStoryString(userName + " follows the path to the castle. Up close it is even more marvelous. " + userName + " notices a guard in front of the castle, glittering in the sunlight in their armor. " + userName + " also thinks they hear a person very faintly saying '...find me...I'll give you hearts...' ")
                // GuardTalking()
            }
            else if ( homeFirst === false) {
                setStoryString(userName + " walks up to the castle once again. ")
            }
            // if (guardState === true) {
            //     guardTalking()
            // }
        })
    },[]);

    // function guardTalking() {
    //     if ( firstTalk === true) {
    //         updateStory(userName + " decides to talk to the guard. 'Hello.' says Guard Tony. 'Do you have a permit to enter Castle Richfield?' ")
    //         setButtons({buttons: "show"})
    //         setFirst(false)
    //     }
    //     if (firstTalk === false) {
    //         if (permit === true) {
    //             updateStory(userName + " decides to speak to Guard Tony. Guard Tony smiles and says 'It looks like you have a permit!', and goes inside the castle so that" + userName + " can choose to enter the castle. ")
    //         }
    //         if (permit === false) {
    //              updateStory(userName + " decides to speak to Guard Tony. Guard Tony frowns and shakes his head. 'Still no permit?', he says. 'I would try the shopkeeper. He usually has some. His store is in the forest' ")
    //             }
    //         }
    // }
        
    function orcTalking () {
        if (firstTalkOrc === true) {
            updateStory(userName + " decides to speak to Orc Vinnie. 'HI' says Orc Vinnie. 'IMMA GIVE YOU A HEART' ")
            setOrc(false)
                    //update heart number in api 
        }
        if (firstTalkOrc === false) {
            updateStory(userName + " decides to speak to Orc Vinne. 'ALREADY GAVE HEARTS' he says.")
        }
    }
        
        
    function handleBtnClick (event) {
        // Get the data-value of the clicked button
        const btnType = event.target.attributes.getNamedItem("data-value").value;
                
            
        if (btnType === "yes") {
            console.log("yes")
            updateStory(userName + " says 'Sure! Sure I have a permit!' and tries to smile as innocently as possible. 'LIES? LYING to ME?' Guard Tony says. He is clearly very upset. 'You clearly don't have a permit. Come back when you do!' ")
        } 
        if (btnType === "no") {
            console.log("no")
            updateStory(userName + " frowns and says 'no'. Guard Tony smiled helpfully 'I would try the shopkeeper. He usually has some. His store is in the forest' ")
        }
                
    };
        
    function updateStory (storyObjectPath) {
        setStoryString(storyString + " " + storyObjectPath)
               
    }


   
  
    return(
        <div>
            <div className="textBG">
                <div>
                    {storyString}
                </div>
                            
            </div>
                        
            {/* <Exposition handleBtnClick={this.handleBtnClick} /> */}
        
                        
        </div>
    )
            
    

}


export default GameTextBox;

// import React from "react";
// import "./TextBox.css";
// // import { storyObject } from "../StoryObject";
// import API from "../../utils/API";
// import Exposition from "../Exposition";
// import { Container } from "../Grid";
// import { withRouter } from "react-router";



// let userName = "You";
 
// class GameTextBox extends React.Component {


//     state = {
//         storyString: "",

//         buttons: "hide",
//         homeFirst: true,
//         firstTalk: true,
//         firstTalkOrc: true,
//         permit: false,
        
//     }

//     componentDidMount() {
//         console.log("pre API", userName)
//         const id = this.props.match.params.id;
//         // this.fetchData(id)
//         //this will be a beginning trait in the user, then all the rest will be from story
//         API.getUserSprite(id).then(user => {
//             console.log(user.data[0].sprite[0])
//             const { name } = user.data[0].sprite[0]
       
//             console.log("post API: ", name)
//             userName = user.data[0].sprite[0].name
      
//         }).then(()=>{
//             API.getUserSprite(id).then(user => {
//                 console.log(user.data[0].sprite[0])
//                 const { sprite, homeFirst } = user.data[0].sprite[0]
           
//                 console.log("../../assets/sprites/", sprite)
//                 console.log(homeFirst)
//                 this.setState({ image: sprite})
//                 this.setState({ homeFirst: homeFirst})

              
//                if ( homeFirst === true ) {
                
//                     this.setState({storyString:  userName + " follows the path to the castle. Up close it is even more marvelous. " + userName + " notices a guard in front of the castle, glittering in the sunlight in their armor. " + userName + " also thinks they hear a person very faintly saying '...find me...I'll give you hearts...' "})
                
//                 }
//                 if (homeFirst === false) {
//                     this.setState({storyString: userName + " walks up to the castle once again. "})
//                 }
               
//             })
//         })
        
//     }
      
   
//     guardTalking = () => {
//         if (this.state.firstTalk === true) {
//             this.updateStory(userName + " decides to talk to the guard. 'Hello.' says Guard Tony. 'Do you have a permit to enter Castle Richfield?' ")
//             this.setState({buttons: "show"})
//             this.setState({ firstTalk: false })
//         }
//         if (this.state.firstTalk === false) {
//             if (this.state.permit === true) {
//                 this.updateStory(userName + " decides to speak to Guard Tony. Guard Tony smiles and says 'It looks like you have a permit!', and goes inside the castle so that" + userName + " can choose to enter the castle. ")
//             }
//             if (this.state.permit === false) {
//                 this.updateStory(userName + " decides to speak to Guard Tony. Guard Tony frowns and shakes his head. 'Still no permit?', he says. 'I would try the shopkeeper. He usually has some. His store is in the forest' ")
//             }
//         }
//     }

//     orcTalking = () => {
//         if (this.state.firstTalkOrc === true) {
//             this.updateStory(userName + " decides to speak to Orc Vinnie. 'HI' says Orc Vinnie. 'IMMA GIVE YOU A HEART' ")
//             this.setState({firstTalkOrc: false})
//             //update heart number in api 
//         }
//         if (this.state.firstTalkOrc === false) {
//             this.updateStory(userName + " decides to speak to Orc Vinne. 'ALREADY GAVE HEARTS' he says.")
//         }
//     }


//     handleBtnClick = event => {
//         // Get the data-value of the clicked button
//         const btnType = event.target.attributes.getNamedItem("data-value").value;
        
    
//         if (btnType === "yes") {
//             console.log("yes")
//             this.updateStory(userName + " says 'Sure! Sure I have a permit!' and tries to smile as innocently as possible. 'LIES? LYING to ME?' Guard Tony says. He is clearly very upset. 'You clearly don't have a permit. Come back when you do!' ")
//         } 
//         if (btnType === "no") {
//             console.log("no")
//           this.updateStory(userName + " frowns and says 'no'. Guard Tony smiled helpfully 'I would try the shopkeeper. He usually has some. His store is in the forest' ")
//         }
        
//       };

//     updateStory = storyObjectPath => {
//         this.setState({storyString: this.state.storyString + " " + storyObjectPath })
       
//     }




//     render () {
//     return(
//             <div>
//                 <div className="textBG">
//                     <div ref = "scroll">
//                         {this.state.storyString}
//                     </div>
                    
//                 </div>
                
//                 {/* <Exposition handleBtnClick={this.handleBtnClick} /> */}

                
//             </div>
//         )
//     }

// }

// export default withRouter(GameTextBox); 
// // withRouter(GameTextBox);