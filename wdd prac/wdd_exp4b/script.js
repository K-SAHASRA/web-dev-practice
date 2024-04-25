
 function calc(){
 var name=document.myform.name.value;
 var id=document.myform.id.value;
 if(name==""){
 alert("Enter name");
 document.myform.name.focus();
 return false;
 }
 if(name.length<6){
 alert("enter name greater than 6 letters");
 document.myform.name.focus();
 return false;
 }

var  salary=document.myform.salary.value;
var hra=0.4*salary;
var da=0.6*salary;
var grsal=parseInt(salary)+parseInt(hra)+parseInt(da);
var pf=0.13*grsal;
var tax=0.2*grsal;
var ded=pf+tax;
var net=parseInt(grsal)-parseInt(ded);
 document.getElementById("hra").innerHTML=hra;
 
 document.getElementById("da").innerHTML=da;
 document.getElementById("grsal").innerHTML=grsal;
 document.getElementById("pf").innerHTML=pf;
 document.getElementById("tax").innerHTML=tax;
 document.getElementById("ded").innerHTML=ded;
 document.getElementById("net").innerHTML=net;
 }

