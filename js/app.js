import { getEmployees,getDepartments} from "./api.js";

const employeeCount = document.getElementById("employeeCount");
let searchInput = document.getElementById("searchInput");
let employees = [];
let departmentFilter = document.getElementById("departmentFilter");


async function loadEmployees() {
     employees = await getEmployees();

    renderEmployees(employees);
    employeeCount.textContent = `${employees.length} Employees`;

    console.log(employees);
    
}

loadEmployees();

//--------search employee------------//

searchInput.addEventListener("input",() => {
    
    const searchText = searchInput.value.toLowerCase().trim();

    if(searchText === ""){

        renderEmployees(employees);
        employeeCount.textContent = `${employees.length} Employees`;

        return;
    }

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

            <h3>${employee.fullName}</h3>

            <p>
                Department:
                ${employee.departmentName}
            </p>

            <p>
                Designation:
                ${employee.designationName}
            </p>

            <p>
                Type:
                ${employee.employeeType}
            </p>


            <button class="view-btn" data-id="${employee.employeeId}">
                View Details
            </button>

        </div>

        `;

    });

}

//-----------------Load Departments----------------//

async function loadDepartments() {
    
    const departments = await getDepartments();

    departments.forEach(department =>{
        departmentFilter.innerHTML += `
            <option value="${department.departmentName}">
                    ${department.departmentName}
            </option>
        `
    })

}

loadDepartments();

departmentFilter.addEventListener("change",()=>{

    const selectedDepartment = (departmentFilter.value);

    if (selectedDepartment === "all") {
        renderEmployees(employees);
        employeeCount.textContent = `${employees.length} Employees`;
        return;
    }

    const filteredEmployees = employees.filter(employee =>{
        return employee.departmentName === (selectedDepartment);
    })

    renderEmployees(filteredEmployees);
    employeeCount.textContent = `${filteredEmployees.length} Employees`;

})
