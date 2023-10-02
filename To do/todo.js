document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const taskInputBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    taskInputBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText != "") {
            const task = document.createElement("li");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            task.appendChild(checkbox);
            const label = document.createElement("label");
            label.textContent = taskText;
            const deleteBtn = document.createElement("button");
            deleteBtn.id = "deleteBtn";
            deleteBtn.textContent = "Delete";
            task.appendChild(label);
            task.appendChild(deleteBtn);
            taskList.appendChild(task);
            taskInput.value = '';
        }
    })
})
