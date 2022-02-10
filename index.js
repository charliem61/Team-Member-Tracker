const mysql = require("mysql2");
const db = require("./db/connection");
const inquirer = require("inquirer");

function StartMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "Choose Company Data",
        choices: [
          "View Departments",
          "View Roles",
          "View Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
        ],
      },
    ])
    .then((answer) => {
      statement = answer.option;
      switch (statement) {
        case "View Departments":
          ViewDepartment();
          break;
        case "View Roles":
          ViewRoles();
          break;
        case "ViewEmployees":
          ViewEmployees();
          break;
        case "Add Department":
          AddDepartment();
          break;
        case "Add Role":
          AddRole();
          break;
         case "Add Employee":
          AddEmployee();
          break;
      }
    });
}
async function ViewDepartment() {
  const department = await db.query("SELECT * FROM department");
  console.table(department);
  StartMenu();
}
StartMenu();

async function AddDepartment() {
  const departmentResponse = await inquirer
    .prompt([
      {
        type: "input",
        name: "id",
        message: "What would you like the id to be?",
      },
      {
        type: "input",
        name: "name",
        message: "Enter new department name?",
      },
    ])
    .then(async function (answer) {
      let { id, name } = answer;
    });
}

/// BUILD VIEW ROLES FUNCTION
/// BUILD VIEW EMPLOYESS FUNCTION
