// write js code here corresponding to matches.html
var arr2=JSON.parse(localStorage.getItem("schedule"));
display(arr2);
var fvrts=JSON.parse(localStorage.getItem("favourites")) || [];
function display(arr2){
document.querySelector("tbody").innerHTML="";
arr2.forEach(function (elem) {
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
    td6.innerText="favourites";
    td6.style.color="green";
    td6.addEventListener("click",function()
    {
        favourites(elem);
    });
    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr);
});
}
    function favourites(elem){
        fvrts.push(elem);
        localStorage.setItem("favourites",JSON.stringify(fvrts));
        window.location.href="favourites.html";
    }