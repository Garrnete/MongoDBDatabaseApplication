// Imports
import express from 'express';
import dotenv from 'dotenv';
import globalErr from "./middleware/globalErr.mjs";
import log from "./middleware/loggingMiddleware.mjs";


// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;


// DB Connection


// Middleware
app.use (express.json());
app.use(log);


// Routes


// Err Handling Middleware
app.use(globalErr);


//  Listener
app.listen(PORT, () => {
  console.log(`Server Runing on Port: ${PORT}`);
});