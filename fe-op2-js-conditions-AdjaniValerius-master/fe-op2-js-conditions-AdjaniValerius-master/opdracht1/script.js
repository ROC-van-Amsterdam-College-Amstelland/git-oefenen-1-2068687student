// A) maak 2 verschillende variabelen met twee willekeurige integers (zelf kiezen)

// jouw code hierondeer-->> 
var getal1 = 20;
var getal2 = 40;

// B) toon beide getallen op het scherm met document.getElementById('<jouw_gekozen_id>').innerHTML

// jouw code hieronder-->>
document.getElementById("boven").innerHTML = getal1;
document.getElementById("beneden").innerHTML = getal2;


// C) Vraag de gebruiker om een INPUT waarde door prompt() te gebruiken. 
// Gebruik de prompt()-waarde om een variabelen te 'vullen'
// jouw code hieronder-->>

var getal1 = prompt("vul een getal in");
var getal2 = prompt("vul een getal in");

// D) Vergelijk de twee getallen met elkaar door gebruik te maken van conditions  if()

// jouw code hieronder-->>

if ( getal1 > getal2) {
    document.getElementById("getal1"). style.backgroundColor = "red";

}

