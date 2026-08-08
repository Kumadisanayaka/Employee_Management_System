import { getEmployees,getDepartments,deleteEmployeeById} from "./api.js";

const employeeCount = document.getElementById("employeeCount");
const searchInput = document.getElementById("searchInput");
const departmentFilter = document.getElementById("departmentFilter");
const employeeContainer = document.getElementById("employeeContainer");

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

            <button class="delete-btn" data-id="${employee.employeeId}">
                Delete
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

//-------View Employee full details----------------//

employeeContainer.addEventListener("click", (event) => {

    if (!event.target.classList.contains("view-btn")) {
        return;
    }

    const employeeId = event.target.dataset.id;

    window.location.href = `employee-details.html?id=${employeeId}`;

});


//------------Delete Employee------------------//

employeeContainer.addEventListener("click", async function(e){


    if(e.target.classList.contains("delete-btn")){


        const id = e.target.dataset.id;


        const confirmDelete = confirm(
            "Are you sure you want to delete this employee?"
        );


        if(confirmDelete){

            try{

                await deleteEmployeeById(id);

                alert("Employee deleted successfully");

                location.reload();


            }catch(error){

                console.log(error);
                alert("Delete failed");

            }

        }

    }

});

