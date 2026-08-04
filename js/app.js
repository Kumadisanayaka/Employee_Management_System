import { getEmployees,getEmployee,addEmployee, getDesignationsByDeptId } from "./api.js";

// async function loadEmployees() {
    
//     const employees = await getEmployees();

//     employees.forEach(employee => {
//         employeeContainer.innerHTML += `
//              <div class="employee-card">
                   
//                 <h3>${employee.fullName}</h3>
//                 <p>Employee ID : ${employee.employeeId}</p>
//                 <p>Department : ${employee.departmentName}</p>
//                 <p></p>
                    
//             </div>
//         `;
//     });

//     console.log(employees);
// }

// loadEmployees();

// async function loadEmployee() {
//     const employee = await getEmployee(8241);

//     console.log(employee);

//     employeeContainer.innerHTML = `
//         <div class="employee-card">
//             <h2>${employee.fullName}</h2>
//             <p>Employee ID: ${employee.employeeId}</p>
//             <p>Department ID: ${employee.departmentId}</p>
//             <p>Contact No: ${employee.phone}</p>
//         </div>
//     `;
// }

// loadEmployee();

const newEmployee = {
    fullName: "Pathum",
    email: "pathum@gmail.com",
    phone: "0705614020",
    gender: "male",
    dateOfJoining: "2026-08-04T17:11:43.041Z",
    departmentId: 2,
    designationId: 3,
    employeeType: "string",
    salary: 1500
};


async function createEmployee() {
    const result = await addEmployee(newEmployee);

    console.log(result);
}

createEmployee();

// async function loadDesignations() {
//     const designations = await getDesignationsByDeptId(2);

//     console.log(designations);
// }

// loadDesignations();


