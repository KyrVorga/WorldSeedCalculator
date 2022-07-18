const fs = require("fs").promises;

const getHeroes = async () => {
	let arrayOfHeroes = [];
	try {
		const files = await fs.readdir("./src/playerStats/heroes");
		for (const file of files) arrayOfHeroes.push(file);
	} catch (err) {
		console.error(err);
	} finally {
		return arrayOfHeroes;
	}
};

module.exports = { getHeroes };
