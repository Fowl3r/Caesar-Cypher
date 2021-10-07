let value = ""      //document.getElementById("text-input").
let key = Number
let encrypt = document.getElementById("Encode");
let decrypt = document.getElementById("Decode");

function encryption(value,key,) {
let solved = "";                                // variable to represent solution
for (let i=0; i<value.length; i++) {            // loop through string
    let asciiNum = value[i].charCodeAt();       // charCode gives ASCII value for input
    if (asciiNum >= 65 && asciiNum <= 90 || asciiNum >= 97 && asciiNum <= 122 ) {     // find out how to exclude non alphanumerics
        solved += String.fromCharCode(asciiNum + key); // get the string change to ascii and add value of key to "encode it" it
    } else if (asciiNum >= 78 && asciiNum <= 90 || asciiNum >= 110 && asciiNum <= 122 ) {
        solved += String.fromCharCode(asciiNum - key)

    } else {
        solved += value[i] /// for spaces
    }
}
console.log(solved);
return solved;
}
// >= 78 && asciiNum <= 90 || asciiNum >= 110 && asciiNum <= 122
// function decryption (value,key) {
//     let solved = "";
//     for (let i=0; i<value.length; i++) {
//         let asciiNum = value[i].charCodeAt();
//         if (asciiNum >= 65 && asciiNum <= 77 || asciiNum >= 97 && asciiNum <= 122 ) {
//             solved += String.fromCharCode(asciiNum - key);
//         } else if (asciiNum >= 78 && asciiNum <= 90 || asciiNum >= 110 && asciiNum <= 122 ) {
//             solved += String.fromCharCode(asciiNum + key)
    
//         } else {
//             solved += value[i]
//         }
//     }
//     console.log(solved);
//     return solved;
//     }



encryption("Tqxx{ c{~xp", -12);
// decryption("Tqxx{ K{~xp",12)