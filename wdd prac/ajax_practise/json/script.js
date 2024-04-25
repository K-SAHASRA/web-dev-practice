function loadata(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            const ob1= JSON.parse(this.responseText);
            var table = document.getElementById("tabledata");
            ob1.forEach(x => {
                table.innerHTML+=("<tr><td>"+x.name+"</td><td>"+x.price+"</td><td>"+x.model+"</tr></td>");
            });
        }
    
    }
    xhttp.open("GET","data.json",true);
    xhttp.send();
}