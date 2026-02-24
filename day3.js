console.log("DAY 3")


// 80 - 100 - A-ONE
// 70 - 79 - A
// 60 - 69 - B+
// 50 - 59 - C
// LESS THEN 50 - FAIL

let studentMarks = 1;


if (studentMarks > 100) {
    console.log(`MARKS SHOULD BE LESS THAN 100, THE ENTERED MARKS ARE ${studentMarks}`)
} else if (studentMarks < 0) {
    console.log("MARKS CANNOT BE IN NEGATIVE, PLEASE ENTER THE CORRECT MARKS")
} else if (studentMarks >= 80) {
    console.log(`A-ONE GRADE, THE ENTERED MARKS ARE ${studentMarks}`)
} else if (studentMarks >= 70) {
    console.log(`B+ GRADE, THE ENTERED MARKS ARE ${studentMarks}`)
} else if (studentMarks >= 60) {
    console.log(`C GRADE, THE ENTERED MARKS ARE ${studentMarks}`)
} else if (studentMarks >= 50) {
    console.log(`D GRADE, THE ENTERED MARKS ARE ${studentMarks}`)
} else {
    console.log(`FAIL, THE ENTERED MARKS ARE ${studentMarks}`)
}


let pressedItem = "SPRITE"

switch (pressedItem) {
    case "SPRITE":
        console.log(`${pressedItem} IS AVAILABLE, PLEASE TAKE YOUR ITEM BELOW`)
        break;

    case "MOUNTAIN DEW":
        console.log(`${pressedItem} IS AVAILABLE, PLEASE TAKE YOUR ITEM BELOW`)
        break;

    case "COKA COLA":
        console.log(`${pressedItem} IS AVAILABLE, PLEASE TAKE YOUR ITEM BELOW`)
        break;
    case "MIRANDA":
        console.log(`${pressedItem} IS AVAILABLE, PLEASE TAKE YOUR ITEM BELOW`)
        break;

    case "PEPSI":
        console.log(`${pressedItem} IS AVAILABLE, PLEASE TAKE YOUR ITEM BELOW`)
        break;
    default:
        console.log(`${pressedItem} IS NOT AVAILABLE`)
        break;
}