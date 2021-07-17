const pool = require('../../config/database.config');

let employeesService = { };

employeesService.getAll = (onGet)=>{
    pool.query('SELECT * FROM employees', (error, result)=> onGet(error, result));
}

employeesService.getOne = (employeeId, onGet)=>{
    pool.query('SELECT * FROM employees WHERE employee_id = ?', employeeId,  (error, result)=> onGet(error, result));
}

employeesService.addEmployee = (employee, onAdd)=>{
    pool.query('INSERT INTO employees SET ?', employee, (error, result)=> onAdd(error, result));
}

employeesService.updateEmployee = (employee, employeeId, onUpdate)=>{
    pool.query('UPDATE employees SET ? WHERE employee_id = ?', [employee, employeeId], (error, result)=> onUpdate(error, result));
}

employeesService.deleteEmployee = (employeeId, onDelete)=>{
    pool.query('DELETE FROM employees WHERE employee_id = ?', employeeId, (error, result)=> onDelete(error, result));
}

module.exports = employeesService;