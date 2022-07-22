p1 = document.getElementById("p1").innerHTML;

p2 = document.getElementById("p2").innerHTML;
function addUser(){


localStorage.setItem("p1", p1);
localStorage.setItem("p2", p2);


window.location= "quizgamepage.html";

}