const calculateCreaturePower = require("./calculateCreaturePower");
const writeCreatureStats = require("./writeCreatureStats");

module.exports = {
	writeCreatureStats: writeCreatureStats.writeCreatureStats,
	calculateCreaturePower: calculateCreaturePower.creaturePower,
};
