function verify(){
    ob1 = document.getElementById("name").value;
    ob2 = document.getElementById("email").value;
    ob3 = document.getElementById("password").value;
    ob4  = document.getElementById("phno").value;
    valid = true;

    if(! /^[A-Za-z ]+$/.test(ob1)){
        alert("Only insert letters and whitespace in name");
        valid = false;
    }
    if(ob1.length<6){
        alert("name too short");
        valid = false;
    }
    if(! /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(ob2)){
        alert("invalid email");
        valid = false;
    }
    
    if(ob3.length<6){
        alert("password too short");
        valid = false;
    }
    if(ob4.length!=10){
        alert("enter correct ph no");
        valid = false;
    }

    if(valid){
        alert("form valid");
    }


}