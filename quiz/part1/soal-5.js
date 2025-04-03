//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    // you can only write your code here!
    let word = [];
    let finalString = "";
    for (let a = 0; a < kata.length; a++) {
        word.push(kata[a]);
    }

    for (let b = 0; b < word.length; b++) {
        let n = word[b].charCodeAt(0) - 'a'.charCodeAt(0);
        n = (n + 1) % 26;
        word[b] = String.fromCharCode(n + 'a'.charCodeAt(0));
    }

    for (let c = 0; c < word.length; c++) {
        finalString += word[c]
    }

    return finalString;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu