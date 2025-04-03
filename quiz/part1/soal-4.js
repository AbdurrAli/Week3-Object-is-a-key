function cariModus(arr) {
    // you can only write your code here!
    let count = {};
    arr.forEach((a) => {
        if (count[a] === undefined) {
            count[a] = 1;
        } else {
            count[a] += 1;
        }
    })

    let keys = Object.keys(count);
    let values = Object.values(count);

    const isSame = values.every(val => val === values[0]);
    if (keys.length === 1) {
        return -1;
    } else if (isSame) {
        return -1;
    } else {
        return keys.reduce((max, key) => count[key] > count[max] ? key : max);
    }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1