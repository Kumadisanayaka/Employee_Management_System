import { getEmployeeById } from "./api.js";

const params = new URLSearchParams(window.location.search);

const employeeId = params.get("id");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const gender = document.getElementById("gender");
const department = document.getElementById("department");
const designation = document.getElementById("designation");
const employeeType = document.getElementById("employeeType");
const salary = document.getElementById("salary");
const dateOfJoining = document.getElementById("dateOfJoining");
const employeeIdText = document.getElementById("employeeId");


async function loadEmployee(){

    try {

        const employee = await getEmployeeById(employeeId);

        employeeIdText.textContent = employee.employeeId;
        fullName.textContent = employee.fullName;
        email.textContent = employee.email;
        phone.textContent = employee.phone;
        gender.textContent = employee.gender;
        department.textContent = employee.departmentName;
        designation.textContent = employee.designationName;
        employeeType.textContent = employee.employeeType;
        salary.textContent = employee.salary;
        dateOfJoining.textContent = employee.dateOfJoining;

    } catch(error){

        console.log(error);
        alert("Unable to load employee details");

    }

}

loadEmployee();





