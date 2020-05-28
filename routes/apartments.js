var express = require("express");
var router = express.Router();
const db = require("../model/helper");

// GET appartment list
getAllApartments = (req, res, next) => {
  db(`SELECT * FROM apartments`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
};

// GET appartment filtered list by place
getAllApartmentsFiltered = (req, res, next) => {
  const { place } = req.query;
  db(`SELECT * FROM apartments WHERE location LIKE "%${place}%";`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
};

router.get("/", getAllApartmentsFiltered);

// GET one appartment
router.get("/:id", function (req, res, next) {
  const { id } = req.params;
  db(`SELECT * FROM apartments WHERE id = ${id};`)
    .then((results) => {
      res.send(results.data[0]);
    })
    .catch((err) => res.status(500).send(err));
});

// NOOOOOOOO GET images from one appartment
getImages = (req, res, next) => {
  const { id } = req.params;
  db(`SELECT * FROM images WHERE ap_id = ${id};`)
    .then((results) => {
      res.send(results.data[0]);
    })
    .catch((err) => res.status(500).send(err));
};

router.get("/:id/images", getImages);

// INSERT a new apartment into the DB
router.post("/", function (req, res, next) {
  const {
    location,
    numBedrooms,
    numBathrooms,
    numParking,
    rent_monthly,
    description,
  } = req.body;
  db(
    `INSERT INTO apartments (location, numBedrooms, numBathrooms, numParking, rent_monthly, description) VALUES ("${location}","${numBedrooms}", "${numBathrooms}", "${numParking}","${rent_monthly}", "${description}");`
  )
    .then(() => {
      getAllApartments(req, res);
    })
    .catch((err) => res.status(500).send(err));
});

// INSERT a images into the DB.
router.post("/:id", function (req, res, next) {
  const { img } = req.body; // or req.query?
  const { id } = req.params;
  db(`INSERT INTO apartments (ap_id, img) VALUES ("${id}", "${img}");`)
    .then(() => {
      getAllApartments(req, res);
    })
    .catch((err) => res.status(500).send(err));
});

// DELETE an apartment from the DB
router.delete("/:id", function (req, res, next) {
  const { id } = req.params;
  db(`DELETE FROM apartments WHERE id = ${id};`)
    .then(() => {
      getAllApartments(req, res);
    })
    .catch((err) => res.status(500).send(err));
});
module.exports = router;
