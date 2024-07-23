function add(num1, num2) {
    console.log(num1 + num2);
}
add(70, 90);
function sub(num1, num2) {
    console.log(num1 - num2);
}
var a = 100;
var b = 20;
sub(a, b); // sub(100,20)
// after making function we can write varible &pass them on calling
function greeting() {
    console.log("Assalaam O Alikum");
}
function multiple(num1, num2, callback) {
    console.log(num1 * num2);
    callback();
}
var c = 5;
var d = 3;
multiple(c, d, greeting);
function displayCurrentDateTimeLocale() {
    var today = new Date();
    return today.toLocaleString();
}
console.log(displayCurrentDateTimeLocale());
function displayCurrentDateTimeNew() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    return dateTime;
}
