// Imports
import express from "express";
import dotenv from "dotenv";
import globalErr from "./middleware/globalErr.mjs";
import log from "./middleware/loggingMiddleware.mjs";
import connectDB from "./db/conn.mjs";

// Route Imports
import beastRoutes from "./routes/beastRoutes.mjs";
import beingRoutes from "./routes/beingRoutes.mjs";
import spiritRoutes from "./routes/spiritRoutes.mjs";

// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// DB Connection
connectDB();

// Middleware
app.use(express.json());
app.use(log);

// Routes
app.use("/api/beasts", beastRoutes);
app.use("/api/beings", beingRoutes);
app.use("/api/spirits", spiritRoutes);

// Err Handling Middleware
app.use(globalErr);

// Listener
app.listen(PORT, () => {
  console.log(`✅ Server Running on Port: ${PORT}`);
});