const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: '',
    database: ''
  },
  console.log(`Connected to the movies_db database.`)
);

function menu() {
    inquirer.createPromptModule([{
        type: 'list',
        name: 'menu options',
        message: 'Please select from the menu options',
        choices: ["View all Departments", "View roles", "Employees", "Add department", "Add role", "Add employee", "Update employee role", "Quit"],
    }])
    .input
    switch (choices) {
        case view all:
            
            break;
    
        default:
            break;
    }
    //end menu function
    
}