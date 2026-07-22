let studentsList = [
    { id: 101, name: "Evan", age: 20, marks: 85.5, course: "CS" },
    { id: 102, name: "Jonathan", age: 21, marks: 45.0, course: "Math" },
    { id: 103, name: "Dracula", age: 19, marks: 92.0, course: "Physics" },
    { id: 104, name: "Garena", age: 22, marks: 78.25, course: "Chemistry" }
];

for (let i = 0; i < studentsList.length; i++) {
    if (studentsList[i].marks < 50) continue;
    console.log(studentsList[i].name, studentsList[i].marks);
}

for (let i = 0; i < studentsList.length; i++) {
    if (studentsList[i].marks > 90) {
        console.log("Stopped at", studentsList[i].name);
        break;
    }
}

/*
Expected Output:
Evan 85.5
Dracula 92
Garena 78.25
Stopped at Dracula
*/
