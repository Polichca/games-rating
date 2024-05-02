const { getData, getRandomGame } = require("./api-utils");
const endpoints = require("./config");

module.exports = {
  endpoints,
  getAllGames: getData,
  getRandomGame,
};
