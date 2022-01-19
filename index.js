import express from "express";
import exampleRoutes from "./routes/example-routes.js";
import rateLimit from "./middleware/rate-limit.js";
import redisClient from "./services/redis-client.js";
const app = express();

app.listen(3000, async () => {
  await redisClient.connect();
  console.log("Server started listening on port 3000");
});

app.use("/example", rateLimit, exampleRoutes);
