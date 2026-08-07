const BASE_URL = "https://api.freeprojectapi.com/api/EmployeeApp";

//--------------get employees----------------//

export async function getEmployees() {
    
    const response = await fetch(`${BASE_URL}/GetEmployees`);

    if (!response.ok) {
        throw new Error("Failed to fetch employees");
    }

    return await response.json();

}

//-----------get department-----------------//

export async function  getDepartments() {

    const response = await fetch(`${BASE_URL}/GetDepartments`);

    if (!response.ok) {
        throw new Error("Failed to fetch departments");
        
    }

    return await response.json();
    
}

