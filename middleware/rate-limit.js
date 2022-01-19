import checkLimit from "../services/limit-service.js";

export default async function limit(req, res, next) {
  const apiKey = req.query.apiKey;
  try {
    const { success, remainingHits } = await checkLimit(apiKey);
    if (success) {
      res.header("X-Remaining-Hits", remainingHits);
      next();
    } else {
      res.header("X-Remaining-Hits", 0);
      res.status(429).send("You have reached your limit");
    }
  } catch (error) {
    throw error;
  }
}
