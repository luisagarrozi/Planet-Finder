
const parse = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED'
  && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
  && planet['koi_prad'] < 1.6;
}

fs.createReadStream('kepler_data.csv')
// Pipe is connecting the readable stream source to a writible stream destination
.pipe(parse({
  // passing an object about which character is for comments
  comment: '#',
  columns: true,
}))
  .on('data', (data) => {
    if(isHabitablePlanet(data)) {
      habitablePlanets.push(data);
    }
  })
  .on('error', (err) => {
    console.log(err);
  })
  .on('end', () => {
    console.log(`${habitablePlanets.length} habitable planets found!`);
  });
// parse();