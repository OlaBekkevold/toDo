




function addTask() {

    const grid = document.getElementById("grid");

    const titleInput = document.getElementById("titleInput");
    titleValue = titleInput.value;

    const descInput = document.getElementById("descInput");
    descValue = descInput.value;

    
    
    const newTask = document.createElement("div");
    newTask.classList.add("item");
    

    const taskTitle = document.createElement("h2");
    taskTitle.innerHTML = titleValue;
    taskTitle.classList.add("itemTitle");
    newTask.appendChild(taskTitle);

    const taskDesc = document.createElement("p");
    taskDesc.innerHTML = descValue;
    taskDesc.classList.add("itemDesc");
    newTask.appendChild(taskDesc);

    const deleteButton = document.createElement("p");
    deleteButton.innerHTML = "🗑️";
    deleteButton.classList.add("deleteButton");
    newTask.appendChild(deleteButton);


    grid.appendChild(newTask);

    titleInput.value = "";
    descInput.value = "";
}
