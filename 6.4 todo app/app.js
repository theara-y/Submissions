let tasks = ["task1", "task2", "task3", "task4"];

let addBtn = document.querySelector("form button");
let addTaskInput = document.querySelector("form input");

addBtn.addEventListener("click", function(event) {
    event.preventDefault();
    tasks.push(addTaskInput.value);
    render();
});

let taskListElement = document.querySelector("ul");

taskListElement.addEventListener("click", function(event) {
    if(event.target.tagName === 'BUTTON') {
        let index = Number(event.target.parentNode.getAttribute("data-id"));
        tasks = tasks.slice(0, index).concat(tasks.slice(index + 1));
        render();        
    } else if(event.target.tagName == "LI") {
        event.target.classList.toggle("cross-out");
    }
});

function render() {
    taskListElement.innerHTML = '';
    for(let i = 0; i < tasks.length; i++) {
        taskListElement.appendChild(renderListItem(tasks[i], i));
    }
}

function renderListItem(text, index) {
    let li = document.createElement("li");
    li.textContent = text;
    li.setAttribute("data-id", index);

    let btn = document.createElement("button");
    btn.textContent = 'Delete';
    btn.classList.add('deleteBtn');

    li.prepend(btn);

    return li;
}

render();