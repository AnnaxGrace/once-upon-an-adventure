const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpriteSchema = new Schema({
 
});
const Sprite = mongoose.model("Sprite", SpriteSchema);

module.exports = Sprite;
