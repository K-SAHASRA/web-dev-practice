function salcal(){
    var sal = parseFloat(document.getElementById("salary").value);
    const gpay = sal*1.5;
    const saldel = `
    <table>
        <tr>
            <th>sal type</th>
            <th>amount</th>
        </tr>
        <tr>
            <td>gpay</td>
            <td>${gpay}</td>
        </tr>
        
    </table>  
    `
    ;
    document.getElementById("saldel").innerHTML=saldel;

}