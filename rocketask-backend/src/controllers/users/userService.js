const { logger } = require("../../helpers/logger");
const { useMemory } = require("../../db/MemoryStore");
const { DB_KEYS } = require("../../helpers/constants");
const { generateAccessToken } = require("../../helpers/jwt");

const DB = useMemory;

class userManager {
	async auth(req) {
		const { user = '', password = '' } = req.body;

		try {
			for (var [key, value] of Object.entries({ user, password })) {
				if (value === "") {
					throw `${key} is required`;
				} else continue;
			}

			const userDB = DB.get(DB_KEYS.USER).find(session => session.user === user && session.pass === password)

			if (!userDB) throw `Account not saved in DB`;

			const profile = {
				uid: userDB.uuid,
				user: userDB.user,
				access_token: generateAccessToken({ id: user.uuid, email: user.email }),
			};

			return profile
		} catch (error) {
			logger.error(error);
			throw error;
		}
	}
}

module.exports = new userManager();
