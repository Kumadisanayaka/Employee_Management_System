import { getEmployees} from "./api.js";

const employeeCount = document.getElementById("employeeCount");

async function loadEmployees() {
    const employees = await getEmployees();

    employeeCount.textContent = `${employees.length} Employees`;
    
    employees.forEach(employee => {
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

    console.log(employees);
    
}

loadEmployees();

