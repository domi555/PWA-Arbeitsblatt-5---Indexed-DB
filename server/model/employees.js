const fs = require('fs');
const path = require('path');

const f = path.resolve(__dirname, 'employees.json');

const data = fs.readFileSync(f);
let { employees } = JSON.parse(data);

const getEmployees = () => employees;

const deleteEmployees = (id) => {
  employees = employees.filter((el) => el.id !== Number(id));
};

module.exports = { getEmployees, deleteEmployees };
