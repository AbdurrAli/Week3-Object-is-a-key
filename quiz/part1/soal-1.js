//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
    // you can only write your code here!

    // using square root to find divisor
    const divisors = Math.sqrt(angka);


    for (let a = 2; a <= divisors; a++) {
        if (angka % a === 0) {
            return false;
        }
    }

    return true;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false