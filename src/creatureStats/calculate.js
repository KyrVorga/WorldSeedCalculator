const { creaturePower } = require("./calculateCreaturePower");

const calculateDeadlyRings = (creatureStats, playerStats) => {
	let oneShotCreatures = [];
	// for (creature in creatureStats) {
	creatureStats.forEach((creature) => {
		let flag = true;
		let ring = 1;
		while (flag) {
			if (ring >= 250) {
				flag = false;
				break;
			}
			const element = creature["element"];

			const playerArmor = playerStats.armor;
			const playerDeathLimit = playerStats["health"] * 1.25;
			const playerElementalResistance = playerStats[element];

			const creatureAttack = creaturePower(ring, creature["base attack"]);
			const criticalDamage =
				creatureAttack * (1 + creature["critical damage"]);

			const armorPenetration = creature["armor penetration"];
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
				oneShotCreatures.push([creature.name, ring]);
				flag = false;
				break;
			} else {
				ring++;
			}
		}
	});
	return oneShotCreatures;
};

module.exports = { calculateDeadlyRings };
