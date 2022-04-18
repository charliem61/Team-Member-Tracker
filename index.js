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
  const departmentResponse = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter new department name?",
    },
  ]);
  const newDeptAdd = await db.query(
    "INSERT INTO department SET ?",
    departmentResponse
  );
  StartMenu();
}
async function AddRole() {
  const departments = await db.query(
    "SELECT id as value, name as name FROM DEPARTMENT"
  );
  const roleResponse = await inquirer.prompt([
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
      choices: departments,
    },
  ]);
  const newRoleAdd = await db.query("INSERT INTO role SET ?", roleResponse);
  StartMenu();
}
async function ViewRoles() {
  const role = await db.query("SELECT * from role");
  console.table(role);
  StartMenu();
}

async function AddEmployee() {
  const Roles = await db.query("SELECT * from role");
  const roleData = Roles.map((role) => {
    return { name: role.title, value: role.id };
  });
  const employeeAdd = await inquirer
    .prompt([
      {
        type: "list",
        name: "title",
        message: "Choose a role",
        choices: roleData,
      },
      {
        type: "input",
        name: "first_name",
        message: "Enter their first name",
      },
      {
        type: "input",
        name: "last_name",
        message: "Enter their last name",
      },
      {
        type: "input",
        name: "manager_id",
        message: "Enter the id of their manager",
      },
    ])
    .then(async function (data) {
      let { title, first_name, last_name, manager_id } = data;
      const dataSet = await db.query("INSERT INTO employee SET ?", {
        role_id: data.title,
        first_name: data.first_name,
        last_name: data.last_name,
        manager_id: data.manager_id,
      });
    });
  StartMenu();
}
async function ViewEmployees() {
  const employee = await db.query("SELECT * FROM employee");
  console.table(employee);
  StartMenu();
}