function loadata(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        var table = document.getElementById("tabledata")
        var ob1 = this.responseXML
        books = ob1.getElementsByTagName("book")
        for(i=0;i<books.length;i++){
            var title = books[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
            var  author= books[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
            var genre = books[i].getElementsByTagName("genre")[0].childNodes[0].nodeValue;
            table.innerHTML+=("<tr><td>"+title+"</td><td>"+author+"</td><td>"+genre+"</td></tr>")
        }
    };
    
}
xhttp.open("GET","data.xml",true);
xhttp.send();
}