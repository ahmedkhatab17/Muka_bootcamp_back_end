///////////////////// Day 6 /////////////////////////

////////////// Task 1 /////////////////

function getListStudents() {
    let students = [
        { id: 1, firstName: "ahmed", location: "cairo" },
        { id: 2, firstName: "omar", location: "cairo" },
        { id: 3, firstName: "alaa", location: "alex" }
    ];
    return students;
}
console.log(getListStudents());

////////////// Task 2 /////////////////

function getListStudentIds(students) {
    if (!Array.isArray(students)) {
        return [];
    }
    return students.map(student => student.id);
}
console.log(getListStudentIds(getListStudents()));

////////////// Task 3 /////////////////

function getStudentsByLocation(students, city) {
    return students.filter(student => student.location === city);
}
console.log(getStudentsByLocation(getListStudents(), "alex"));

////////////// Task 4, 5 /////////////////

// i can't do both of them need explaintion























