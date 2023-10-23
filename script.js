



function addTask() {
    const grid = document.getElementById("grid");
    const newTask = document.createElement("div");
    newTask.classList.add("item");
    

    const taskTitle = document.createElement("h2");
    taskTitle.innerHTML = "First title";
    taskTitle.classList.add("itemTitle");
    newTask.appendChild(taskTitle);

    const taskDesc = document.createElement("p");
    taskDesc.innerHTML = "First description";
    taskDesc.classList.add("itemDesc");
    newTask.appendChild(taskDesc);

    const deleteButton = document.createElement("p");
    deleteButton.innerHTML = "🗑️";
    deleteButton.classList.add("deleteButton");
    newTask.appendChild(deleteButton);

    
    
    grid.appendChild(newTask);
}
