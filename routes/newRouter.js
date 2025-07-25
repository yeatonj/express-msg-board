// routes/newRouter.js
const { Router } = require("express");

const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("new", { message : "This is a new page!" });
});

module.exports = newRouter;