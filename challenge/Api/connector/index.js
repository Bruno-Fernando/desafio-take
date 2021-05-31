const axios = require('axios');

const callGitubApi = async () => {
	const config = {
		headers: {
			accept: 'application/vnd.github.v3+json',
		},
	};

	try {
		const response = await axios.get(
			'https://api.github.com/users/takenet/repos?sort=created&direction=asc',
			config
		);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

module.exports = callGitubApi;
