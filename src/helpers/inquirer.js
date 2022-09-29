const inquirer = require("inquirer");
const hero = require("../models/hero");

module.exports = {
	mainMenu: () => {
		const questions = [
			{
				type: "rawlist",
				name: "mainMenu",
				message: "What would you like to do? ",
				choices: [
					"Calculate deadly rings",
					// "Find weakest creature",
					"View all heroes",
					"Add a hero",
					"Update a hero",
					"Remove a hero",
					"Logout",
					"Quit application",
				],
				default: 0,
			},
		];

		return inquirer.prompt(questions);
	},
	getHeroStats: (
		hero = {
			name: "Hero",
			health: 0,
			armor: 0,
			void: 0,
			lightning: 0,
			fire: 0,
			nature: 0,
			earth: 0,
			frost: 0,
			water: 0,
		}
	) => {
		const questions = [
			{
				type: "input",
				name: "name",
				message: "Hero Name: ",
				default: hero.name || "Hero",
			},
			{
				type: "number",
				name: "health",
				message: "Health: ",
				default: hero.health || 0,
			},
			{
				type: "number",
				name: "armor",
				message: "Armor: ",
				default: hero.armor || 0,
			},
			{
				type: "number",
				name: "void",
				message: "Void Resistance: ",
				default: hero.void || 0,
			},
			{
				type: "number",
				name: "lightning",
				message: "Lightning Resistance: ",
				default: hero.lightning || 0,
			},
			{
				type: "number",
				name: "fire",
				message: "Fire Resistance: ",
				default: hero.fire || 0,
			},
			{
				type: "number",
				name: "nature",
				message: "Nature Resistance: ",
				default: hero.nature || 0,
			},
			{
				type: "number",
				name: "earth",
				message: "Earth Resistance: ",
				default: hero.earth || 0,
			},
			{
				type: "number",
				name: "frost",
				message: "Frost Resistance: ",
				default: hero.frost || 0,
			},
			{
				type: "number",
				name: "water",
				message: "Water Resistance: ",
				default: hero.water || 0,
			},
		];

		return inquirer.prompt(questions);
	},
	getHeroSelection: (arrayOfHeroes) => {
		const questions = [
			{
				type: "rawlist",
				name: "heroSelection",
				message: "Select a hero: ",
				choices: arrayOfHeroes,
			},
		];
		return inquirer.prompt(questions);
	},
	getUserDetails: () => {
		const questions = [
			{
				type: "input",
				name: "username",
				message: "Username: ",
				default: "username",
			},
			{
				type: "input",
				name: "password",
				message: "Password: ",
				default: "password",
			},
		];
		return inquirer.prompt(questions);
	},
	loginOrRegister: () => {
		const questions = [
			{
				type: "rawlist",
				name: "loginOrRegister",
				message: "Login or Register: ",
				choices: ["Login", "Register", "Quit"],
				default: 0,
			},
		];
		return inquirer.prompt(questions);
	},
};
