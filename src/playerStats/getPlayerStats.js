const prompt = require("prompt-sync")({ sigint: true });

let playerStats = {
	Health: 0,
	"Death Limit": 0,
	Armor: 0,
	Void: 0,
	Lightning: 0,
	Fire: 0,
	Nature: 0,
	Earth: 0,
	Frost: 0,
	Water: 0,
};

function getPlayerStats() {
	console.log(
		"Welcome to the World Seed Calculator\n\nPlease enter the Stats of your character"
	);
	playerStats.Health = ask("Health: ");
	playerStats.Armor = ask("Armor: ");
	playerStats.Void = ask("Void: ");
	playerStats.Lightning = ask("Lightning: ");
	playerStats.Fire = ask("Fire: ");
	playerStats.Nature = ask("Nature: ");
	playerStats.Earth = ask("Earth: ");
	playerStats.Frost = ask("Frost: ");
	playerStats.Water = ask("Water: ");

	playerStats["Death Limit"] = playerStats.Health * 1.25;

	return playerStats;
}

const data = JSON.stringify(creatureStats, null, 4);

writeFile("./src/creatureStats/creatureStats.json", data, (err) => {
	if (err) {
		throw err;
	}
	console.log("JSON data is saved.");
});

module.exports = { getPlayerStats };
