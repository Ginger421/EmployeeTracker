const mysql = require("mysql2");
const inquirer = require('inquirer');
const cTable = require('console.table');
var db = require('./connection');
//require('dotenv').config();


console.table([
  {
    name: 'foo',
    age: 10
  }, {
    name: 'bar',
    age: 20
  }
]);

//function to run menu and execute prompts
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
		console.log("Have a nice day!")
}
//end switch
  })
};

menuPrompts();

//add desprtment and inserts the value into table
addDept = () => {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name", 
				message: "What is the name of the new department?",
			}
		]) //end prompt
		.then((input) => {
			console.log(input);
      //department is department table 
			db.query(`INSERT INTO department (name) VALUES ("${input.name}");`, 
			function (error, results) {
				error ? console.log(error)
				: console.log("Department Added!");
		menuPrompts();	
		})
	
}) 
}; //end addDept()

//this adds a role with title, salary and dept id to the role table
addRole = () => {
	inquirer
		.prompt([
			{
				type: "input",
				name: "title", 
				message: "What is the name of the new role?",
			},
      		{
        		type: "input",
        		name: "salary", 
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
			db.query(`INSERT INTO role (title, salary, department_id) VALUES ("${input.title}", "${input.salary}", "${input.department_id}");`, err => {
				if(err) {console.log(err)}
		})

		menuPrompts();
})}; //end addRole()

//add an employee and the first and last names, role id and manager id
addEmp = () => {
	inquirer
		.prompt([
			{
				type: "input",
				name: "first_name", 
				message: "What is the first name of the employee?",
			},
			{
				type: "input",
				name: "last_name",
				message: "What is the last name of the employee?",
			},
      		{
        		type: "input",
        		name: "role_id", 
				message: "What is the role id for this employee?",
      		},
			{
				message: "What is the ID for this employee's manager?",
				type: "input",
				name: "manager_id",
			}
		]) //end prompt
		.then((input) => {
			db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("${input.first_name}", "${input.last_name}", "${input.role_id}", "${input.manager_id}")`,
			(err, result) => {
				if (err) console.log(err)
				console.table(result)
				menuPrompts(); 
			}
			)
		menuPrompts();
		})
}; //end addEmp

//uodate employee role using the id for the employee and updating using the
updateEmpRole= () => {
	inquirer.prompt([
		{
			type: "input",
			message: "What is the id for the employee you want to update?",
			name: "id",
		},
		{
			type: "input",
			message: "What is the id of employee's new role?",
			id: "role_id"
		}
	]).then((input)=> {
		db.query(`UPDATE employees SET ("${input.role_id}") WHERE ("${input.id}")`)
	}
	) //end .then
}; ///end updateemprole()

//view departments
viewDepts= () => {
	db.query("SELECT * from department", function (err, results) {
		if (err) console.log(err)
		console.table(results);
		menuPrompts();
	})
}; //end viewdepts()


// viewRoles table
viewRoles= () => {
	db.query("SELECT * from role", function (err, results) {
		if (err) console.log(err)
		console.table(results);
		menuPrompts();
	})
}; //end viewRoles()


// viewEmployees uses join to join tables and AS to name what is being viewed
viewEmp= () => {
	db.query(`SELECT employees.id AS id, 
	employees.first_name AS first_name, 
	employees.last_name AS last_name, 
	role.title AS title, 
	role.department_id AS department_id , 
	role.salary AS salary, employees.manager_id AS manager_id
	FROM employees
	INNER JOIN role ON role.id = employees.role_id
	INNER JOIN department ON department.id = role.department_id`, 
		(err, result) => {
			if (err) console.log(err)
			console.table(result)
			menuPrompts(); 
		});
}; //end viewEmp()

