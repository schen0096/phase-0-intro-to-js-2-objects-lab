// Write your solution in this file!
const employee = {
    name: 'Vince',
    streetAddress: "420 69th Street"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee.name = "Sam";
    newEmployee.streetAddress = "11 Broadway";
    return newEmployee;
};

for (const key in employee) {
    delete employee[key];
};

employee.name = 'Sam';

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
};

for (const key in employee) {
    delete employee[key];
};

employee.name = 'Sam';

function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
};

for (const key in employee) {
    delete employee[key];
};

employee.name = 'Sam';

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee.name;
    return employee;
}