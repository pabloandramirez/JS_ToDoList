import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

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