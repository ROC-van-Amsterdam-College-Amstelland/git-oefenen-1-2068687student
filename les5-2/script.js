window.onload = function() {

    changeElm();

    function changeElm() {
        var elmValue = "ik wil kaas";
        document.getElementById("myFirstDiv").innerHTML = elmValue;
        document.getElementById("myFirstDiv").style.backgroundColor="red";
    }


}