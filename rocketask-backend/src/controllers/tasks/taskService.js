const { logger } = require("../../helpers/logger");
const { useMemory } = require("../../db/MemoryStore");
const { DB_KEYS } = require('../../helpers/constants')
const { generateUUID } = require('../../helpers/utils')

const DB = useMemory;

class taskManager {
	async postDocument(req) {
		const { title = '', description = '' } = req.body;
		const id = generateUUID()

		try {
			for (var [key, value] of Object.entries({ title, description })) {
				if(value === '') {
					throw `${key} is required`
				}
				else continue
			}

			DB.set(DB_KEYS.TASK, { id, title, description, status: 'pending', createdAt: new Date().toISOString() });

			return DB.get(DB_KEYS.TASK).find((task) => task.id === id);
		} catch (error) {
			logger.error(error);
			throw error;
		}
	}
	async putDocumentById(req) {
		const { id = 0 } = req.params
		const { title = '', description = '' } = req.body;

		try {
			if(!id) throw "ID in query param is required"

			for (var [key, value] of Object.entries({ title, description })) {
				if(value === '') {
					throw `${key} is required`
				}
				else continue
			}

			const task = DB.update(DB_KEYS.TASK, id, { title, description})

			if(task) {
				return DB.get(DB_KEYS.TASK).find((task) => task.id === id);
			} else {
				throw "Task was not created successfully"
			}
		} catch (error) {
			logger.error(error);
			throw error;
		}
	}
}

module.exports = new taskManager();
