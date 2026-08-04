const BASE_URL = "https://api.freeprojectapi.com/api/EmployeeApp";

export async function getEmployees() {
    
    const response = await fetch(`${BASE_URL}/GetEmployees`);

    if (!response.ok) {
        throw new Error("Failed to fetch employees");
    }

    return await response.json();

}

export async function getEmployee(id) {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch employee");
    }

    return await response.json();
}

export async function addEmployee(employee) {
    const response = await fetch(`${BASE_URL}/CreateEmployee`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.log("API Error:", errorText);

        throw new Error("Failed to add employee");
    }

    return await response.json();
}

export async function getDesignationsByDeptId(departmentId) {
    const response = await fetch(
        `${BASE_URL}/GetDesignationsByDeptId?deptId=${departmentId}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch designations");
    }

    return await response.json();
}