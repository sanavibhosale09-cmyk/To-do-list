const task = document.getElementById("input");
let add_btn = document.getElementById("add_btn");
let tasklist = document.getElementById("Tasklist");

add_btn.addEventListner("click",()=>{
    if (task.value ===""){
        alert("Enter a task");
    } 
else{
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type ="checkbox";
    checkbox.classList.add("custom-checkbox");

    const span =document.createElement("span");
    span.textContent =task.value;
    span.classList.add("task-text");

    const deleteBtn = document.createElement("btn");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");


    li.append(checkbox , span , deleteBtn);
    tasklist.appendChild(li);

    task.value ="";
    saveData();
}});

tasklist.addEventListener("Click",(event)=>
{
    if(event.target.tagName ==="BUTTON"){
        event.target.parentElement.remove();
        saveData();
    }
    else if (event.target.type ==="checkbox"){
        const span = event.target.parentElement.querySelector(".task-text");
        span.classList.toggle("completed");
        saveData();
    }
});
function saveData()
{
    localstorage.setItem("data",tasklist.innerHTML);
}

function displayData() {
    tasklist.innerHTML =localStorage.getItem("data");
}
displayData();





