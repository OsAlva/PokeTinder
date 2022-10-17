require("dotenv").config();
require("./db");
const express = require("express");
const hbs = require("hbs");
const session = require('express-session')
const app = express();

app.use(session({
    secret: 'patata',
    resave: true,
    saveUninitialized: true
}))

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const capitalize = require("./utils/capitalize");
const projectName = "PokeTinder";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const authRoutes = require("./routes/auth.routes");
const session = require("express-session");
app.use("/auth", authRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
