function add(num1, num2){
    console.log(num1 + num2);
    
}
add(70,90)
function sub(num1, num2){
    console.log(num1 - num2);   
}
let a = 100; 
let b = 20;

sub(a, b) // sub(100,20)
// after making function we can write varible &pass them on calling
function greeting(){
    console.log("Assalaam O Alikum");
    
}
function multiple(num1, num2, callback){
    console.log(num1 * num2);
    callback();
    
}
let c = 5;
let d = 3;
multiple(c,d,greeting);

function displayCurrentDateTimeLocale(){

      let today =new Date()
    return today.toLocaleString()
}
console.log(displayCurrentDateTimeLocale());


// function displayCurrentDateTimeNew() {
//     let today = new Date();
//     let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//     let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//     let dateTime = date + ' ' + time;
//     return dateTime;
//   }





