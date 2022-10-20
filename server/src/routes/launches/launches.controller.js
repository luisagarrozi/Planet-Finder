const { getAllLaunches, addNewLaunch } = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
 return res.status(200).json(getAllLaunches())
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;
  if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
    return res.status(404).json({
      error: 'Missing required data'
    })
  }

  launch.launchDate = new Date(launch.launchDate);
  //check if launch date is an actual date
  if (isNaN(launch.launchDate)) {
    return res.status(404).json({
      error: 'Invalid launch date'
    })
  }

  addNewLaunch(launch)
  return res.status(201).json(launch);
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch
};