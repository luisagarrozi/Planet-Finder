const http = require("http");
const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");



const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();

  const PORT = process.env.PORT || 8000;
  // Lets the server administrator specify the port for the backend and, if none is picked, it defaults to 8000
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();
