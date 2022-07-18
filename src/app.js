require("dotenv").config();
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

const inquirer = require("./helpers/inquirer");
const { getHeroes } = require("./helpers/getHeroes");

const creatureStats = require("./creatureStats/index");
const playerStats = require("./playerStats/index");

clear();

console.log(
	chalk.yellow(figlet.textSync("World Seed", { horizontalLayout: "full" }))
);
console.log(
	"\nWelcome to the World Seed Calculator!\nPress Ctrl+C to quit the application or cancel an operation.\n"
);

const run = async () => {
	const statsExist = await creatureStats.writeCreatureStats();
	const selection = await inquirer.getFirstSelection();

	switch (selection.firstSelection) {
		case "Calculate deadly rings":
			console.log("ring");
			break;

		case "Enter a hero":
			const getPlayerStats = await inquirer.getPlayerStats();
			playerStats.writePlayerStats(getPlayerStats);
			break;

		case "Delete a hero":
			let arrayOfHeroes = await getHeroes();
			const heroToDelete = await inquirer.whichHeroToDelete(
				arrayOfHeroes
			);
			console.log(heroToDelete);
			break;
	}
};

run();
// const { getPlayerStats } = require("./playerStats/getPlayerStats");

// get player stats
// const playerStats = getPlayerStats();

// let oneShotCreatures = [];

// read the  creatureStats.json and save here
// const creatureStats = read("./src/json/creatureStats.json");
// creatureStats.then((data) => {
// 	for (creature in data) {
// 		let flag = true;
// 		let ring = 1;
// 		let creatureName = creature;
// 		console.log(creature);
// 		while (flag) {
// 			if (ring >= 250) {
// 				flag = false;
// 				break;
// 			}
// 			const element = data[creature]["Element"];

// 			const playerArmor = playerStats.Armor;
// 			const playerDeathLimit = playerStats["Death Limit"];
// 			const playerElementalResistance = playerStats[element];

// 			const creatureAttack = creaturePower(
// 				ring,
// 				data[creature]["Base Attack"]
// 			);
// 			const criticalDamage =
// 				creatureAttack * (1 + data[creature]["Critical Damage"]);

// 			const armorPenetration = data[creature]["Armor Penetration"];
// 			const physicalDamage = criticalDamage * 0.75;
// 			const elementalDamage = criticalDamage * 0.25;
// 			const physicalDamageReduced =
// 				physicalDamage -
// 				physicalDamage * playerArmor +
// 				physicalDamage * armorPenetration;

// 			const elementalDamageReduced =
// 				elementalDamage - elementalDamage * playerElementalResistance;

// 			const totalDamage = physicalDamageReduced + elementalDamageReduced;

// 			if (totalDamage >= playerDeathLimit) {
// 				oneShotCreatures.push([creatureName, ring]);
// 				flag = false;
// 				break;
// 			} else {
// 				ring++;
// 			}
// 		}
// 	}
// 	console.log(oneShotCreatures);
// });
