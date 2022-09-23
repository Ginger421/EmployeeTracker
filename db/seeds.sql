INSERT INTO departments
VALUES ("Marketing"), ("Engineering"), ("HR")

INSERT INTO roles(title, salary, department_id)
VALUES ("Researcher", 60000, 1), ("Software Developer", 90000, 2), ("Recruiter", 80000, 3)

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES ("Emily", "Jenkins", 2, null), ("Caroline", "Jenkins", 1, 1), ("Kevin", "Jenkins", 3, 1)
