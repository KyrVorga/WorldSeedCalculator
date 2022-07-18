const { creaturePower } = require("./calculateCreaturePower");

const calculateDeadlyRings = (creatureStats, playerStats) => {
	let oneShotCreatures = [];
	for (creature in creatureStats) {
		let flag = true;
		let ring = 1;
		let creatureName = creature;
		while (flag) {
			if (ring >= 250) {
				flag = false;
				break;
			}
			const element = creatureStats[creature]["Element"];

			const playerArmor = playerStats.Armor;
			const playerDeathLimit = playerStats["Health"] * 1.25;
			const playerElementalResistance = playerStats[element];

			const creatureAttack = creaturePower(
				ring,
				creatureStats[creature]["Base Attack"]
			);
			const criticalDamage =
				creatureAttack *
				(1 + creatureStats[creature]["Critical Damage"]);

			const armorPenetration =
				creatureStats[creature]["Armor Penetration"];
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
	return oneShotCreatures;
};

module.exports = { calculateDeadlyRings };
