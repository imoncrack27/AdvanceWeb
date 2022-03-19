const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const b = new Date();
let month = months[b.getMonth()];
document.getElementById("dateGET").innerHTML = month;