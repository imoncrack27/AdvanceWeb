const integers = [100, 5, 28, 10, 69];
let sum = integers.reduce(myFunction);

document.getElementById("arrIteration").innerHTML = "The sum is " + sum;

function myFunction(total, value, index, array) {
    return total + value;
}