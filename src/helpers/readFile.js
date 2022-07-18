const fs = require("fs").promises;
// generic funtion to read and return an object from a json file
const read = async (location) => {
	const data = await fs.readFile(location, (err, data) => {
		if (err) throw err;
	});
	return JSON.parse(data.toString());
};

module.exports = { read };
