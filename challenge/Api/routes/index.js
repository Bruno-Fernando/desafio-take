const express = require('express');
const router = express.Router();
const callGitubApi = require('../connector/index');

router.get('/', async (req, res) => {
	const listRepos = await callGitubApi();
	const filteredRepos = filterRepos(listRepos);

	res.send(filteredRepos);
});

const filterRepos = (list) => {
	const filteredList = list
		.filter((item) => (item.language === 'C#' ? true : false))
		.slice(0, 5)
		.map((item) => {
			const { name, description } = item;

			return { name, description };
		});

	return filteredList;
};

module.exports = router;
