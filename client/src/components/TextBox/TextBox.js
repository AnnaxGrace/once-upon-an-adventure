import React from "react";
import "./TextBox.css";
import API from "../../utils/API";
import { withRouter } from "react-router";
import Inventory from "../Inventory/Inventory";



let userName = "You";
const storyObj = {
    home: {
        start: {
            p3: " A strange but handsome man appears! 'Hello' says Wilson. 'I am here to help. And in return, I hope you can help us. ",
            p4: " There is something wrong with the King. He lives in the castle. I do not know how this plane of existence works, so here's 10 gold. I hope that's enough!' ",
        }
}
}
 
class TextBox extends React.Component {


    state = {
        storyString: "",
        image: "placeholder.gif",
        name: "Misterman",
        poofShow: "hide",
        links: "hide",
        homeFirst: true,
        lives: "",
        money: 0,
        gameLog: "",

        wilsonShow: "hide",
    }

   
    componentDidMount() {
        console.log("pre API", userName)
        const id = this.props.match.params.id;
        API.getUserSprite(id).then(user => {
            const { name } = user.data[0].sprite[0]
       
            userName = user.data[0].sprite[0].name
           
        }).then(()=>{
            API.getUserSprite(id).then(user => {
                console.log(user.data[0].sprite[0])
                const { sprite, homeFirst, lives, money } = user.data[0].sprite[0]
           
                console.log("../../assets/sprites/", sprite)
                console.log(lives)
                this.setState({ image: sprite})
                this.setState({ homeFirst: homeFirst})
                this.setState({lives: lives})
                this.setState({money: money})

               if ( homeFirst === true ) {
                console.log("variable Change: ", userName)
                
                this.setState({links: "show", storyString:  userName + " awakens in a strange land. " + userName + " looks around. There's a beautiful field and there are paths that seem to lead in different directions. There seems to be a path that leads to a forest, and one that leads to a cliff. In the distance, " + userName+ " can see a beautiful castle - it looks like it would be hard to take in battle! "})
                setTimeout(this.poofAppears, 9000);
                // this.scrollToBottom();
                }
                if ( homeFirst === false ) {
                    console.log("variable Change: ", userName)
                    
                    this.setState({storyString: userName + " enters where they first came into the land. " + userName + " looks around and decides what to do. "})
                    
                }
               
            })
        })
        
    }
      

    poofAppears = () => {
        this.setState({poofShow: "show"})
        this.updateStory("As " + userName + " looks around suddenly - POOF. ")
        setTimeout(this.wilsonAppears, 3000)
    }

    wilsonAppears = () => {
        
        this.updateStory(storyObj.home.start.p3)
        this.setState({poofShow: "hide"})
        this.setState({wilsonShow: "show"})
        setTimeout(this.wilsonTalks, 5000)
    }

    wilsonTalks = () => {
        const id = this.props.match.params.id;

        this.updateStory(storyObj.home.start.p4)
        API.UpdateSpriteMoney(10, id).then(()=> {
            console.log("updated money")
            this.setState({money: 10})
           
        })

        setTimeout(this.wilsonGoes, 6000)
    }

    wilsonGoes = () => {

        const id = this.props.match.params.id;
        this.setState({wilsonShow: "hide"})
        this.setState({poofShow: "show"})
        this.setState({links: "hide"})

        API.UpdateSpriteHomeFirst(false, id).then(()=> {
            console.log("updated homeFirst")            
        })

        setTimeout(this.poofGoes, 3000)
    }

    poofGoes = () => {
        console.log("step 4")
        this.setState({poofShow: "hide"})
        this.updateStory("And then, in another POOF, he was gone! " + userName+ " looked around again and thought about what to do... ")
        this.createStory()
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
    }

    createStory = () => {
        const id = this.props.match.params.id;
        let postObj = {
            text: this.state.storyString
        }
        API.createStory(postObj, id).then(res => 
            console.log("story created")).catch(err => console.log(err));
            // this.setState({gameLog: this.state.storyString})
    }

    findGameLog = () => {
        const id = this.props.match.params.id;
        API.getUserStory(id).then(user => {
            const { text } = user.data[0].story[0]
            this.setState({gameLog: text})
        })
    }

    // updateStoryLog = () => {
    //     const id = this.props.match.params.id;
    //     console.log("checking") 
    //     let newText = "hi"
    //     API.UpdateStory(newText, id).then(() => {
    //         console.log("story updated")
    //     })
    // }


    render () {
    return(
            <div>
               
                <div className="mapBG">
                    <div ref = "scroll">
                    
                        {this.state.storyString}
                    </div>
                    
                </div>
                < Inventory 
                money={this.state.money}
                />

            <div className="card-body text-center">
                <p></p>
                <h5>Menu</h5>

                {/* Saves Your Game */}
                <button className="btn">
                    Save Game!
                    </button>

                {/* Pulls up GameTextModal */}
                <button type="button" className="btn btn-primary" onClick={this.findGameLog} data-toggle="modal" data-target="#game-log">
                    Game Log!
                    </button>
                </div>


                <div className= {this.state.poofShow}>
                    <img className ="poof-image" src={require("../../images/prettypoof.gif")} />
                </div>

                <div className={this.state.links}>
                        <p id="castle"></p>
                        
                </div>

                <div className={this.state.wilsonShow}>
                    <img className="appear-image" src={require("../../assets/sprites/wilson.gif")} />
                </div>
                <div >
                    <img className="avatar-image" src={require("../../assets/sprites/1-" + this.state.image)} />
                </div>

                <div className="modal fade" id="game-log" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">The Story so far...</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div className="modal-body">
                                <div className = "scroll-log">
                                    {this.state.gameLog}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(TextBox);
