const employeesService = require('../services/employees');
const status = require('../constants/status');

let employeesController = { };

employeesController.get = (req, res)=>{
    employeesService.getAll((error, result)=>{
        if(error) res.status(status.BAD_REQUEST).send({ message: 'Ha ocurrido un error al obtener empleados', status: status.BAD_REQUEST });
        else res.status(status.OK).send({ result });
    });
}

employeesController.getById = (req, res)=>{
    const { employeeId } = req.params;
    
    employeesService.getOne(employeeId, (error, result)=>{
        if(error) res.status(status.BAD_REQUEST).send({ message: 'Ha ocurrido un error al obtener el empleado', status: status.BAD_REQUEST });
        else if(result.length === 0) res.status(status.NOT_FOUND).send({ message: 'Empleado no encontrado', status: status.NOT_FOUND });
        else res.status(status.OK).send({ result });
    });
}

employeesController.add = (req, res)=>{
    const employee = req.body;

    employeesService.addEmployee(employee, (error, result)=>{
        console.log(error);
        if(error) res.status(status.BAD_REQUEST).send({ message: 'Ha ocurrido un error al obtener', status: status.BAD_REQUEST });
        else res.status(status.OK).send({ message: 'Empleado guardado correctamente' });
    });
}

employeesController.update = (req, res)=>{
    const { employeeId } = req.params;
    const employee = req.body;

    employeesService.updateEmployee(employee, employeeId, (error, result)=>{
        if(error) res.status(status.BAD_REQUEST).send({ message: 'Ha ocurrido un error al modificar', status: status.BAD_REQUEST });
        else res.status(status.OK).send({ message: 'Empleado modificado correctamente' });
    });
}

employeesController.delete = (req, res)=>{
    const { employeeId } = req.params;

    employeesService.deleteEmployee(employeeId, (error, result)=>{
        if(error) res.status(status.BAD_REQUEST).send({ message: 'Ha ocurrido un error al eliminar', status: status.BAD_REQUEST });
        else res.status(status.OK).send({ message: 'Empleado eliminado correctamente' });
    });
}

module.exports = employeesController;