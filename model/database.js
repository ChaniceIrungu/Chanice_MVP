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

    INSERT INTO apartments (location, numBedrooms, numBathrooms, numParking, monthlyRent, description) VALUES ("Mombasa", 3,2,3,18000000,"3 bedroom apartment is on sale at a prime area of Nyali near major shopping malls and international schools.
    > 
    > The apartment consists of spacious living room with nice balcony overlooking the nice garden and clean swimming pool. Spacious kitchen, laundry, 3 bedroom one is en suite, tiled floor, modern and strong both interior and exterior.
    > 
    > The compound is clean, secure, with ample stress free parking, perimeter wall fence, clean swimming pool with nice garden, FULL backup generator for all appliances, centralised Dstv and interment.");

    INSERT INTO images (ap_id, img) VALUES (1, "https://static.apartmentbarcelona.com/mobile/imageWeb/Apartamentos/ID2839/barcelona-apartments-2839-0.jpg");

    INSERT INTO apartments (location, numBedrooms, numBathrooms, numParking, monthlyRent, description) VALUES ("Nairobi", 2,3,1,20000000,"2 bedroom apartment is on sale at a prime area of Nyali near major shopping malls and international schools.
    > 
    > The apartment consists of spacious living room with nice balcony overlooking the nice garden and clean swimming pool. Spacious kitchen, laundry, 2 bedroom one is en suite, tiled floor, modern and strong both interior and exterior.
    > 
    > The compound is clean, secure, with ample stress free parking, perimeter wall fence, clean swimming pool with nice garden, FULL backup generator for all appliances, centralised Dstv and interment.");

    INSERT INTO images (ap_id, img) VALUES (2, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTOHMb5IUl9K7HaDYRcTZhZCm27KenaIXfL6w29FnMbXGb1EMsA&s");

    INSERT INTO apartments (location, numBedrooms, numBathrooms, numParking, monthlyRent, description) VALUES ("Lodwar", 4,2,2,25000000,"4 bedroom apartment is on sale at a prime area of Nyali near major shopping malls and international schools.
    > 
    > The apartment consists of spacious living room with nice balcony overlooking the nice garden and clean swimming pool. Spacious kitchen, laundry, 4 bedroom one is en suite, tiled floor, modern and strong both interior and exterior.
    > 
    > The compound is clean, secure, with ample stress free parking, perimeter wall fence, clean swimming pool with nice garden, FULL backup generator for all appliances, centralised Dstv and interment.");

    INSERT INTO images (ap_id, img) VALUES (3, "https://img.freepik.com/free-photo/luxurious-living-room-loft-villa-apartment-penthouse_41487-669.jpg?size=626&ext=jpg");




    
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
