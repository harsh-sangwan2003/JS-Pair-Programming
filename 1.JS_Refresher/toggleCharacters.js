function toggleCharacters(str) {

    let ans = "";

    for (let i = 0; i < str.length; i++) {

        let charCode = str.charCodeAt(i);

        if (charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0)) {
            var code = charCode - 'A'.charCodeAt(0) + 'a'.charCodeAt(0);
            ans += String.fromCharCode(code);
        }

        else if (charCode >= 'a'.charCodeAt(0) && charCode <= 'z'.charCodeAt(0)) {
            var code = charCode + 'A'.charCodeAt(0) - 'a'.charCodeAt(0);
            ans += String.fromCharCode(code);
        }

        else {
            ans += str.charAt(i);
        }
    }

    return ans;
}

console.log(toggleCharacters("abchgd"));