function isEven(number) {
    let result = number % 2;
    if (result == 0) {
        console.log(number, "is even (true)");
        return true;
    } else {
        console.log(number, "is not even (false)");
        return false;
    }
}

let number = 41;
let even = isEven(number);
console.log(even);


