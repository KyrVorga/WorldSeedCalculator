const fs = require("fs").promises;
// generic funtion to read and return an object from a json file
const read = async (location) => {
	const file = await fs.readFile(location, (err) => {
		if (err) throw err;
	});
	return JSON.parse(file.toString());
};

const write = async (location, data) => {
	const file = await fs.writeFile(
		location,
		JSON.stringify(data, null, 4),
		(err) => {
			if (err) throw err;
		}
	);
};

const remove = (location) => {
	try {
		fs.rm(location);
	} catch (err) {
		console.error(err);
	}
};

module.exports = { read, write, remove };
