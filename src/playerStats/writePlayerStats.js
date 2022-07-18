const fs = require("fs").promises;

const writePlayerStats = (data) => {
	const json = JSON.stringify(data, null, 4);
	fs.writeFile(`./src/playerStats/heroes/${data.Name}.json`, json, (err) => {
		if (err) {
			throw err;
		}
	});
};

module.exports = { writePlayerStats };
