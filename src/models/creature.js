const mongoose = require("mongoose");
const { Schema } = mongoose;

const Creature = new Schema({
	name: String,
	element: String,
	"armor penetration": Number,
	"critical damage": Number,
	"base attack": Number,
});

module.exports = mongoose.model("Creature", Creature);
