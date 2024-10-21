/////////// Task 1 ////////////////
function checkAge(age) {
    if (age >= 18) {
        console.log("You are eligible to vote");
    } else {
        console.log("You are not eligible to vote");
    }
}

checkAge(20);
checkAge(15);

/////////// Task 2 ////////////////

function Day(day) {
    switch (day) {
        case 1:
            console.log("Saturday");
            break;
        case 2:
            console.log("Sunday");
            break;
        case 3:
            console.log("Monday");
            break;
        case 4:
            console.log("Tuesday");
            break;
        case 5:
            console.log("Wednesday");
            break;
        case 6:
            console.log("Thursday");
            break;
        case 7:
            console.log("Friday");
            break;
        default:
            console.log("Invalid day");
    }
}
Day(3);

