const names = ["Tommy", "John", "Arthur"];

document.getElementById("arrMethod1").innerHTML = names.join(" - ");
document.getElementById("arrMethod2").innerHTML = names.pop();
names.push("Grace");
document.getElementById("arrMethod3").innerHTML = names;