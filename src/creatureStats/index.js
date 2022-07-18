const calculateCreaturePower = require("./calculateCreaturePower");
const writeCreatureStats = require("./writeCreatureStats");
const calculateDeadlyRings = require("./calculate");

module.exports = {
	writeCreatureStats: writeCreatureStats.writeCreatureStats,
	calculateCreaturePower: calculateCreaturePower.creaturePower,
	calculateDeadlyRings: calculateDeadlyRings.calculateDeadlyRings,
};
