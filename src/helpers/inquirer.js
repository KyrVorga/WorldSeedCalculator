const inquirer = require("inquirer");

module.exports = {
	getFirstSelection: () => {
		const questions = [
			{
				type: "rawlist",
				name: "firstSelection",
				message: "What would you like to do? ",
				choices: [
					"Calculate deadly rings",
					"Enter a hero",
					"Delete a hero",
					"Quit application",
				],
				default: 0,
			},
		];

		return inquirer.prompt(questions);
	},
	getPlayerStats: () => {
		const questions = [
			{
				type: "input",
				name: "Name",
				message: "Hero Name: ",
				default: "Hero",
			},
			{
				type: "number",
				name: "Health",
				message: "Health: ",
				default: 0,
			},
			{
				type: "number",
				name: "Armor",
				message: "Armor: ",
				default: 0,
			},
			{
				type: "number",
				name: "Void",
				message: "Void Resistance: ",
				default: 0,
			},
			{
				type: "number",
				name: "Water",
				message: "Water Resistance: ",
				default: 0,
			},
			{
				type: "number",
				name: "Fire",
				message: "Fire Resistance: ",
				default: 0,
			},
			{
				type: "number",
				name: "Nature",
				message: "Nature Resistance: ",
				default: 0,
			},
			{
				type: "number",
				name: "Earth",
				message: "Earth Resistance: ",
				default: 0,
			},
			{
				type: "number",
				name: "Frost",
				message: "Frost Resistance: ",
				default: 0,
			},
			{
				type: "number",
				name: "Lightning",
				message: "Lightning Resistance: ",
				default: 0,
			},
		];

		return inquirer.prompt(questions);
	},
	whichHeroToDelete: (arrayOfHeroes) => {
		const questions = [
			{
				type: "rawlist",
				name: "heroToDelete",
				message: "Who would you like to delete? ",
				choices: arrayOfHeroes,
			},
		];
		return inquirer.prompt(questions);
	},
	heroToCalculateFor: (arrayOfHeroes) => {
		const questions = [
			{
				type: "rawlist",
				name: "heroToCalculate",
				message: "Choose a hero: ",
				choices: arrayOfHeroes,
			},
		];
		return inquirer.prompt(questions);
	},
};
