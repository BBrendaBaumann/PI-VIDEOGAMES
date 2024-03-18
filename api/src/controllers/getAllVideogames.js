const axios = require("axios");
const { Videogame, Genre, Platform } = require("../db");
require("dotenv").config();
const { API_KEY } = process.env;

const getAllVideogames = async (req, res) => {
	try {
		let apiGames = [];
		const pageSize = 40;
		const totalPages = Math.ceil(100 / pageSize); // arriba

		const fetchPage = async (page) => {
			try {
				const response = await axios.get(
					`https://api.rawg.io/api/games?key=${API_KEY}&page=${page}&page_size=${pageSize}`
				);
				return response.data.results;
			} catch (error) {
				console.error("Error fetching videogames from API: ", error);
				throw error;
			}
		};

		const requests = [];
		for (let page = 1; page <= totalPages; page++) {
			requests.push(fetchPage(page));
		}

		const responses = await Promise.all(requests); // espero todas las promesas
		responses.forEach((data) => {
			apiGames = apiGames.concat(data); // guardo info
		});
		apiGames = apiGames.slice(0, 100);

		const dbVideogames = await Videogame.findAll({
			include: [{ model: Genre }, { model: Platform }],
		});

		const allVideogames = [...dbVideogames, ...apiGames];

		res.status(200).json(allVideogames);
	} catch (error) {
		console.error("Error fetching videogames: ", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

module.exports = getAllVideogames;