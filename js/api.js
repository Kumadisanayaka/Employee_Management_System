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

//----------get employee details by ID----------//

export async function getEmployeeById(id){

    const response = await fetch(`${BASE_URL}/${id}`);

    if(!response.ok){
        throw new Error("Failed to fetch employee");
    }

    return await response.json();

}

//--------------Delete employee---------------//

export async function deleteEmployeeById(id) {
    
    const response = await fetch(`${BASE_URL}/DeleteEmployee?id=${id}`,{
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Delete Failed");
        
    }

    return true;
}

