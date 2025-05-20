"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const rateLimit = require('express-rate-limit');
const routerConfig = require("./controllers/route");
const config = require("./config/config");
const { logger } = require("./helpers/logger");

const init = () => {
	const app = express();
	// Configuraing the standard middlewares.
	setupStandardMiddlewares(app);
	configureApiEndpoints(app);
	app.listen(config.SERVER_PORT);
	console.log(
		`Listening on port ${config.SERVER_PORT} in ${config.NODE_ENV} mode`,
	);
	logger.info(
		`Listening on port ${config.SERVER_PORT} in ${config.NODE_ENV} mode`,
	);
};

const setupStandardMiddlewares = (app) => {
	let configCors = {
		origin: "*",
	};

	// Rate limiter configuration
	const apiLimiter = rateLimit({
		windowMs: 15 * 60 * 1000, // 15 minutes
		max: 30, // Limit each IP to 100 requests per windowMs
		standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
		legacyHeaders: false, // Disable the `X-RateLimit-*` headers
		message: "Too many requests from this IP, please try again later",
	});
	// parse requests of content-type - application/json
	app.use(bodyParser.json());
	// parse requests of content-type - application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(cors(configCors));
	app.use(morgan("dev"));
	app.use("/api/v1/", apiLimiter);
	return;
};

const configureApiEndpoints = (app) => {
	app.use("/api/v1/", routerConfig.init());
	// routerConfig.init(app);
	// define a route handler for the default home page
	app.get("/", (req, res) => {
		res.send("Welcome to express-create application! ");
	});
};

init();
