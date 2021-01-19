USE employee_tracker_db;

INSERT INTO departments (name)
VALUES ("HR"), ("Accounting"), ("Sales"), ("Engineering");

INSERT INTO roles (title, salary, department_id)
VALUES ("Manager", 75000, 1);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Amethyst", "White", 1, NULL);