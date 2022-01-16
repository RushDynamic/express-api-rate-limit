import express from "express";
import exampleRoutes from "./routes/example-routes.js";
const app = express();

app.listen(3000, () => {
  console.log("Server started listening on port 3000");
});

app.use("/example", exampleRoutes);
