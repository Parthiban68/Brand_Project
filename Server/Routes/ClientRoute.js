const express = require("express");
const ClientRoute = express.Router();
const container = require("../Container/userContainer");

const userContainer = container.getUserController();

ClientRoute.post("/userregistration", (req, res, next) =>
  userContainer.userRegistration(req, res, next)
);

module.exports = ClientRoute;
