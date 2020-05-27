var express = require("express");
var router = express.Router();
const db = require("../model/helper");
getAllApartments = (req, res, next) => {
  db(`SELECT * FROM apartments`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
};
getAllApartmentsFiltered = (req, res, next) => {
  const { place } = req.query;
  db(`SELECT * FROM apartments WHERE location LIKE "%${place}%";`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
};
// GET appartment list
router.get("/", getAllApartmentsFiltered);
// GET one appartment
router.get("/:id", function (req, res, next) {
  //your code here
  const { id } = req.params;
  db(`SELECT * FROM apartments WHERE id = ${id};`)
    .then((results) => {
      res.send(results.data[0]);
    })
    .catch((err) => res.status(500).send(err));
});
// INSERT a new apartment into the DB
router.post("/", function (req, res, next) {
  //your code here
  const {
    image,
    location,
    number_of_bedrooms,
    parking_space,
    monthly_rent,
  } = req.body;
  db(
    `INSERT INTO apartments(image, location,
      number_of_bedrooms,
      parking_space,monthly_rent
      ) VALUES ( "house1.jpg","${location}", 
        "${number_of_bedrooms}",
        "${parking_space}","${monthly_rent}");`
  )
    .then(() => {
      getAllApartments(req, res);
    })
    .catch((err) => res.status(500).send(err));
});
// DELETE an apartment from the DB
router.delete("/:id", function (req, res, next) {
  //your code here
  const { id } = req.params;
  db(`DELETE FROM apartments WHERE id = ${id};`)
    .then(() => {
      getAllApartments(req, res);
    })
    .catch((err) => res.status(500).send(err));
});
module.exports = router;
