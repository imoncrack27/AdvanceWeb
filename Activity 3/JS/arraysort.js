const lastnames = [" Mingo", " Ortega", " Abellano", " Tudtud"];
const numbers = [6, 2, 5, 1, 10];

numbers.sort(function(a, b) { return a - b });

document.getElementById("arrSort1").innerHTML = lastnames.sort();
document.getElementById("arrSort2").innerHTML = numbers;