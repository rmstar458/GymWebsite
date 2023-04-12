document.getElementById("greet").innerHTML=localStorage.getItem("name1")+" on joining RAMESH FITNESS POINT";
document.getElementById("names").innerHTML="<b>Name : </b>"+localStorage.getItem("name1");
document.getElementById("ages").innerHTML="<b>Age : </b>"+localStorage.getItem("age");
var bmind,wei,hei;
wei=localStorage.getItem("weight");
hei=localStorage.getItem("height");
bmind=((wei/(hei*hei))*10000);
bmind=bmind.toFixed(2);
var health;
if(bmind<18.5){
    health="UnderWeight";
}
else if(bmind>=18.5 && bmind<25){
    health="HealthyWeight";
}
else if(bmind>=25 && bmind<30){
    health="OverWeight";
}
else{
    health="ObesityRange";
}
document.getElementById("bmi").innerHTML="<b>Body Mass Index : </b>"+bmind+"("+health+")";
document.getElementById("faci").innerHTML="<b>Facility Choosen : </b>"+localStorage.getItem("facility");
document.getElementById("plan").innerHTML="<b>Plan Choosen : </b>"+localStorage.getItem("plan");
document.getElementById("trainer").innerHTML="<b>Personal Trainer Needed : </b>"+localStorage.getItem("trainer");

var p,f,t;
f=localStorage.getItem("facility");
p=localStorage.getItem("plan");
t=localStorage.getItem("trainer");
var cost=0;
if(f=="Basic" && p=="Monthly"){
    cost=cost+1000;
}
else if(f=="Basic" && p=="3 Monthly"){
    cost=cost+2500;
}
else if(f=="Basic" && p=="Yearly"){
    cost=cost+10000;
}
else if(f=="Pro" && p=="Monthly"){
    cost=cost+1500;
}
else if(f=="Pro" && p=="3 Monthly"){
    cost=cost+3800;
}
else if(f=="Pro" && p=="Yearly"){
    cost=cost+14000;
}
if(t=="Yes" && p=="Monthly"){
    cost=cost+1000;
}
else if(t=="Yes" && p=="3 Monthly"){
    cost=cost+3000;
}
else if(t=="Yes" && p=="Yearly"){
    cost=cost+12000;
}
document.getElementById("total").innerHTML="<h2>Payable Amount = "+cost+"</h2>";
function prints(){
    window.print();
}
