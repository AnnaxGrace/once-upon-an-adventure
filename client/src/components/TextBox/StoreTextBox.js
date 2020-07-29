import React from "react";
import "./TextBox.css";
import API from "../../utils/API";
import { withRouter } from "react-router";
import StoreInventory from "../Inventory/storeInventory";
import Store from "../Store/Store";

let userName = "You";
let varString = "";

//The text box for the store
class StoreTextBox extends React.Component {
  state = {
    storyString: "",
    money: 0,
    permit: false,
    permitImg: require("../../images/empty.png"),
  };

      //when the page loads

  componentDidMount() {

    // get the id from the parameters
    const id = this.props.match.params.id;

    //set our username for our story
    API.getUserSprite(id)
      .then((user) => {
        const { name } = user.data[0].sprite[0];
        userName = name
      })
      .then(() => {
        API.getUserSprite(id).then((user) => {
          const {
            sprite,
            lives,
            money,
            permit,
          } = user.data[0].sprite[0];

          this.setState({ image: sprite });
          this.setState({ lives: lives });
          this.setState({ money: money });
          this.setState({ permit: permit });
         
          //sets our permit image depending on our database
          if (permit === true) {
            this.setState({
              permitImg: require("../../images/castle-pass.png"),
            });
          }
          if (permit === false) {
            this.setState({ permitImg: require("../../images/empty.png") });
          }

          this.setState({
            storyString:
              userName +
              " enters the shop and looks around. It's a well-kept shop, with a lot of good items. Shopkeeper Erik looks at " +
              userName +
              " inquisitively. 'What can I do for you?', he asks. ",
          });
          varString =
            userName +
            " enters the shop and looks around. It's a well-kept shop, with a lot of good items. Shopkeeper Erik looks at " +
            userName +
            " inquisitively. 'What can I do for you?', he asks. ";
        });
      });
  }

  //when you press the buy permit button
  handleStoreBtn = () => {
    const id = this.props.match.params.id;

    //if you have the money to buy it
    if (this.state.money >= 50) {
      //update the database to say the permit is owned
      API.UpdateSpritePermit(true, id)
        .then(() => {
          console.log("updated permit");
          varString +=
            " Shopkeeper Erik smiles and says 'Thank you for the Sale, Kupo!' " +
            userName +
            " has added a permit to their inventory! ";
          this.setState({ storyString: varString });
          this.setState({ permitImg: require("../../images/castle-pass.png") });
          this.setState({ permit: true });
        })
        //and remove the money needed to purchase the permit
        //and update the database
        .then(() => {
          let newMoney = this.state.money - 50;

          API.UpdateSpriteMoney(newMoney, id).then(() => {
            console.log("updated NewMoney", newMoney);
            this.setState({money: newMoney})
          });
        });
        //if you don't have the money, shopkeeper says you can't buy it
    } else {
      varString +=
        " Shopkeeper Erik frowns and says 'Sorry, not enough money, Kupo!";
      this.setState({ storyString: varString });
    }
  };

  render() {
    return (
      <div>
        {/* Our textbox for this page */}
        <div className="textStore">
          <div ref="scroll">{this.state.storyString}</div>
        </div>

        {/* Pass our props to our inventory so they change in page */}
        <StoreInventory
          money={this.state.money}
          permitImg={this.state.permitImg}
        />

        {/* Pass our button function to the store page */}
        <Store handleStoreBtn={this.handleStoreBtn} />
      </div>
    );
  }
}

export default withRouter(StoreTextBox);
