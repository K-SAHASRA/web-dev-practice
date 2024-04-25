function myfun(){
    ob1 = document.getElementById("name").value;
    if(ob1==""){
        alert("enter name");
    }
    function checkAlphabets(ob1) {
        for (const char of ob1) {
            if (!(char >= "a" && char <= "z") &&
                !(char >= "A" && char <= "Z")) {
                return alert("only alphabets");
            }
        }
        return true;
    }
    checkAlphabets(ob1);
    ob2 =document.getElementById("password").value;
    if(ob2.length<=6){
        alert("password should not be less than 6");
    }
    
    ob3 = document.getElementById("email").value;
    if(ob3==""){
        alert("Email not valid");
    }



    ob4=document.getElementById("phno").value;
    if(ob4.length<10 || ob4.length>10){
        alert("phno should be 10 digits");
    }
}