const fs = require("fs").promises;
const { getPlayerStats } = require("./getPlayerStats");
const CREATURE_ADDITIVE_SCALING = 2;
const CREATURE_MULTIPLICATIVE_SCALING = 1;
const CREATURE_STAT_BASE = 1.04;
const CREATURE_BASE_SCALING = 0.0002;

// generic funtion to read and return an object from a json file
const read = async (location) => {
	const data = await fs.readFile(location, (err, data) => {
		if (err) throw err;
	});
	return JSON.parse(data.toString());
};

// actual game calculation
const creaturePower = (level, baseAttack) => {
	return Math.floor(
		(CREATURE_ADDITIVE_SCALING * level +
			(CREATURE_MULTIPLICATIVE_SCALING *
				level *
				(CREATURE_STAT_BASE + level * CREATURE_BASE_SCALING) **
					(level - 1)) /
				2) *
			baseAttack
	);
};

// get player stats
const playerStats = getPlayerStats();

let oneShotCreatures = [];

// read the  creatureStats.json and save here
const creatureStats = read("./src/json/creatureStats.json");
creatureStats.then((data) => {
	for (creature in data) {
		let flag = true;
		let ring = 1;
		let creatureName = creature;
		console.log(creature);
		while (flag) {
			if (ring >= 250) {
				flag = false;
				break;
			}
			const element = data[creature]["Element"];

			const playerArmor = playerStats.Armor;
			const playerDeathLimit = playerStats["Death Limit"];
			const playerElementalResistance = playerStats[element];

			const creatureAttack = creaturePower(
				ring,
				data[creature]["Base Attack"]
			);
			const criticalDamage =
				creatureAttack * (1 + data[creature]["Critical Damage"]);

			const armorPenetration = data[creature]["Armor Penetration"];
			const physicalDamage = criticalDamage * 0.75;
			const elementalDamage = criticalDamage * 0.25;
			const physicalDamageReduced =
				physicalDamage -
				physicalDamage * playerArmor +
				physicalDamage * armorPenetration;

			const elementalDamageReduced =
				elementalDamage - elementalDamage * playerElementalResistance;

			const totalDamage = physicalDamageReduced + elementalDamageReduced;

			if (totalDamage >= playerDeathLimit) {
				oneShotCreatures.push([creatureName, ring]);
				flag = false;
				break;
			} else {
				ring++;
			}
		}
	}
	console.log(oneShotCreatures);
});
