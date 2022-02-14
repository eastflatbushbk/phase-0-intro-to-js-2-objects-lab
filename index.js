// Write your solution in this file!
const employee = { name: 'joe' , streetAddress: '2 main street'} ;
function updateEmployeeWithKeyAndValue(employee, key, value){
     const newEmployee = {...employee};
     newEmployee[key] = value;
     return newEmployee;       
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee.name;
    delete newEmployee.streetAddress;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
     delete employee.name;
     delete employee.streetAddress;    
     return employee;
}