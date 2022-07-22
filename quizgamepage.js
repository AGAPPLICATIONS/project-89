qturn="player1";

aturn="player2"
p1score = 0;
p2score = 0;
p1name= localStorage.getItem("p1");
p2name = localStorage.getItem("p2");

document.getElementById("p1name").innerHTML = p1name;
document.getElementById("p2name").innerHTML = p2name;
document.getElementById("p1sc").innerHTML =" : "+p1score;
document.getElementById("p2sc").innerHTML =" : "+p2score;


function send(){

num1 = document.getElementById("num1").value;
num2= document.getElementById("num2").value;
ans = parseInt(num1)*parseInt(num2);
question =  "<h4>"+ num1 + "X"+num2+ "</h4>"
answerbox = "<h4> Answer: </h4> <input type = 'text' id = 'useranswerbox'>";
checkbutton = "<br><br><button type = 'button' class = 'btn btn-success' onclick ='check()'>Check</button> "
row = question + answerbox + checkbutton;
document.getElementById("output").innerHTML = row ;
document.getElementById("num1").value = "";
document.getElementById("num2").value = "";






}
function check(){
    givenans = document.getElementById("useranswerbox").value;
if(ans == givenans){
 if(aturn == "player1"){
    np1score= p1score+1;
    document.getElementById("p1sc").innerHTML = " : "+np1score;




}else{
np2score= p2score+1;
document.getElementById("p2sc").innerHTML =" : "+ np2score;




}
}
if(qturn = "player1"){
    qturn = "player2";
    document.getElementById("qturn").innerHTML = localStorage.getItem("p2");

}else{
    qturn = "player1";
    document.getElementById("qturn").innerHTML =  localStorage.getItem("p1");



}
if(aturn = "player1"){
    aturn = "player2";
    document.getElementById("aturn").innerHTML =  localStorage.getItem("p2");

}else{
    aturn = "player1";
    document.getElementById("aturn").innerHTML = localStorage.getItem("p1");



}



}

