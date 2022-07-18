const CREATURE_ADDITIVE_SCALING = 2;
const CREATURE_MULTIPLICATIVE_SCALING = 1;
const CREATURE_STAT_BASE = 1.04;
const CREATURE_BASE_SCALING = 0.0002;

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

module.exports = { creaturePower };
