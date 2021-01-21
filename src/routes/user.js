const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    default_avatar: "/img/deliveries.svg",
  });
});

module.exports = router;
