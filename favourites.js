// write js code here corresponding to favourites.html
var arr3=JSON.parse(localStorage.getItem("favourites"));
display(arr3);
 
function display(arr3){
document.querySelector("tbody").innerHTML="";
arr3.forEach(function (elem) {
    var tr=document.createElement("tr");
    var td1=document.createElement("td");
    td1.innerText=elem.matchnmb;

    var td2=document.createElement("td");
    td2.innerText=elem.tmA;

    var td3=document.createElement("td");
    td3.innerText=elem.tmB;

    var td4=document.createElement("td");
    td4.innerText=elem.dte;

    var td5=document.createElement("td");
    td1.innerText=elem.vnu;

    var td6=document.createElement("td");
    td6.innerText="Delete";
    td6.addEventListener("click",function()
    {
        delet(elem);
    });
    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr);
});
} 
function delet(elem){
    arr3.splice(elem,1);
    localStorage.setItem("favourites",JSON.stringify(arr3));
    window.location.reload();
}