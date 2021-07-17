const employeesController = require('../controllers/employees');

module.exports = (app)=>{
    app
    .get('/api/employees', employeesController.get)
    .get('/api/employees/:employeeId', employeesController.getById)
    .post('/api/employees', employeesController.add)
    .put('/api/employees/:employeeId', employeesController.update)
    .delete('/api/employees/:employeeId', employeesController.delete);
}