# my-first-MVP

##Full Stack Development mvp

BUILD YOUR FIRST full stack app using React, Node/Express, and MySQL.

##Setup
###Dependencies
Run npm install in project directory. This will install server-related dependencies such as express.
cd client and run npm install. This will install client dependencies (React).
Database Prep
Access the MySQL interface in your terminal by running mysql -u root -p
Create a new database called hhk
: create database hhk;

Add a .env file to the main folder of this repository containing the MySQL authentication information for MySQL user. For example:
DB_HOST=localhost
DB_USER=root
DB_NAME=hhk
DB_PASS=YOURPASSWORD
Run npm run migrate in the main folder of this repository, in a new terminal window. This will create a table called 'apartments' in your database.

Make sure you understand how the apartments
table is constructed. In your MySQL console, you can run use hhk; and then describe apartments
; to see the structure of the apartments
table.

Development
Run npm start in project directory to start the Express server on port 5000
cd client and run npm start to start client server in development mode with hot reloading in port 3000.
Basic Requirements
