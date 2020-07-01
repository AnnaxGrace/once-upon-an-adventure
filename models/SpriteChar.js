const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpriteSchema = new Schema({
    sprite: {type: String} 
});
const Sprite = mongoose.model("Sprite", SpriteSchema);

module.exports = Sprite;
