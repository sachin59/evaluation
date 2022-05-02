// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",submitbtn);
var arr=JSON.parse(localStorage.getItem("schedule")) || [];
function submitbtn(){
    event.preventDefault();

    var newobj= {
        matchnmb:document.querySelector("#matchNum").value,
        tmA:document.querySelector("#teamA").value,
        tmB:document.querySelector("#teamB").value,
        dte:document.querySelector("#date").value,
        vnu:document.querySelector("#venue").value
    };
    arr.push(newobj);   
    localStorage.setItem("schedule",JSON.stringify(arr));
    window.location.href="matches.html";

}