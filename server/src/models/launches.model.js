const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId) {
  return launch.has(launchId);
}
function getAllLaunches() {
  return Array.from(launches.values())
}

function addNewLaunch(launch) {
  // increment flight number by 1, so the client doesn't need to keep track of that
  latestFlightNumber++; 
  // object.assign will assign a few additional properties to our launch object.
  // If any properties are both in the launch object and the new object, the new object will override the existing properties
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customers: ['ZTM', 'NASA'],
      flightNumber: latestFlightNumber,
    })
  ) 
}

function abortLaunchById(launchId) { 
  const abortedLaunch = launches.get(launchId)
  abortedLaunch.upcoming = false;
  abortedLaunch.success = false;
  return abortedLaunch;
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
  existsLaunchWithId,
  abortLaunchById
}; 