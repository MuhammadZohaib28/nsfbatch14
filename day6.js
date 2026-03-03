console.log("DAY 6")

// ARRAY OF OBJECTS
let studentData = [
    {
        name: "Moiz",
        fatherName: "Muhammad Sajjad",
        age: "14",
        bloodGroup: "B+",
        schoolName: "ABC School",
        class: "8A"
    },
    {
        age: "24",
        name: "Zohaib",
        fatherName: "XYZ",
        bloodGroup: "B+",
        schoolName: "ABC School",
        class: "11C"
    },
    {
        age: "44",
        name: "Mohsin",
        fatherName: "XYZ",
        bloodGroup: "B+",
        class: "11C",
        schoolName: "",
    },
]

// for(let i = 0; i < studentData.length; i++){
//     console.log(studentData[i].name, studentData[i].bloodGroup, studentData[i].age)
// }




studentData.map((index, item) => (
    console.log(`Name: ${studentData[item].name}, Age: ${studentData[item].age}`)
))

