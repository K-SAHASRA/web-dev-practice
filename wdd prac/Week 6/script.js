function loadData(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("paraData").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET","data.txt",true);
    xhttp.send();
}