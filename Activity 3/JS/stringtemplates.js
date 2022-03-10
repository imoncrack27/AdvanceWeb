let price = 100;
let discount = 0.50; // discount is 50%
let total = `Total: $${((price - price * discount)).toFixed(2)}`;

document.getElementById("strTemplates").innerHTML = total;