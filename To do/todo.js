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

            checkbox.addEventListener("click", function(){
                if(checkbox.checked)
                    label.style.textDecoration = "line-through";
                else
                    label.style.textDecoration = "";
            })

            const deleteBtn = document.createElement("button");
            deleteBtn.id = "deleteBtn";
            deleteBtn.textContent = "Delete";

            deleteBtn.addEventListener("click", function(){
                task.remove();
                checkbox.remove();
                label.remove();
                deleteBtn.remove();
            });

            task.appendChild(label);
            task.appendChild(deleteBtn);
            taskList.appendChild(task);
            taskInput.value = '';
        }
    });
})
