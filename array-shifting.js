function ArrayShifting(arr, shiftingValue) {
    console.log("Input:  ", arr)
    let length = arr.length;
    for (let i = 0; i < shiftingValue; i++) {
        let b = arr[0];

        for (let j = 0; j < length; j++) {
            arr[j] = arr[j + 1];
        }
        arr[length - 1] = b;
    }
    console.log("Output: ", arr)
}

let InputArray = [1, 2, 3, 4, 5]
let ShiftingValue = 2;
ArrayShifting(InputArray, ShiftingValue);
