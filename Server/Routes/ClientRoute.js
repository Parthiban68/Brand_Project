const express = require("express");
const ClientRoute = express.Router();
const container = require("../Container/userContainer");

const userContainer = container.getUserController();

//Test Route
ClientRoute.get("/testapi", (req, res, next) =>
  userContainer.testapi(req, res, next)
);

//userRegistration Router
ClientRoute.post("/userreg", (req, res, next) =>
  userContainer.userRegistration(req, res, next)
);

module.exports = ClientRoute;
