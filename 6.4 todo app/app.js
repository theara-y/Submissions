tasks = loadSaveData();

let addBtn = document.querySelector("form button");
let addTaskInput = document.querySelector("form input");

addBtn.addEventListener("click", function(event) {
    event.preventDefault();
    tasks.push({task: addTaskInput.value, isDone: false});
    render();
    saveData();
});

let taskListElement = document.querySelector("ul");

taskListElement.addEventListener("click", function(event) {
    if(event.target.tagName === 'BUTTON') {
        let index = Number(event.target.parentNode.getAttribute("data-id"));
        tasks = tasks.slice(0, index).concat(tasks.slice(index + 1));
        render();  
        saveData();      
    } else if(event.target.tagName == "LI") {
        event.target.classList.toggle("cross-out");
        let index = Number(event.target.getAttribute("data-id"));
        tasks[index].isDone = !tasks[index].isDone;
        console.log(tasks);
        saveData();
    }
});

function render() {
    taskListElement.innerHTML = '';
    for(let i = 0; i < tasks.length; i++) {
        taskListElement.appendChild(renderListItem(tasks[i], i));
    }
}

function renderListItem(task, index) {
    let li = document.createElement("li");
    li.textContent = task.task;
    li.setAttribute("data-id", index);

    if(task.isDone) {
        li.classList.add("cross-out");
    }

    let btn = document.createElement("button");
    btn.textContent = 'Delete';
    btn.classList.add('deleteBtn');

    li.prepend(btn);

    return li;
}

function saveData() {
    localStorage.setItem("data", JSON.stringify(tasks));
}

function loadSaveData() {
    let jsonString = localStorage.getItem("data");

    let fakeData = [
        {
            "task": "Style the App",
            "isDone": false,
        },
        {
            "task": "Change the data structure",
            "isDone": false,
        },
        {
            "task": "Eat something",
            "isDone": false,
        },
        {
            "task": "Study for at least an hour each day",
            "isDone": true,
        },
    ];

    return JSON.parse(jsonString) || fakeData;
}

render();