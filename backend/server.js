import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";
import { clerkWebhooks } from "./controllers/webhooks.js";

import educatorRouter from "./routes/educatorRoutes.js";
import { clerkMiddleware } from "@clerk/express";
import connectCloudinary from "./configs/cloudinary.js";
import courseRouter from "./routes/courseRoute.js";

const app = express();
//connect to database

await connectDB();
await connectCloudinary();
//middlewares
app.use(cors());
app.use(clerkMiddleware());
app.use((req, res, next) => {
  console.log("Authorization Header:", req.headers["authorization"]);
  console.log("Auth Object:", req.auth); // Check if Clerk's session info is populated
  next();
});

//routes
app.get("/", (req, res) => res.send("API Working"));
app.post("/clerk", express.json(), clerkWebhooks);
app.use("/api/educator", express.json(), educatorRouter);
app.use("/api/course", express.json(), courseRouter);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
