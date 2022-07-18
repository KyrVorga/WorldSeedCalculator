// actual game calculation
const creaturePower = (level, baseAttack) => {
	return Math.floor(
		(CREATURE_ADDITIVE_SCALING * level +
			(CREATURE_MULTIPLICATIVE_SCALING *
				level *
				(CREATURE_STAT_BASE + level * CREATURE_BASE_SCALING) **
					(level - 1)) /
				2) *
			baseAttack
	);
};

module.exports = {
	creaturePower,
};
