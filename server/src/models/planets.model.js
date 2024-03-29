const path = require("path");
const { parse } = require("csv-parse");
const fs = require("fs");

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  const isHabitablePlanet =
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6;

  return isHabitablePlanet;
}

const parseOptions = {
  comment: "#",
  columns: true,
};

function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "kepler_data.csv")
    )
      .pipe(parse(parseOptions))
      .on("data", (data) => {
        const isHabitable = isHabitablePlanet(data);

        if (isHabitable) {
          habitablePlanets.push(data);
        }
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        const habitablePlanetsQuantity = habitablePlanets.length;

        console.log(`${habitablePlanetsQuantity} habitable planets found!`);
        resolve();
      });
  });
}

function getAllPlanets() {
  return habitablePlanets;
}

module.exports = {
  loadPlanetsData,
  getAllPlanets,
};
