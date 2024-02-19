const input_box=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function addTask(){
    if(input_box.value==""){
        alert("You must write something!");
    }else{
        let li=document.createElement("li");
        li.innerHTML=input_box.value;
        let span=document.createElement("span");
        span.innerHTML="\u00D7";
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    input_box.value="";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if (e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if (e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();