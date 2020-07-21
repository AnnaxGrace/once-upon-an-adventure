import React from "react";
import "./TextBox.css";
import API from "../../utils/API";
import { withRouter } from "react-router";
import StoreInventory from "../Inventory/storeInventory"
import Store from "../Store/Store"


let userName = "You";
let varString = "";

 
class StoreTextBox extends React.Component {

    state = {
        storyString: "",
        money: 0,
        id: "",
        permit: false,
        permitImg: require("../../images/empty.png"),
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
                const { sprite, homeFirst, lives, money, permit } = user.data[0].sprite[0]
           
                console.log("../../assets/sprites/", sprite)
                console.log(lives)
                this.setState({ image: sprite})
                this.setState({ homeFirst: true})
                this.setState({ lives: lives })
                this.setState({money: money})
                this.setState({id: id})
                this.setState({permit: permit})
                console.log("this is money")
                console.log(this.state.money)
                if (permit === true) {
                    this.setState({permitImg: require("../../images/castle-pass.png")})
                }
                if (permit === false ) {
                    this.setState({permitImg: require("../../images/empty.png")})
                }

                userName = user.data[0].sprite[0].name
                   
                this.setState({storyString: userName + " enters the shop and looks around. It's a well-kept shop, with a lot of good items. Shopkeeper Erik looks at " + userName + " inquisitively. 'What can I do for you?', he asks. "})
                varString = userName + " enters the shop and looks around. It's a well-kept shop, with a lot of good items. Shopkeeper Erik looks at " + userName + " inquisitively. 'What can I do for you?', he asks. "
                
            })
        })
        
    }

    handleStoreBtn = () => {
        if(this.state.money >= 50){
            API.UpdateSpritePermit(true, this.state.id).then(()=> {
                console.log("updated permit")  
                varString += " Shopkeeper Erik smiles and says 'Thank you for the Sale, Kupo! " + userName + " has added a permit to their inventory! "
                this.setState({storyString: varString})  
                this.setState({permitImg: require("../../images/castle-pass.png")})
                this.setState({permit: true})        
            });
             
        } else{
            varString += " Shopkeeper Erik frowns and says 'Sorry, not enough money, Kupo!"
            this.setState({storyString: varString})
        }
       };

    // permit =() => {
        
    //         if (props.permit === true){
    //             return <img src={require("../../images/castle-pass.png")} className="invtImg" alt="Castle Pass" />
    //         } else {
    //             return <img src={require("../../images/empty.png")} className="invtImg" alt="Empty" />
    //         }
    //     }
   

    render () {
    return(
            <div>
                <div className="textStore">
                    <div ref = "scroll">
                        {this.state.storyString}
                    </div>
                </div>

                < StoreInventory 
                money={this.state.money}
                permitImg={this.state.permitImg}
                />
                <Store handleStoreBtn={this.handleStoreBtn}/>   
            </div>
        )
    }

}

export default withRouter(StoreTextBox);

