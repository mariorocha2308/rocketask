function generateUUID() {
	return 'xxxxxx'.replace(/[x]/g, function() {
        const r = Math.random() * 16 | 0;
        return r.toString(16);
    });
}

module.exports = {
	generateUUID
}
