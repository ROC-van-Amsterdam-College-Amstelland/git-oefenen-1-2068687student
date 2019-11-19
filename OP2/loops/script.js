function geefGetallen() {

    var ingevuldGetal = document.getElementById("startgetal").value;

    for(var teller = 1; teller <= 10; teller += 1) {

        console.log(teller * ingevuldGetal);
    }
}