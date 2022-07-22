// controller is inside the routes folder for easier access, since the router uses this file
const { planets } = require("../../models/planets.model");

function getAllPlanets(req, res) {
  return res.status(200).json(planets);
}
// return makes sure the function only runs once, avoiding express errors of header already being set

module.exports = {
  getAllPlanets,
};
