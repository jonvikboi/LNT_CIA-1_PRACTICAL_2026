let studentsList = [
    { id: 101, name: "Evan", age: 20, marks: 85.5, course: "CS" },
    { id: 102, name: "Jonathan", age: 21, marks: 45.0, course: "Math" },
    { id: 103, name: "Dracula", age: 19, marks: 92.0, course: "Physics" },
    { id: 104, name: "Garena", age: 22, marks: 78.25, course: "Chemistry" }
];

studentsList.push({ id: 105, name: "Woods", age: 23, marks: 95.5, course: "IT" });
let highest = studentsList[0];
for (let i = 1; i < studentsList.length; i++) {
    if (studentsList[i].marks > highest.marks) {
        highest = studentsList[i];
    }
}
console.log(highest.name, highest.marks);

/*
Expected Output:
Woods 95.5
*/
