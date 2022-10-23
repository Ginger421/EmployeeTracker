const mysql = require("mysql2");
const inquirer = require('inquirer');
const cTable = require('console.table');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'Tadgage#2627',
    database: 'tracker_db'  
  },
  console.log(`Connected to the tracker_db.`)
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

function menuPrompts() {
	inquirer.prompt([{	
			name: "options",
			type: "list",
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
			]
		}])
	.then((input) => {
		switch (input.options) {
	case "View all Departments":
    viewDepts()
		break;
	case "View all roles":
    viewRoles()
		break;
	case "View all employees":
	viewEmp()
		break;
	case "Add department":
    addDept();
		break;
	case "Add role":
    addRole()
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
		console.log("Have a nice day!")
}
//end switch
  })
};

menuPrompts();


addDept = () => {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name", //is referencing name col from department table
				message: "What is the name of the new department?",
			}
		]) //end prompt
		.then((input) => {
			console.log(input);
      //department is department table 
			db.query('INSERT INTO department (name) VALUE (name)', error => {
				if(error) {console.log(error)}
		})
menuPrompts();
}); //end addDept()
}

addRole = () => {
	inquirer
		.prompt([
			{
				type: "input",
				name: "title", //is referencing title col from role table
				message: "What is the name of the new role?",
			},
      	{
        	type: "input",
        	name: "salary", //ref salary col in table
			message: "What is the salary for this role?",
      	},
		{
			type: 'input',
			name: "department_id", 
			message: "What id the id of the department this role belongs to?"
		}
		]) //end prompt
		.then((input) => {
			console.log(input)
      //role is role table 
			db.query('INSERT INTO role (title, salary, department_id) VALUE (title, salary, department_id)', err => {
				if(err) {console.log(err)}
		})
})}; //end addRole()


addEmp = () => {
	inquirer
		.prompt([
			{
				type: "input",
				name: "first_name", //is referencing table
				message: "What is the first name of the employee?",
			},
			{
				type: "input",
				name: "last_name", //is referencing table
				message: "What is the last name of the employee?",
			},
      	{
        	type: "input",
        	name: "role_id", //ref table
			message: "What is the role id for this employee?",
      	},
		{
			message: 'Is this employee a manager?',
			type: "list",
			choices: ['yes', 'no'],
			name: "isManager",
		}
		]) //end prompt
		.then((input) => {
			console.log(input);
			if(input.isManager === "yes") {
				delete input.isManager
				db.query('INSERT INTO employees (first_name, last_name, role_id) VALUE (first_name, last_name, role_id)', error => {
					if(error) {console.log(error)}
				})
			} else if (input.isManager === 'no') {
				inquirer.prompt([{
					type: "input",
					name: "manager_id",
					message: "What is the id of this employee's manager?"
				}])
				.then(notManager => {
					delete input.isManager
					let newEmployee = {
						...input,
						...notManager
					}
					db.query('INSERT INTO employees () ? newEmployee', err)
				})
			}

		
		})
}; //end addEmp


updateEmpRole= () => {
	inquirer.prompt([
		{
			type: input,
			message: "What is the id for the employee you want to update?",
			name: id
		}
	]).then((input)=> {
		db.query
	}
	) //end .then
}; ///end updateemprole()

viewDepts= () => {

}; //end viewdepts()

// viewRoles();

// viewEmp();
