var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("demo").innerHTML = "Today is: " + days[d.getDay()];


var m = new Date();
var da = new Date();
var y = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("date").innerHTML = "The date is: " + months[m.getMonth()] + " " + da.getDate() + ", " + y.getFullYear();



//Time
var h = new Date();
var m = new Date();
document.getElementById("time").innerHTML = "The time is: " + h.getHours() + " : " + m.getMinutes();

/*console.log("Today is: " + days[d.getDay()]);
console.log("The date is: " + months[m.getMonth()] + " " + da.getDate() + ", " + y.getFullYear());
console.log("The time is: " + h.getHours() + " : " + m.getMinutes());*/