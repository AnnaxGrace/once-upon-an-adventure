const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpriteSchema = new Schema({
    sprite: {type: String},
    name: { type: String, required: true },
    homeFirst: {type: Boolean, default: true},
});
const Sprite = mongoose.model("Sprite", SpriteSchema);

module.exports = Sprite;
