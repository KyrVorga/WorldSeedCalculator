const fs = require("fs").promises;

const deleteFile = (heroToDelete) => {
	try {
		fs.unlink(heroToDelete);
	} catch (err) {
		console.error(err);
	}
};

module.exports = { deleteFile };
