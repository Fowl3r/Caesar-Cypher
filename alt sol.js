let lAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let uAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L", "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let value = "";
let key = Number
let solved = ""

function encryption(value,key)
{
    for(let i = 0; i < lAlphabet.length || i < uAlphabet.length; i++) {
        if(value === "") {
            solved += value;
            continue;   //continues loop if value isn't Alphanumeric
        }
        let currentIndex = lAlphabet.indexOf(value) || uAlphabet.indexOf(value);
        let newIndex = currentIndex + Number;
        if(newIndex > 25) newIndex =  newIndex -26;
        if(newIndex < 0) newIndex = newIndex + 26;
        
    } else (solved += lAlphabet[newIndex]) 
    return solved;
}
console.log(encryption("Anything", 7))