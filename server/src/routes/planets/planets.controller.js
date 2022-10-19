// controller is inside the routes folder for easier access, since the router uses this file
const { getAllPlanets } = require("../../models/planets.model");

function httpGetAllPlanets(req, res) {
  return res.status(200).json(getAllPlanets());
}
// return makes sure the function only runs once, avoiding express errors of header already being set

module.exports = {
  httpGetAllPlanets,
};
