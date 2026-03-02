// ARRAYS - DRY

let student1 = "Saeed";
let student2 = "Ahmed";
let student3 = "Fawad";


let age = 32;

let isRaining = false


let studentsName = ["Danish", "Saeed", "Ahmed", "Hassan", "Mazhar", "Areeba"]

console.log(studentsName.length)

let carsName = []



console.log(studentsName[0])
console.log(studentsName[1])
console.log(studentsName[2])
console.log(studentsName[3])
console.log(studentsName[4])
console.log(studentsName[5])


for (let i = 0; i <= studentsName.length - 1; i++) {
    console.log(i + 1, studentsName[i])
}


let zohaibsData = {
    fullName: "Muhammad Zohaib",
    age: "24",
    gender: "Male",
    contactNo: "03482469101",
    bloodGroup: "B+"
}

let saeedsData = {
    fullName: "Saeed",
    age: "24",
    gender: "Male",
    contactNo: "03482469101",
    bloodGroup: "B+"
}



let studentData = [
    {
        fullName: "Muhammad Zohaib",
        age: "24",
        gender: "Male",
        contactNo: "03482469101",
        bloodGroup: "B+"
    },
    {
        fullName: "Saeed",
        age: "24",
        gender: "Male",
        contactNo: "03482469101",
        bloodGroup: "B+"
    }
]


console.log(studentData[0].fullName)