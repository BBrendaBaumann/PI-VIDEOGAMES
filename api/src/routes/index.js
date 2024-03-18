const { Router } = require("express");

//* controllers Videogames

const postVideogame = require("../controllers/postVideogame");
const getDbVideogames = require("../controllers/getDbVideogames");
const getVideogameByName = require("../controllers/getVideogameByName");
const getAllVideogames = require("../controllers/getAllVideogames");
const getApiVideogames = require("../controllers/getApiVideogames");
const getVideogameById = require("../controllers/getVideogameById");

//* controllers Genres

const getGenres = require("../controllers/getGenres");
const getAllGenres = require("../controllers/getAllGenres");

//* controllers Platforms

const getPlatforms = require("../controllers/getPlatforms");
const getAllPlatforms = require("../controllers/getAllPlatforms");

//! Router 

const router = Router();

// rutas Videogames

router.get("/apivideogames", getApiVideogames);
router.get("/dbvideogames", getDbVideogames);
router.get("/videogames/id/:id", getVideogameById);
router.get("/videogames/name", getVideogameByName);
router.get("/videogames", getAllVideogames);
router.post("/videogames", postVideogame);

// rutas Genres

router.get("/genres", getGenres);
router.get("/getallgenres", getAllGenres);

// rutas Platforms

router.get("/platforms", getPlatforms);
router.get("/getallplatforms", getAllPlatforms);

module.exports = router;