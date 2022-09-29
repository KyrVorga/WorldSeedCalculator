const mongoose = require("mongoose");
const { Schema } = mongoose;

const Hero = new Schema({
	name: String,
	health: Number,
	armor: Number,
	void: Number,
	lightning: Number,
	fire: Number,
	nature: Number,
	earth: Number,
	frost: Number,
	water: Number,
	user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Hero", Hero);
