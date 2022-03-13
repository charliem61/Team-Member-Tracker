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
        case "View Employees":
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
        name: "name",
        message: "Enter new department name?",
      },
    ])
    const newDeptAdd=await db.query("INSERT INTO department SET ?",departmentResponse)
    StartMenu();

}
async function AddRole() {
  const departments=await db.query("SELECT id as value, name as name FROM DEPARTMENT")
  const roleResponse = await inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Enter new role name?",
      }, 
      {
        type: "input",
        name: "salary",
        message: "Enter new salary?",
      },
      {
        type: "list",
        name: "department_id",
        message: "Choose department?",
        choices: departments
      },
    ])
    const newRoleAdd=await db.query("INSERT INTO role SET ?",roleResponse)
    StartMenu();

}

/// BUILD VIEW ROLES FUNCTION
/// BUILD VIEW EMPLOYESS FUNCTION
