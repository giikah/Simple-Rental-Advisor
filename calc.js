function Calculate(){
var earn = document.getElementById("earn").value;
var cost = document.getElementById("cost").value;

var perfectRent = (33 / 100) * earn;

    document.getElementById("test").innerHTML = earn;

console.log("You should pay no more than:" + " " + perfectRent + " for your rent.");
}