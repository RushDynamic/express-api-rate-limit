import redisClient from "./redis-client.js";

export default async function checkLimit(token) {
  const result = await redisClient.get(token);
  const remainingHits = result ? 100 - (parseInt(result) + 1) : 99;
  if (result) {
    redisClient.incr(token);
  } else {
    redisClient.setEx(token, 3600, "1");
  }
  return { success: remainingHits >= 0, remainingHits: remainingHits };
}
