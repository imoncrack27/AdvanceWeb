const x = 110.987;

document.getElementById("numMethods1").innerHTML =
    x.toString() + "<br>" +
    (x + 23).toString();

document.getElementById("numMethods2").innerHTML =
    x.toFixed(0) + "<br>" +
    x.toFixed(2);