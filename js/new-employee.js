import { getDepartments } from "./api.js";

const departmentId = document.getElementById("departmentId");

async function loadDepartments() {
    
    try {

        const departments = await getDepartments();

        departments.forEach(department => {
            
            const option = document.createElement("option");

            option.value = department.departmentId;
            option.textContent = department.departmentName;

            departmentId.appendChild(option);
            
        });
        
        
    } catch (error) {
        
        console.error(error);
        
    }

}

loadDepartments();