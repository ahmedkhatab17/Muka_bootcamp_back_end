///////////////////// Array /////////////////////////

// let arr = [1, 2, 3, 4, 5];

////////////////// Task 1 /////////////////

let arr = [1, 2, 3, 4, 5];
console.log(arr);

////////////////// Task 2 /////////////////

// to add element => push

arr.push(6);
console.log(arr);

// to remove element => pop

arr.pop();
console.log(arr);

////////////////// Task 3 /////////////////

arr.forEach(function(num, index) {
    console.log(`Index: ${index}, Value: ${num}`)
});

////////////////// Task 4 /////////////////

function getEven(arr){
    let evenNum = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNum.push(arr[i]);
        }
    }
    return evenNum;
}

let array =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(getEven(array));

////////////////// Task 5 /////////////////

let notSortedArr = [4, 60, 98, 88, 85, 58, 98, 10, 44, 21, 77, 38, 8, 35, 3, 39, 23, 80, 23, 80];

function sort(arr){
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.lenght - i - 1; j++){
            if (arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(sort(notSortedArr));








