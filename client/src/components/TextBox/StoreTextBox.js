import React from "react";
import "./TextBox.css";
import API from "../../utils/API";
import { withRouter } from "react-router";
import Store from "../Store/Store"


let userName = "You";
let varString = "";

 
class StoreTextBox extends React.Component {

    state = {
        storyString: "",
        money: 0,
        id: ""
    }

    //we could also do if storyString === ""
    //so this.state.storyString === ""
    componentDidMount() {
        console.log("pre API", userName)
        const id = this.props.match.params.id;
  
        API.getUserSprite(id).then(user => {
            console.log(user.data[0].sprite[0])
            const { name } = user.data[0].sprite[0]
       
            console.log("post API: ", name)
            userName = user.data[0].sprite[0].name
           
        }).then(()=>{
            API.getUserSprite(id).then(user => {
                console.log(user.data[0].sprite[0])
                const { sprite, homeFirst, lives, money } = user.data[0].sprite[0]
           
                console.log("../../assets/sprites/", sprite)
                console.log(lives)
                this.setState({ image: sprite})
                this.setState({ homeFirst: true})
                this.setState({ lives: lives })
                this.setState({money: money})
                this.setState({id: id})

                userName = user.data[0].sprite[0].name
                   
                this.setState({storyString: userName + " enters the shop and looks around. It's a well-kept shop, with a lot of good items. Shopkeeper Erik looks at " + userName + " inquisitively. 'What can I do for you?', he asks. "})
                varString = userName + " enters the shop and looks around. It's a well-kept shop, with a lot of good items. Shopkeeper Erik looks at " + userName + " inquisitively. 'What can I do for you?', he asks. "
                
            })
        })
        
    }

    // handleStoreBtn = () => {
    //     if(this.money >= 50){
    //         API.UpdateSpritePermit(true, this.id).then(()=> {
    //             console.log("updated permit")            
    //         })
    //          varString += " Shopkeeper Erik smiles and says 'Thank you for the Sale, Kupo! " + userName + " has added a permit to their inventory! "
    //         this.setState({storyString: varString})
    //     } else{
    //         varString += " Shopkeeper Erik frowns and says 'Sorry, not enough money, Kupo!"
    //         this.setState({storyString: varString})
    //     }
    //    };
   

    render () {
    return(
            <div>
                <div className="textStore">
                    <div ref = "scroll">
                        {this.state.storyString}
                    </div>
                </div>
                {/* <Store handleStoreBtn={this.handleStoreBtn}/>    */}
            </div>
        )
    }

}

export default withRouter(StoreTextBox);

