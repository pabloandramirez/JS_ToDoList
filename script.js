( () => {
    
    const btn = document.querySelector("[data-form-btn]");
    
    const createTask = (evento) => {
        evento.preventDefault();
        const input = document.querySelector("[data-form-input]");
        const list = document.querySelector("[data-list]");
        const value = input.value;
        const task = document.createElement("li");
        task.classList.add("card");
        input.value = "";
        const taskContent = document.createElement("div");
        const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = value;
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);
        //task.innerHTML = content;
        list.appendChild(task);
        task.appendChild(taskContent);
        task.appendChild(deleteIcon());
    };
    
    
    
    //Arrow functions o funciones anonimas
    btn.addEventListener("click",  createTask);
    
    const checkComplete = () => {
        const i = document.createElement("i");
        i.classList.add("far", "fa-check-square", "icon");
        i.addEventListener("click", completeTask);
        return i;
    };
    
    //Inmediate invoked function expression IIFE
    const completeTask = (event) => {
        const element = event.target;
        element.classList.toggle("fas");
        element.classList.toggle("completeIcon");
        element.classList.toggle("far");
    }

    const deleteIcon = () =>{
        const i = document.createElement("i");
        i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
        i.addEventListener("click", deleteTask);
        return i;
    }

    const deleteTask = (event) => {
        const parent = event.target.parentElement;
        parent.remove();
    }
    })();