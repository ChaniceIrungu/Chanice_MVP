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
      numBeds int,
      num Bathrooms int, 
      numParking int,
      PRIMARY KEY (id)
    );
    
    CREATE TABLE images (
      ap_id int NOT NULL,
      img NOT NULL,
      PRIMARY KEY (ap_id)
    );
    
    `;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `apartments` was successful!");

    console.log("Closing...");
  });

  con.end();
});
