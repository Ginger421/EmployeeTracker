const mysql = require("mysql2");
const inquirer = require('inquirer');
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

	inquirer.prompt([
		{
			type: "list",
			name: "options",
			message: "Please select from the menu options",
			choices: [
				"View all Departments",
				"View all roles",
				"View all employees",
				"Add department",
				"Add role",
				"Add employee",
				"Update employee role",
				"Quit",
			],
		},
	]).then(menu=> {
switch (menu.options) {
	case "View all Departments":
    viewDepts()
		break;
	case "View all roles":
    viewRoles()
		break;
	case "View all employees":
		break;
	case "Add department":
    addDept()
		break;
	case "Add role":
    addRoles()
		break;
	case "Add employee":
    addEmp()
		break;
	case "Update employee role":
    updateEmpRole()
		break;
	case "Quit":
		break;
	default:
		break;
}

//end switch
  });




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