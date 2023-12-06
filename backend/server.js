import express from "express";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import crypto from "crypto";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import localStrategy from "passport-local";
import flash from "connect-flash";
import path from "path";

import authRoute from "./routes/authRoute.js";
import usersRoute from "./routes/usersRoute.js";
import tasksRoute from "./routes/tasksRoute.js";
import companyRoute from "./routes/companysRoute.js";
import rateCardsRoute from "./routes/ratesRoutes.js";
import changeHandoverRoute from "./routes/changeHandoverRoute.js";
import ForMpdSystem from "./routes/mpdSystemRoute.js"; // For MPD System
import ForInfraMsSystem from "./routes/infraMsSystemRoute.js"; // For InfraMs System
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(flash());

app.use(passport.initialize());

//Connect to DB
const port = process.env.PORT || 8000;

//mongoose.set("useUnifiedTopology", true)

mongoose
  .connect(process.env.PROJONLINE_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
  })
  .then(() => {
    console.log("Connected to database sucessfully ");
  })
  .catch((err) => {
    console.log(err);
    console.log("Error on DB connectivity");
  });

mongoose.Promise = global.Promise;
const db = mongoose.connection;

//Express Session Config
app.use(cookieParser(process.env.SECRET));
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 24 * 1000 },
    store: MongoStore.create({ mongoUrl: process.env.PROJONLINE_DB_URI }),
  })
);

app.use("/projonline", authRoute);
app.use("/projonline", usersRoute);
app.use("/projonline", companyRoute);
app.use("/projonline", tasksRoute);
app.use("/projonline", rateCardsRoute);
app.use("/projonline", changeHandoverRoute);
app.use("/projonline", ForMpdSystem); // For MPD System
app.use("/projonline", ForInfraMsSystem); // For InfraMs System

// app.use(express.static(path.join(path.dirname('../frontend/build'), '../frontend/build')));
// app.get("*", function(req, res) {
//   return res.sendFile(path.resolve(path.dirname('../frontend/build'), '../frontend/build','index.html'));
// });

app.use("*", (req, res) => res.status(404).json({ error: "Not found" }));

app.listen(process.env.PORT, () => {
  console.log("Proj_Online server is working on port " + process.env.PORT);
});

export default app;
