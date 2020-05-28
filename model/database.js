require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "chanice_mvp",
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = `DROP TABLE IF EXISTS apartments;
    DROP TABLE IF EXISTS images;
    CREATE TABLE apartments (
      id int NOT NULL AUTO_INCREMENT,
      location varchar(255),
      numBedrooms int,
      numBathrooms int, 
      numParking int,
      monthlyRent int,
      description TEXT,
      PRIMARY KEY (id)
    );
    
    CREATE TABLE images (
      img_id int NOT NULL AUTO_INCREMENT,
      img varchar(255),
      ap_id int,
      PRIMARY KEY (img_id)
    );

    INSERT INTO apartments (location, numBedrooms, numBathrooms, numParking, monthlyRent, description) VALUES ("Nyali, Mombasa", 3,2,3,18000000,"3 bedroom apartment is on sale at a prime area of Nyali near major shopping malls and international schools.
    > 
    > The apartment consists of spacious living room with nice balcony overlooking the nice garden and clean swimming pool. Spacious kitchen, laundry, 3 bedroom one is en suite, tiled floor, modern and strong both interior and exterior.
    > 
    > The compound is clean, secure, with ample stress free parking, perimeter wall fence, clean swimming pool with nice garden, FULL backup generator for all appliances, centralised Dstv and interment.");

    INSERT INTO images (ap_id, img) VALUES (1, "https://www.buyrentkenya.com/uploadedfiles/16/ce/6f/16ce6f20-02b6-438d-bf2d-4aac7ba3453c.JPG"), (1, "https://www.buyrentkenya.com/uploadedfiles/a3/36/9f/a3369f47-e062-4fb7-ab60-7a1a25d9eb54.JPG"), (1, "https://www.buyrentkenya.com/uploadedfiles/55/a6/59/55a659d5-5bfb-4f78-8a18-f45c964594da.JPG");

    
    `;

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(
      "`apartments` and `images` tables have been created successful!"
    );

    console.log("Closing...");
  });

  con.end();
});
