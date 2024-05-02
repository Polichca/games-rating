const staticFile = require("../appModules/http-utils/static-file");
const { getAllGames, endpoints } = require("../appModules/api/");
const { config, makeRatingFile } = require("../appModules/rating");

async function mainRouteController(res, publicUrl, extname) {
  res.statusCode = 200;
  const data = await getAllGames(endpoints.games);
  await makeRatingFile(config.PATH_TO_RATING_FILE, data);
  staticFile(res, publicUrl, extname);
}

module.exports = mainRouteController;
