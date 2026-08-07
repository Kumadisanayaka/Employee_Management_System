import { getEmployees} from "./api.js";

const employeeCount = document.getElementById("employeeCount");
let searchInput = document.getElementById("searchInput");
let employees = [];

async function loadEmployees() {
     employees = await getEmployees();

    renderEmployees(employees);
    employeeCount.textContent = `${employees.length} Employees`;

    console.log(employees);
    
}

loadEmployees();

//--------search employee------------//

searchInput.addEventListener("input",() => {
    
    const searchText = searchInput.value.toLowerCase();

    const filteredEmployees = employees.filter(employee => {

        return employee.fullName.toLowerCase().includes(searchText) || 
                employee.email.toLowerCase().includes(searchText);

    });

    renderEmployees(filteredEmployees);
    employeeCount.textContent = `${renderEmployees.length} Employees`;
})

//------render Employees--------//

function renderEmployees(employeeList) {
    
    employeeContainer.innerHTML = "";

    employeeList.forEach(employee => {
        employeeContainer.innerHTML += `
            <div class="employee-card">

            <div class="employee-card-header">
                <h3>${employee.fullName}</h3>
                <span>ID: ${employee.employeeId}</span>
            </div>

            <div class="employee-details">

                <p>
                    <strong>Email:</strong>
                    ${employee.email}
                </p>

                <p>
                    <strong>Phone:</strong>
                    ${employee.phone}
                </p>

                <p>
                    <strong>Gender:</strong>
                    ${employee.gender}
                </p>

                <p>
                    <strong>Date of Joining:</strong>
                    ${employee.dateOfJoining}
                </p>

                <p>
                    <strong>Department:</strong>
                    ${employee.departmentName}
                </p>

                <p>
                    <strong>Designation:</strong>
                    ${employee.designationName}
                </p>

                <p>
                    <strong>Employee Type:</strong>
                    ${employee.employeeType}
                </p>

                <p>
                    <strong>Salary:</strong>
                    $${employee.salary}
                </p>

            </div>

        </div>
        `;
    });
}

