function ArrayShifting(array, shiftingValue) {
    console.log("Input:  ", array)
    let length = array.length;
    for (let i = 0; i < shiftingValue; i++) {
        let b = array[0];

        for (let j = 0; j < length; j++) {
            array[j] = array[j + 1];
        }
        array[length - 1] = b;
    }
    console.log("Output: ", array)
}

let InputArray = [1, 2, 3, 4, 5]
let ShiftingValue = 2;
ArrayShifting(InputArray, ShiftingValue);
