const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StorySchema = new Schema({
    text: {type: String,  required: true},
    UserId: {type: Number, required: true},
    forestFirst: {type: Boolean, default: true},
    cliffFirst: {type: Boolean, default: true},
    castleFirst: {type: Boolean, default: true},
});
const Story = mongoose.model("Story", StorySchema);

module.exports = Story;

//Need to be able to create text, this will be the same for each story, the beginning
//Need to get the text and render it
//Need to be able to update (this part is HUGE)

//needs to associate with user_data