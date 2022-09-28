

const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require('console.table');

// Connect to database
const connection = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: '',
    database: 'activity.tracker_db'
  },
  console.log(`Connected to the activity.tracker_db.`)
);

console.table([
  {
    name: 'foo',
    age: 10
  }, {
    name: 'bar',
    age: 20
  }
]);

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

function menu() {
	inquirer.createPromptModule([
		{
			type: "list",
			name: "options",
			message: "Please select from the menu options",
			choices: [
				"View all Departments",
				"View roles",
				"Employees",
				"Add department",
				"Add role",
				"Add employee",
				"Update employee role",
				"Quit",
			],
		},
	]).input;

	//end menu function
}

switch (input.options) {
	case "View all Departments":
		break;
	case "View roles":
		break;
	case "Employees":
		break;
	case "Add department":
    addDept()
		break;
	case "Add role":
    addRoles()
		break;
	case "Add employee":
		break;
	case "Update employee role":
		break;
	case "Quit":
		break;
	default:
		break;
}

//end switch

function addDept() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "addDepartment",
				message: "What is the name of the department?",
			},
      {
        type: "input",
        name: "departmentId",
        message: "What is the department id?"
      },
		]) //end prompt
		.then((input) => {
			console.log(input);
			insertDepartment(input.addDepartment);
		});
}; //end addDept()


function addRoles() {
  inquirer
  .prompt([{
    type: "input",
    name: "addRole",
    message: "What is the name of the role you would like to add?"
  } 
])
}