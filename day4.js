console.log("DAY 4")

// LOOP - ITERATION PERFORME 
// 1. FOR LOOP
// 2. WHILE LOOP
// 3. DO WHILE LOOP

// FOR LOOP
// DRY - DO NOT REPEAT YOURSELF



for (let i = 1; i <= 5; i++) {
    console.log(i)
}

// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3= 15 
// 5 x 4= 20


let tableNumber = prompt("Enter Table Number");

for(let i = 1; i <= 10; i++){
    console.log(`${tableNumber} x ${i} = ${tableNumber*i}`)
}