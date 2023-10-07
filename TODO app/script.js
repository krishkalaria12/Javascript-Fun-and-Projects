const input = document.getElementById("listInput");
const form = document.getElementById("listForm");
const orderedList = document.getElementById("list");
const msg = document.getElementById("msg");
const date = document.getElementById("date");
const time = document.getElementById("time");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
});

function formValidation() {
    if (input.value === "") {
        msg.innerHTML = "Task Cannot Be Blank";
    } else {
        msg.innerHTML = "";
        acceptData();
    }
}

let data = [];

function acceptData() {
    data.push({
        text: input.value,
        date: date.value,
        time: time.value
    });
    localStorage.setItem("data", JSON.stringify(data));
    createTask();
}

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
let currentDay = String(currentDate.getDate()).padStart(2, "0");

date.min = currentYear + "-" + currentMonth + "-" + currentDay;

function createTask() {
    let list = document.createElement("li");
    data.map((x, y) => {
        return (list.innerHTML += `
        <div id=${y}>
                <div class="details" id="details">
                    <p class="fw-bold todo-details"><span class="heading">Todo: </span>${x.text}</p>
                    <p class="small text-secondary todo-details"><span class="heading">Date: </span>${x.date}</p>
                    <p class="small text-secondary todo-details"><span class="heading">Time: </span>${x.time}</p>
                </div>
        
                <div class="btns">
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>
            </div>
        `);
    });

    orderedList.append(list);

    const editIcons = list.querySelectorAll(".edit");
    const deleteIcons = list.querySelectorAll(".delete");

    editIcons.forEach((editIcon) => {
        editIcon.addEventListener("click", (e) => editTask(e));
    });

    deleteIcons.forEach((deleteIcon) => {
        deleteIcon.addEventListener("click", (e) => deleteTask(e));
    });

    resetForm();
}

function resetForm() {
    date.value = "";
    input.value = "";
    time.value = "";
}

function editTask(e) {
    let selectedTask = e.target.parentElement.parentElement;
    const taskId = selectedTask.id;
    const { text, date: taskDate, time:taskTime } = data[taskId];

    input.value = text;
    date.value = taskDate;
    time.value = taskTime;

    deleteTask(e)
}

function deleteTask(e) {
    const selectedTask = e.target.parentElement.parentElement.parentElement;
    const taskId = selectedTask.id;

    data.splice(taskId, 1);
    // selectedTask.remove();
    orderedList.removeChild(selectedTask);
    localStorage.setItem("data", JSON.stringify(data));
}

(() => {
    data = JSON.parse(localStorage.getItem("data")) || [];
    createTask();
})();
