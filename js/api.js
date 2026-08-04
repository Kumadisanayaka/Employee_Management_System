const BASE_URL = "https://api.freeprojectapi.com/api/EmployeeApp";

export async function getEmployees() {
    
    const response = await fetch(`${BASE_URL}/GetEmployees`);

    if (!response.ok) {
        throw new Error("Failed to fetch employees");
    }

    return await response.json();

}

