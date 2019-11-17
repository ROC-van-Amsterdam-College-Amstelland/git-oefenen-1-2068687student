function zoekUit() {
    var aantal = document.getElementById("aantal").value;
    var duur =  document.getElementById("duur").value;
    var streaming = document.getElementById("streaming").value;

    var abonnement ="eenvoudig";
//als je met meer dan 2 personen kijkt en meer dan 3 uur per dag, dan is het beste abonnement familie
//pseudocode: als (aantal==3 en duur>3 dan abonnement ="familie")

if( aantal == 3 && duur  > 3 ){
    alert();
    abbonement = "familie";
    document.getElementById("resultaat").innerHTML = abbonement;
}

//als je met 2 of meer personen kijkt of al een abonnement hebt, dan is het beste abonnement uitgebreid
//pseudocode: als (aantal > 2 of streaming == ja dan ="uitgebreid")

if( aantal > 2 || streaming == true ){
    abbonement = "uitgebreid";
    document.getElementById("resultaat").innerHTML = abbonement;

}

//als je met 2 personen kijkt of meer dan 4 uur per dag dan is het abonnement standaard
//pseudocode: 

if(aantal == 2 || duur > 4){
    abbonement = "standaard";
}

// als je met 1 persoon kijkt en 6 of meer uur per dag dan is het abonnement uitgebreid
//pseudocode: 

if(aantal == 1 && duur >= 6){
    abbonement = "uigebreid";
}

document.getElementById("resultaat").innerHTML = abbonement;

//toon het type abonnement op het scherm

}