var express = require("express");
var router = express.Router();
var fs = require("fs");
var path = require("path");
const { v4: uuidv4 } = require("uuid");
var mime = require("mime-types");
const db = require("../model/helper");

// GET apartment filtered list by place
router.get("/", function (req, res, next) {
  const { place } = req.query;
  let query = "";
  if (place)
    query = `SELECT * FROM apartments WHERE location LIKE "%${place}%";`;
  else query = `SELECT * FROM apartments;`;
  db(query)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

// GET apartment filtered list by place
// router.get("/", function (req, res, next) {
//   const { place, bedrooms, bathrooms, cars } = req.query;
//   let query = "";
//   if (place || bedrooms || bathrooms || cars)
//     query = `SELECT * FROM apartments WHERE location LIKE "${place}" AND numBedrooms LIKE ${bedrooms} AND numBathrooms LIKE ${bathrooms} AND numParking LIKE ${cars};`;
//   else query = `SELECT * FROM apartments;`;
//   db(query)
//     .then((results) => {
//       res.send(results.data);
//     })
//     .catch((err) => res.status(500).send(err));
// });

// GET one apartment
router.get("/:id", function (req, res, next) {
  const { id } = req.params;
  db(`SELECT * FROM apartments WHERE id = ${id};`)
    .then((results) => {
      res.send(results.data[0]);
    })
    .catch((err) => res.status(500).send(err));
});

// GET images from one apartment
getImages = (req, res, next) => {
  const { id } = req.params;
  db(`SELECT * FROM images WHERE ap_id = ${id};`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
};

router.get("/:id/images", getImages);

// POST a new apartment into the DB
router.post("/", function (req, res, next) {
  const {
    location,
    numBedrooms,
    numBathrooms,
    numParking,
    monthlyRent,
    description,
  } = req.body;
  db(
    `INSERT INTO apartments (location, numBedrooms, numBathrooms, numParking, monthlyRent, description) VALUES ("${location}","${numBedrooms}", "${numBathrooms}", "${numParking}","${monthlyRent}", "${description}");`
  )
    .then(() => {
      //  We look for the last ID that was insertedgit com
      db(`SELECT * FROM apartments ORDER BY id DESC limit 1;`)
        .then((results) => {
          console.log("Line 62: I'm here");
          // Save it in a variable ap_id
          let ap_id = results.data[0].id;

          // POST the images into the DB.
          // Files are available at req.files
          const { selectedFile } = req.files;
          console.log("Line 69: " + selectedFile);
          console.log("Line 70: I'm here");

          // Save the extension type and create a unic id name
          var extension = mime.extension(selectedFile.mimetype);
          console.log("Line 74: " + extension); /* false? */
          var filename = uuidv4() + "." + extension;
          console.log("Line 76: " + filename);

          // The file which is in...
          var tmp_path = selectedFile.tempFilePath;
          // we want to move it to...
          var target_path = path.join(__dirname, "../public/img/") + filename;
          console.log("Line 82: I'm here");

          // Move the image
          fs.rename(tmp_path, target_path, function (err) {
            if (err) throw err;

            db(
              `INSERT INTO images (ap_id, img) VALUES ("${ap_id}", "${filename}");`
            )
              .then(() => {
                res.send({
                  msg: `Apartment added correctly!`,
                });
              })
              .catch((err) => res.status(500).send(err));
          });
        })
        .catch((err) => res.status(500).send(err));
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
