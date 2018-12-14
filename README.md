# burgertime

### Project Overview
This project was an assignment in the Northwestern Full Stack Coding Program. This project uses a node connection using ORM to manipulate Database data to create New Hamburgers to the database and display them to the webpage. 

### Issues or other things to add
Some of the issues I had with this project was keeping my sql request syntax correct in my ORM as well as models that I had made for the project. I had some trouble getting my online DB via jaws db to work t first. 

## Getting Started
You can fork this repository then download it into your computer. Once that is done you will need to create a .env file which contains your mysql credentials: 
```
const password ={
    id: process.env.Password
}
```

Once that file is created and your mysql password has been plugged into your .env file. Then open your command window and go into the folder. Then on the command line enter: npm install
This will install the npm packages required to run this application. Once those packages are added, it may take some time, then you can use the application.

On the command line type node server.js then connection to the DB will be established the webpage will be able to be loaded on localhost/3000 

Once on the page you will see the burgers currently "On the menu" as well as any of the previours burgers that were eaten. Under every Burgername there will be a button labeled "Burger Time" This will run an alert displaying the message Delish, as well as hitting the db and chaging the value of the burger to devoured which will have it populate on the other table of eaten burgers. 

Bellow that list of eaten burgers you can enter any burger you want and it add it to the db and push it to the page. Allowing you to eat it immidiately. 


### Prerequisites
You will need to fork this repository and pull it to your local drive. Once this is done you will need to create a .env file with your mysql password. As well as taking the burgertime sql data and setting up the DB. You will also need to install the npm packages stated in the package.json file.

### Built With
* Javascript
* Node.js
* NPMs 
    1. mysql https://www.npmjs.com/package/mysql
    1. dotenv  https://www.npmjs.com/package/dotenv
    1. Express https://www.npmjs.com/package/express
    1. Express Handlebars https://www.npmjs.com/package/express-handlebars

### Author
Hugo Villalobos - erithr/github. email: vshugo08@gmail.com
