const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

const inquirer = require("./helpers/inquirer");
const { getHeroes } = require("./playerStats/getHeroes");
const { deleteFile } = require("./helpers/deleteFile");
const { read } = require("./helpers/readFile");

const creatureStats = require("./creatureStats/index");
const playerStats = require("./playerStats/index");
const deadlyRings = require("./creatureStats/calculate");

clear();

console.log(
	chalk.yellow(figlet.textSync("World Seed", { horizontalLayout: "full" }))
);
console.log(
	"\nWelcome to the World Seed Calculator!\nPress Ctrl+C to quit the application or cancel an operation.\n"
);

const run = async () => {
	let runFlag = true;
	while (runFlag) {
		const statsExist = await creatureStats.writeCreatureStats();
		const selection = await inquirer.getFirstSelection();
		let arrayOfHeroes = await getHeroes();

		switch (selection.firstSelection) {
			case "Calculate deadly rings":
				heroToCalculate = await inquirer.heroToCalculateFor(
					arrayOfHeroes
				);
				hero = await read(
					`./src/playerStats/heroes/${heroToCalculate.heroToCalculate}`
				);
				creatures = await read(
					"./src/creatureStats/creatureStats.json"
				);
				let oneShotCreatures = await deadlyRings.calculateDeadlyRings(
					creatures,
					hero
				);
				console.log(oneShotCreatures);
				break;

			case "Enter a hero":
				const getPlayerStats = await inquirer.getPlayerStats();
				playerStats.writePlayerStats(getPlayerStats);
				break;

			case "Delete a hero":
				// let arrayOfHeroes = await getHeroes();
				const heroToDelete = await inquirer.whichHeroToDelete(
					arrayOfHeroes
				);
				console.log(heroToDelete);
				deleteFile(
					`./src/playerStats/heroes/${heroToDelete.heroToDelete}`
				);
				break;
			case "Quit application":
				runFlag = false;
				break;
		}
	}
};

run();
