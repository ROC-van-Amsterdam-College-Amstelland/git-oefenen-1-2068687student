//schrijf hier je Javascript code


var getal1 = prompt("geef een getal");
var getal2 = prompt("geef een getal");
if (getal1 > getal2) {

        document.getElementById("main").style.backgroundColor = "blue";

}else{

        document.getElementById("header").style.backgroundColor = "orange";

}


if (getal1 == getal2) {
    
    document.getElementById("footer").style.backgroundColor = "purple";
}

