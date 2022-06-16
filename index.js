// Write your solution in this file!
const employee = {
    name: "Sam" ,
    address: "11 Broadway",
};
function updateEmployeeWithKeyAndValue(Object, key, Value){
    return{
        ...Object,
        [key]: Value,
    };  
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const new_Object = Object.assign({}, employee);
    delete new_Object[key];
    return new_Object;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    Object.assign({}, employee);
    delete employee[key];
    return employee;
}
