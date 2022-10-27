--ran to see if it will combine tables to get employee table

SELECT employees.id AS id, 
employees.first_name AS first_name, 
employees.last_name AS last_name, 
role.title AS title, 
role.department_id AS department_id , 
role.salary AS salary, employees.manager_id AS manager_id
FROM employees
INNER JOIN role ON role.id = employees.role_id
INNER JOIN department ON department.id = role.department_id