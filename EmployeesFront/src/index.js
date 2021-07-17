const getEmployees = ()=>{
    const xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = (response)=>{
        if(response.target.status === 200 && response.target.readyState === 4){
            console.log(JSON.parse(response.target.response));
        }
    }

    xmlHttp.open('GET', 'http://localhost:4000/api/employees', true);
    xmlHttp.send();
}

getEmployees();

const getEmployee = ()=>{
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = (response)=>{
        if(response.target.status === 200 && response.target.readyState === 4){
            console.log(JSON.parse(response.target.response));
        }
    }

    xmlHttp.open('GET', 'http://localhost:4000/api/employees/4', true);
    xmlHttp.send();
}

getEmployee();

const postEmployee = ()=>{
    const xmlHttp = new XMLHttpRequest();

    let employee = { name: 'Jazmín', 
    lastname: 'Gutierrez', 
    phone: '8093211122', 
    salary: 40000, 
    department: 'Administración' };

    xmlHttp.onreadystatechange = (response)=>{
        if(response.target.status === 200 && response.target.readyState === 4){
            console.log(JSON.parse(response.target.response));
        }
    }

    xmlHttp.open('POST', 'http://localhost:4000/api/employees', true);
    xmlHttp.setRequestHeader('content-type', 'application/json');
    xmlHttp.send(JSON.stringify(employee));
}

//postEmployee();

const updateEmployee = ()=>{
    const xmlHttp = new XMLHttpRequest();

    const employee = {
        name: 'Jazmín',
        lastname: 'Gutierrez', 
        phone: '8093211223',
        salary: 45000,
        department: 'Administración'
    };

    xmlHttp.onreadystatechange = (response)=>{
        if(response.target.status === 200 && response.target.readyState === 4){
            console.log(JSON.parse(response.target.response));
        }
    }

    xmlHttp.open('PUT', 'http://localhost:4000/api/employees/5', true);
    xmlHttp.setRequestHeader('content-type', 'application/json');
    xmlHttp.send(JSON.stringify(employee));
}

//updateEmployee();

const deleteEmployee = ()=>{
    const xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = (response)=>{
        if(response.target.status === 200 && response.target.readyState === 4){
            console.log(JSON.parse(response.target.response));
        }
    }

    xmlHttp.open('DELETE', 'http://localhost:4000/api/employees/3', true);
    xmlHttp.send();
}

deleteEmployee();