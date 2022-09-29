const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const mongoose = require("mongoose");

const {
	mainMenu,
	getHeroStats,
	getHeroSelection,
	loginOrRegister,
	getUserDetails,
} = require("./helpers/inquirer");
const connect = require("./connect");
const Hero = require("./models/hero");
const User = require("./models/user");
const Creature = require("./models/creature");
const { read, write, remove } = require("./helpers/files");

const { calculateDeadlyRings } = require("./creatureStats/calculate");

clear();

console.log(
	chalk.yellow(figlet.textSync("World Seed", { horizontalLayout: "full" }))
);
console.log(
	"\nWelcome to the World Seed Calculator!\nPress Ctrl+C to quit the application or cancel an operation.\n"
);

const run = async () => {
	let runFlag = true;
	let loggedIn = false;
	let userDetails;

	let loggedInUser = await read("./user.json").catch((err) => {
		console.log("No user logged in");
	});
	if (loggedInUser) {
		loggedIn = true;
		userDetails = loggedInUser;
	}

	while (!loggedIn) {
		// ANCHOR Login
		const login = await loginOrRegister();
		switch (login.loginOrRegister) {
			case "Login":
				userDetails = await getUserDetails();
				await connect();
				await User.findOne(
					{ username: userDetails.username },
					(err, user) => {
						if (err) {
							console.log(err);
						} else {
							if (user.password === userDetails.password) {
								console.log("Login successful");
								write("./user.json", user);
								loggedIn = true;
							} else {
								console.log("Incorrect password");
							}
						}
					}
				).clone();

				break;
			case "Register":
				userDetails = await getUserDetails();
				await connect();
				await User.create(userDetails, (err, user) => {
					if (err) {
						console.log(err);
					} else {
						console.log(
							`Registration successful, you can now log in as ${user.username}`
						);
					}
				});
				break;

			case "Quit":
				loggedIn = true;
				runFlag = false;
				mongoose.connection.close();
				break;
			default:
				console.log("Invalid selection");
				break;
		}
	}

	while (runFlag) {
		let heroStats;
		let allHeroes;

		// ANCHOR Main Menu
		const selection = await mainMenu();
		switch (selection.mainMenu) {
			case "Calculate deadly rings":
				await connect();
				allHeroes = await Hero.find({ user: loggedInUser._id });
				let heroToCalculate = await getHeroSelection(allHeroes);
				heroStats = await Hero.findOne({
					name: heroToCalculate.heroSelection,
				});
				let creatures = await Creature.find({});
				let deadlyRings = await calculateDeadlyRings(
					creatures,
					heroStats
				);
				console.log(deadlyRings);
				break;

			case "View all heroes":
				await connect();
				allHeroes = await Hero.find({ user: loggedInUser._id });
				console.log(allHeroes);
				break;

			case "Add a hero":
				heroStats = await getHeroStats();
				heroStats.user = loggedInUser._id;
				await connect();
				await Hero.create(heroStats, (err, hero) => {
					if (err) {
						console.log(err);
					} else {
						console.log(
							`${hero.name} has been added to the database.`
						);
					}
				});
				break;

			case "Update a hero":
				await connect();
				allHeroes = await Hero.find({ user: loggedInUser._id });
				const heroToUpdate = await getHeroSelection(heroes);
				let statsToUpdate = await Hero.findOne({
					name: heroToUpdate.heroSelection,
				});
				heroStats = await getHeroStats(statsToUpdate);
				await Hero.updateOne(
					{ _id: statsToUpdate._id },
					heroStats,
					(err) => {
						if (err) {
							console.log(err);
						} else {
							console.log(
								`${statsToUpdate.name} has been updated.`
							);
						}
					}
				).clone();
				break;

			case "Remove a hero":
				await connect();
				allHeroes = await Hero.find({ user: loggedInUser._id });
				const heroToDelete = await getHeroSelection(allHeroes);
				await Hero.deleteOne(
					{ name: heroToDelete.heroSelection },
					(err) => {
						if (err) {
							console.log(err);
						} else {
							console.log(
								`${heroToDelete.heroSelection} has been deleted.`
							);
						}
					}
				).clone();
				break;

			case "Logout":
				await remove("./user.json");
				loggedIn = false;
				runFlag = false;
				mongoose.connection.close();
				break;

			case "Quit application":
				runFlag = false;
				loggedIn = false;
				mongoose.connection.close();
				break;
			default:
				console.log("Invalid selection");
				break;
		}
	}
};

run();

// let runFlag = true;
// while (runFlag) {
//     const statsExist = await creatureStats.writeCreatureStats();
//     const selection = await inquirer.getFirstSelection();
//     let arrayOfHeroes = await getHeroes();

//     switch (selection.firstSelection) {
//         case "Calculate deadly rings":
//             heroToCalculate = await inquirer.heroToCalculateFor(
//                 arrayOfHeroes
//             );
//             hero = await read(
//                 `./src/playerStats/${heroToCalculate.heroToCalculate}`
//             );
//             creatures = await read(
//                 "./src/creatureStats/creatureStats.json"
//             );
//             let oneShotCreatures = await deadlyRings.calculateDeadlyRings(
//                 creatures,
//                 hero
//             );
//             console.log(oneShotCreatures);
//             break;

//         case "Enter a hero":
//             const getPlayerStats = await inquirer.getPlayerStats();
//             playerStats.writePlayerStats(getPlayerStats);
//             break;

//         case "Delete a hero":
//             // let arrayOfHeroes = await getHeroes();
//             const heroToDelete = await inquirer.whichHeroToDelete(
//                 arrayOfHeroes
//             );
//             console.log(heroToDelete);
//             deleteFile(`./src/playerStats/${heroToDelete.heroToDelete}`);
//             break;
//         case "Connect":
//             await connect();
//             break;
//         case "Quit application":
//             runFlag = false;
//             break;
//     }
// }
// };
