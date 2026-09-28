const http = require("http");

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;

  res.setHeader("Content-Type", "application/json");

  // Handle GET / Switch Routes
  switch (url) {
    case "/":
    case "/home":
      res.writeHead(200);
      res.end(
        JSON.stringify({
          status: "Success",
          message: "Welcome To the Home Page",
        }),
      );
      break;

    case "/about":
      res.writeHead(200);
      res.end(
        JSON.stringify({
          status: "success",
          message: "This is the About Page",
          developer: "Rakesh Choudhary",
        }),
      );
      break;

    default:
      res.writeHead(404);
      res.end(
        JSON.stringify({
          status: "error",
          message: "Route Not Found",
        }),
      );
      break;
  }
});

server.listen(9000, () => {
  console.log("Running Server on http://localhost:9000");
});
