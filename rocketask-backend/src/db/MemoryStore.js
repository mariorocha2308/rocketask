class MemoryStore {
	constructor() {
		this.data = {
			tasks: [],
			users: [
				{
					uuid: "NPWz90GjtA",
					user: "admin",
					pass: '1234'
				}
			]
		};
	}

	set(key, value) {
		this.data[key].push(value);
	}

	get(key) {
		return this.data[key];
	}

	delete(key) {
		return this.data[key];
	}

	update(key, id, value) {
		const document = this.data[key].find((document) => document.id === id);
		if (!document) throw `Item with id "${id}" not found`;

		const collection = this.data[key];
		for (let i = 0; i < collection.length; i++) {
			if (collection[i].id === id) {
				// Direct property assignment (faster than spread)
				Object.assign(collection[i], value);
				break;
			}
		}

		return collection;
	}
}

// Singleton instance
module.exports = { useMemory: new MemoryStore() };
