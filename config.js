let config = {
	MONGO: {
		MONGO_URL: (process.env.MONGO_URL || 'mongodb://localhost:27017/questiondb')
	},
	NRP: {
		port : 6379, // default redis port number
		scope: 'QuestionManager' //scope for this application
	}
};

module.exports = config;