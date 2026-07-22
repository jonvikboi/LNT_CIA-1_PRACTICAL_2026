let studentsList = [
    { id: 101, name: "Evan", age: 20, marks: 85.5, course: "CS" },
    { id: 102, name: "Jonathan", age: 21, marks: 45.0, course: "Math" },
    { id: 103, name: "Dracula", age: 19, marks: 92.0, course: "Physics" },
    { id: 104, name: "Garena", age: 22, marks: 78.25, course: "Chemistry" }
];

console.log(Math.round(78.25));
console.log(Math.max(...studentsList.map(s => s.marks)));
console.log(Math.random());
