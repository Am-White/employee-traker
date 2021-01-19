const { resourceLimits } = require("worker_threads");
const mysql = require("mysql");
const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const cTable = require("console.table");

const db = require("./db");
const connection = require("./db/connection");

//Logo specifics
console.log(
    logo({
        name: 'Employee Database',
        font: 'Big',
        lineChars: 15,
        padding: 2,
        margin: 3,
        borderColor: 'blue',
        logoColor: 'white',
        textColor: 'blue',
    })
        .emptyLine()
        .right('version 1.0')
        .emptyLine()
        .center('Create, track and update departments, roles and employees!')
        .render()
);

//First action asked to user
function askForAction() {
    inquirer.prompt({
        message: "Choose something to do",
        name: "action",
        type: "list",
        choices: [
            "VIEW_DEPARTMENTS",
            "VIEW_ROLES",
            "VIEW_EMPLOYEES",
            "CREATE_DEPARTMENT",
            "CREATE_ROLE",
            "CREATE_EMPLOYEE",
            "UPDATE_EMPLOYEE_ROLE",
            "QUIT"
        ]
    }).then((res) => {
        switch (res.action) {
            case "VIEW_DEPARTMENTS": viewDepartments();
            return;

            case "VIEW_ROLES": viewRoles();
            return;

            case "VIEW_EMPLOYEES": viewEmployees();
            return;

            case "CREATE_DEPARTMENT": createDepartment();
            return;

            case "CREATE_ROLES": createRoles();
            return;

            case "CREATE_EMPLOYEE": createEmployee();
            return;

            case "UPDATE_EMPLOYEE_ROLE": updateEmployeeRole();
            return;

            default:
                connection.end();

        }
    })
}

//Functions for each case in order
function viewDepartments() {

}

function viewRoles() {

}

function viewEmployees() {

}

function createDepartment() {

}

function createRoles() {

}

function createEmployee() {

}

function updateEmployeeRole() {

}

askForAction();

db.getDepartments().then((results) => {
    console.log(results);
});