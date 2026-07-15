const students = [];

function collectData() {

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const studentId = document.getElementById("studentId").value.trim();
    const email = document.getElementById("email").value.trim();
    const credit = document.getElementById("credit").value;
    const department = document.getElementById("department").value;

    let valid = true;

    document.getElementById("firstNameError").innerHTML = "";
    document.getElementById("lastNameError").innerHTML = "";
    document.getElementById("studentIdError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("creditError").innerHTML = "";
    document.getElementById("departmentError").innerHTML = "";

    // First Name
    if (firstName == "") {
        document.getElementById("firstNameError").innerHTML = "First Name is required";
        valid = false;
    }

    // Last Name
    if (lastName == "") {
        document.getElementById("lastNameError").innerHTML = "Last Name is required";
        valid = false;
    }

    // Student ID
    if (studentId == "") {
        document.getElementById("studentIdError").innerHTML = "Student ID is required";
        valid = false;
    }
    else if (studentId.indexOf("-") == -1) {
        document.getElementById("studentIdError").innerHTML = "Student ID must contain -";
        valid = false;
    }

    // Email
    if (email == "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        valid = false;
    }
    else if (email.indexOf("@student.aiub.edu") == -1) {
        document.getElementById("emailError").innerHTML = "Invalid AIUB Email";
        valid = false;
    }

    // Credit
    if (credit == "") {
        document.getElementById("creditError").innerHTML = "Credit is required";
        valid = false;
    }
    else if (credit < 0 || credit > 148) {
        document.getElementById("creditError").innerHTML = "Credit must be between 0 and 148";
        valid = false;
    }
    else {
        document.getElementById("creditError").innerHTML = "";
    }

    // Department
    if (department == "") {
        document.getElementById("departmentError").innerHTML = "Department is required";
        valid = false;
    }

    if (valid == false) {
        return false;
    }

    const student = {
        firstName: firstName,
        lastName: lastName,
        studentId: studentId,
        email: email,
        credit: credit,
        department: department
    };

    students.push(student);

    showStudents();

    document.forms[0].reset();

    return false;
}

function showStudents() {

    let table = `
    <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Student ID</th>
        <th>Email</th>
        <th>Credit</th>
        <th>Department</th>
    </tr>
    `;

    students.forEach(function (student) {

        table += `
        <tr>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.studentId}</td>
            <td>${student.email}</td>
            <td>${student.credit}</td>
            <td>${student.department}</td>
        </tr>
        `;

    });

    document.getElementById("studentTable").innerHTML = table;
}