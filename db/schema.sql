

-- Create a new database called 'burgers_db'
DROP DATABASE if EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE  burgers_db;

-- Create the table in the specified schema
CREATE TABLE burgers_db.burgers
(
    burgersId INT NOT NULL
    AUTO_INCREMENT PRIMARY KEY,
    -- primary key column
    burger_name VARCHAR
    (255) NOT NULL,
    devoured boolean NOT NULL
    -- specify more columns here
);
    