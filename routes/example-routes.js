import express from "express";
import { handleApiCall } from "../controllers/example-controller.js";

const router = express();

router.get("/", handleApiCall);

export default router;
