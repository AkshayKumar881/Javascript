var amount;
var rateOfInterest;
var time;

while (isNaN(amount) || amount < 0 || amount == null) {
    amount = prompt("Principal amount (Rupees)");
}
document.getElementById("amount").innerHTML = "Rs " + amount;

while (isNaN(rateOfInterest) || rateOfInterest < 0 || rateOfInterest == null) {
    rateOfInterest = prompt("Rate of interest (%)");
}
document.getElementById("rate-of-interest").innerHTML = rateOfInterest + "%";
while (isNaN(time) || time < 0 || time == null) {
    time = prompt("Time (years)"); }

document.getElementById("time").innerHTML = time + " year(s)";
calcInterest(amount, rateOfInterest, time);
document.getElementById("simple-interest").innerHTML = "Rs " + calcInterest();
function calcInterest() {
    var interest = (amount * rateOfInterest * time) / 100;
    return interest;
}