function send(){
num1 = document.getElementById("num1").value;
num2= document.getElementById("num2").value;
ans = parseInt(num1)*parseInt(num2);
question =  "<h4>"+ num1 + "X"+num2+ "</h4>"
answerbox = "<h4> Answer: </h4> <input type = 'text' id = 'useranswerbox'>";
checkbutton = "<br><br><button type = 'button' class = 'btn btn-primary' onclick ='check()'>Check</button> "
row = question + answerbox + checkbutton;
document.getElementById("output").innerHTML = row ;
document.getElementById("num1").value = "";
document.getElementById("num2").value = "";







}