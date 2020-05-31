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

#STEPS
[x] the button in de navBar doesn't works!
[x] reorganize the DB by adding more fields
[x] add initial values for 1 apartment int the 2 tables
[x] refact the requests in apartments.js
[x] check the requests on POSTMAN - falta 1!!
[x] put the fetch requests in a separated api file
[x] add a notification if there are no apartments to show
[x] the form should appear only in the home page
[x] the form works?
[x] in the form: add images functionality
[ ] Google Map in the Home page?
[ ] styling the form and the home page
[ ] styling the apartment list
[ ] add a new page for each apartment where we can display the images and read all the information
