
// This function gets called when the user clicks the "Add Task" button
function addTask() {
    // Get all the values needed
    const grid = document.getElementById("grid");

    const titleInput = document.getElementById("titleInput");
    titleValue = titleInput.value;

    const descInput = document.getElementById("descInput");
    descValue = descInput.value;
    
    // Represents a string of only whitespace
    const whitespace = /^\s*$/;

    // Checks if the input has no content
    if  (whitespace.test(titleValue) && whitespace.test(descValue)) {
        // Add the alert class to the input fields, which causes them to blink red
        titleInput.classList.add("alert")
        descInput.classList.add("alert")
        // Remove the alert class after 2.5 seconds
        setTimeout(function() {
            titleInput.classList.remove("alert");
            descInput.classList.remove("alert");
          }, 2500);


      // Checks other possible inputs  
    } else if (whitespace.test(titleValue)) {
        titleInput.classList.add("alert")

        setTimeout(function() {
            titleInput.classList.remove("alert");
          }, 2500);


    } else if (whitespace.test(descValue)) {
        descInput.classList.add("alert")

        setTimeout(function() {
            descInput.classList.remove("alert");
          }, 2500);
    }
    
    
    else {
        // Creates a new task with the content from the input fields
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
        // This function gets called when the user clicks the delete button
        deleteButton.addEventListener("click", function() {
            newTask.remove();
            updateStatus();
        });
        newTask.appendChild(deleteButton);

        const checkbox = document.createElement("div");
        checkbox.classList.add("checkbox");
        // This function gets called when the user clicks the checkbox and uses the event object to get the checkbox that was clicked.
        checkbox.addEventListener("click", function(event) {
            complete(event)
        });
        newTask.appendChild(checkbox);


        grid.appendChild(newTask);

        // Resets the input fields
        titleInput.value = "";
        descInput.value = "";
        updateStatus();
    }
    
}


// This functions marks the task as complete
function complete(event) {
    // Gets the checkbox that was clicked and it's siblings
    const checkbox = event.target;
    const parentDiv = checkbox.parentNode;
    const title = parentDiv.querySelector(".itemTitle");
    const desc = parentDiv.querySelector(".itemDesc");

    // Toggles a new class on the checkbox and the title and description
    checkbox.classList.toggle("checked");
    title.classList.toggle("itemTitleChecked");
    desc.classList.toggle("itemDescChecked")

    updateStatus();

}

// This function updates the information about the tasks. It will get called whenever a change is made to the tasks.
function updateStatus() {
    // Get the output element
    const output = document.getElementById("infoOutput");
    // Uses length to get the number of elements with the class "checked" and "item"
    const completedTasks = document.getElementsByClassName("checked").length;
    const totalTasks = document.getElementsByClassName("item").length;
    // Updates the output element
    output.innerHTML = completedTasks + "/" + totalTasks + " completed";
}

// Function to delete all tasks
function delAll() {
    // Get a list of all task elements
    const tasks = document.querySelectorAll(".item");
    // Loop through the list and delete each task
    for (const task of tasks) {
        task.remove();
    }
    
    updateStatus();
}


