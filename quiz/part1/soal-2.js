//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    // you can only write your code here!
    while (angka2 !== 0) {
        let result = Math.abs(angka1 - angka2);
        angka1 = Math.min(angka1, angka2);
        angka2 = result;
    }
    return angka1;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1