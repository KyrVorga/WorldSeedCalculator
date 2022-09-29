const mongoose = require("mongoose");

const connect = require("../connect");
const Creature = require("../models/creature");

let creatureStats = {
	Alora: {
		element: "nature",
		"armor penetration": 0,
		"critical damage": 0,
		"base attack": 1.5,
	},
	Armorillo: {
		element: "earth",
		"armor penetration": 0.08,
		"critical damage": 0.4,
		"base attack": 1.25,
	},
	Bat: {
		element: "lightning",
		"armor penetration": 0,
		"critical damage": 0.9,
		"base attack": 1.55,
	},
	Blok: {
		element: "earth",
		"armor penetration": 0,
		"critical damage": 0,
		"base attack": 1.55,
	},
	Boar: {
		element: "nature",
		"armor penetration": 0.05,
		"critical damage": 0.25,
		"base attack": 1.5,
	},
	Boris: {
		element: "nature",
		"armor penetration": 0,
		"critical damage": 0,
		"base attack": 1.45,
	},
	Breff: {
		element: "frost",
		"armor penetration": 0.05,
		"critical damage": 0.2,
		"base attack": 1.5,
	},
	Bullrock: {
		element: "fire",
		"armor penetration": 0,
		"critical damage": 0.15,
		"base attack": 1.5,
	},
	Cackler: {
		element: "earth",
		"armor penetration": 0.08,
		"critical damage": 0.4,
		"base attack": 1.5,
	},
	Cerberus: {
		element: "fire",
		"armor penetration": 0,
		"critical damage": 0.2,
		"base attack": 1.55,
	},
	Chopjaw: {
		element: "water",
		"armor penetration": 0.1,
		"critical damage": 0.3,
		"base attack": 1.65,
	},
	"Cliff Goat": {
		element: "lightning",
		"armor penetration": 0.1,
		"critical damage": 0.3,
		"base attack": 1.65,
	},
	Crow: {
		element: "nature",
		"armor penetration": 0,
		"critical damage": 0.25,
		"base attack": 1.25,
	},
	Crushling: {
		element: "earth",
		"armor penetration": 0,
		"critical damage": 0.8,
		"base attack": 1.1,
	},
	Demon: {
		element: "fire",
		"armor penetration": 0,
		"critical damage": 0.25,
		"base attack": 1.65,
	},
	"Dire Bear": {
		element: "nature",
		"armor penetration": 0.2,
		"critical damage": 0.15,
		"base attack": 1.7,
	},
	Douseling: {
		element: "water",
		"armor penetration": 0,
		"critical damage": 0.9,
		"base attack": 1.2,
	},
	Drainling: {
		element: "void",
		"armor penetration": 0.05,
		"critical damage": 0.9,
		"base attack": 1.15,
	},
	Drakbarn: {
		element: "earth",
		"armor penetration": 0,
		"critical damage": 0.25,
		"base attack": 1.3,
	},
	Drylard: {
		element: "earth",
		"armor penetration": 0,
		"critical damage": 0.15,
		"base attack": 1.45,
	},
	Dunder: {
		element: "lightning",
		"armor penetration": 0,
		"critical damage": 0,
		"base attack": 1.45,
	},
	"earth Elemental": {
		element: "earth",
		"armor penetration": 0.05,
		"critical damage": 0.25,
		"base attack": 1.8,
	},
	Elise: {
		element: "earth",
		"armor penetration": 0,
		"critical damage": 0,
		"base attack": 1.4,
	},
	"Ember Fiend": {
		element: "fire",
		"armor penetration": 0.05,
		"critical damage": 0.3,
		"base attack": 1.45,
	},
	"Erat Herba": {
		element: "nature",
		"armor penetration": 0,
		"critical damage": 0.25,
		"base attack": 2.0,
	},
	Ettlok: {
		element: "earth",
		"armor penetration": 0.05,
		"critical damage": 0.25,
		"base attack": 1.4,
	},
	"fire Elemental": {
		element: "fire",
		"armor penetration": 0.1,
		"critical damage": 0.4,
		"base attack": 1.7,
	},
	"Fluctus Thadal": {
		element: "water",
		"armor penetration": 0,
		"critical damage": 0.15,
		"base attack": 1.85,
	},
	Freezeling: {
		element: "frost",
		"armor penetration": 0,
		"critical damage": 0.1,
		"base attack": 1.4,
	},
	"Frigus Mortis": {
		element: "frost",
		"armor penetration": 0.15,
		"critical damage": 0.33,
		"base attack": 1.6,
	},
	"frost Elemental": {
		element: "frost",
		"armor penetration": 0.3,
		"critical damage": 0.9,
		"base attack": 1.7,
	},
	"Giant(fire)": {
		element: "fire",
		"armor penetration": 0.8,
		"critical damage": 0.75,
		"base attack": 1.5,
	},
	"Giant(earth)": {
		element: "earth",
		"armor penetration": 0.8,
		"critical damage": 0.75,
		"base attack": 1.5,
	},
	"Giant(nature)": {
		element: "nature",
		"armor penetration": 0.8,
		"critical damage": 0.75,
		"base attack": 1.5,
	},
	"Giant(lightning)": {
		element: "lightning",
		"armor penetration": 0.8,
		"critical damage": 0.75,
		"base attack": 1.5,
	},
	"Giant(water)": {
		element: "water",
		"armor penetration": 0.8,
		"critical damage": 0.75,
		"base attack": 1.5,
	},
	"Giant(frost)": {
		element: "frost",
		"armor penetration": 0.8,
		"critical damage": 0.75,
		"base attack": 1.5,
	},
	Goblin: {
		element: "fire",
		"armor penetration": 0,
		"critical damage": 0.9,
		"base attack": 1.55,
	},
	Golem: {
		element: "earth",
		"armor penetration": 0.2,
		"critical damage": 0.15,
		"base attack": 1.7,
	},
	Healling: {
		element: "nature",
		"armor penetration": 0,
		"critical damage": 0.2,
		"base attack": 1.35,
	},
	Herald: {
		element: "lightning",
		"armor penetration": 0.1,
		"critical damage": 0.25,
		"base attack": 1.7,
	},
	Hexapus: {
		element: "water",
		"armor penetration": 0,
		"critical damage": 0.4,
		"base attack": 1.35,
	},
	Hydro: {
		element: "water",
		"armor penetration": 0,
		"critical damage": 0,
		"base attack": 1.8,
	},
	Icear: {
		element: "frost",
		"armor penetration": 0,
		"critical damage": 0.25,
		"base attack": 1.5,
	},
	Ishana: {
		element: "void",
		"armor penetration": 0,
		"critical damage": 0,
		"base attack": 1.58,
	},
	Justin: {
		element: "water",
		"armor penetration": 0,
		"critical damage": 0,
		"base attack": 1.55,
	},
	Kyl: {
		element: "frost",
		"armor penetration": 0,
		"critical damage": 0,
		"base attack": 1.64,
	},
	Leviathan: {
		element: "water",
		"armor penetration": 0.9,
		"critical damage": 0.5,
		"base attack": 1.5,
	},
	"lightning Elemental": {
		element: "lightning",
		"armor penetration": 0.1,
		"critical damage": 0.4,
		"base attack": 1.7,
	},
	Mammoth: {
		element: "frost",
		"armor penetration": 0.1,
		"critical damage": 0.25,
		"base attack": 1.5,
	},
	Mauler: {
		element: "earth",
		"armor penetration": 0,
		"critical damage": 0.6,
		"base attack": 1.4,
	},
	Minotaur: {
		element: "nature",
		"armor penetration": 0,
		"critical damage": 0.9,
		"base attack": 1.6,
	},
	Moa: {
		element: "lightning",
		"armor penetration": 0.1,
		"critical damage": 0.9,
		"base attack": 1.3,
	},
	"Mons Igneus": {
		element: "fire",
		"armor penetration": 0,
		"critical damage": 0.3,
		"base attack": 1.7,
	},
	"nature Elemental": {
		element: "nature",
		"armor penetration": 0,
		"critical damage": 0.9,
		"base attack": 1.45,
	},
	"Nullius Terram": {
		element: "void",
		"armor penetration": 0,
		"critical damage": 0,
		"base attack": 1.6,
	},
	Onkh: {
		element: "lightning",
		"armor penetration": 0,
		"critical damage": 0.2,
		"base attack": 1.55,
	},
	Oskar: {
		element: "lightning",
		"armor penetration": 0,
		"critical damage": 0,
		"base attack": 1.6,
	},
	"Owl Bear": {
		element: "nature",
		"armor penetration": 0.1,
		"critical damage": 0.3,
		"base attack": 1.55,
	},
	Ragnar: {
		element: "fire",
		"armor penetration": 0,
		"critical damage": 0,
		"base attack": 1.8,
	},
	Roc: {
		element: "frost",
		"armor penetration": 0,
		"critical damage": 0.25,
		"base attack": 1.35,
	},
	"Rock Horn": {
		element: "earth",
		"armor penetration": 0.05,
		"critical damage": 0.4,
		"base attack": 1.5,
	},
	"Rune Stag": {
		element: "nature",
		"armor penetration": 0,
		"critical damage": 0.15,
		"base attack": 1.85,
	},
	Scorchling: {
		element: "fire",
		"armor penetration": 0,
		"critical damage": 0.25,
		"base attack": 1.3,
	},
	Scorpion: {
		element: "earth",
		"armor penetration": 0,
		"critical damage": 0.25,
		"base attack": 1.45,
	},
	"Sea Horse": {
		element: "water",
		"armor penetration": 0,
		"critical damage": 0.15,
		"base attack": 1.45,
	},
	Serpenta: {
		element: "water",
		"armor penetration": 0,
		"critical damage": 0.6,
		"base attack": 1.4,
	},
	Shockling: {
		element: "lightning",
		"armor penetration": 0,
		"critical damage": 0.25,
		"base attack": 1.3,
	},
	Snake: {
		element: "nature",
		"armor penetration": 0.1,
		"critical damage": 0.25,
		"base attack": 1.35,
	},
	Spiderling: {
		element: "nature",
		"armor penetration": 0,
		"critical damage": 0,
		"base attack": 1.1,
	},
	Steppa: {
		element: "fire",
		"armor penetration": 0,
		"critical damage": 0.1,
		"base attack": 1.2,
	},
	Treefolk: {
		element: "nature",
		"armor penetration": 0.08,
		"critical damage": 0.08,
		"base attack": 1.4,
	},
	Troll: {
		element: "nature",
		"armor penetration": 0.3,
		"critical damage": 0.4,
		"base attack": 1.75,
	},
	Turtle: {
		element: "water",
		"armor penetration": 0,
		"critical damage": 0.5,
		"base attack": 1.25,
	},
	Ulwar: {
		element: "lightning",
		"armor penetration": 0.15,
		"critical damage": 0.3,
		"base attack": 1.55,
	},
	"Vento Mico": {
		element: "lightning",
		"armor penetration": 0,
		"critical damage": 0.15,
		"base attack": 1.85,
	},
	"Vita Deserto": {
		element: "earth",
		"armor penetration": 0,
		"critical damage": 0.75,
		"base attack": 1.55,
	},
	"void Elemental": {
		element: "void",
		"armor penetration": 0.05,
		"critical damage": 0.25,
		"base attack": 1.8,
	},
	Warrus: {
		element: "frost",
		"armor penetration": 0,
		"critical damage": 0,
		"base attack": 1.45,
	},
	"water Elemental": {
		element: "water",
		"armor penetration": 0.15,
		"critical damage": 0.3,
		"base attack": 1.55,
	},
	Wolf: {
		element: "frost",
		"armor penetration": 0,
		"critical damage": 0.25,
		"base attack": 1.35,
	},
	Wurm: {
		element: "fire",
		"armor penetration": 0.15,
		"critical damage": 0.9,
		"base attack": 1.45,
	},
	Wyn: {
		element: "fire",
		"armor penetration": 0,
		"critical damage": 0,
		"base attack": 1.65,
	},
	Wyvern: {
		element: "lightning",
		"armor penetration": 0.05,
		"critical damage": 0.25,
		"base attack": 1.5,
	},
	Yeti: {
		element: "frost",
		"armor penetration": 0.15,
		"critical damage": 0.25,
		"base attack": 1.5,
	},
};

const writeCreatureStats = async () => {
	await connect();
	creatureStats = Object.entries(creatureStats).map(([name, stats]) => ({
		name,
		...stats,
	}));

	// creatureStats.forEach(async (creature) => {
	// 	const newCreature = new Creature(creature);
	// 	await newCreature.save();
	// });

	await Creature.insertMany(creatureStats, (err, docs) => {
		if (err) {
			console.log(err);
		} else {
			console.log("Multiple documents inserted to Collection");
		}
	});
	mongoose.connection.close();
};

writeCreatureStats();
// mongoose.connection.close();
// for adding in new entries -->   '': {'element': '', 'armor penetration': 0, 'critical damage': 0, 'base attack': },
