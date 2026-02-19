const inputEl = document.getElementById("input-box");
const listContainerEl = document.getElementById("list-container");
const addButtonEl = document.getElementById("add-btn");
const messageEl = document.querySelector(".message");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
  messageEl.textContent = "";
  if (!inputEl.value) {
    messageEl.textContent = `* Type Something!`;
    return;
  }
  tasks.push({
    text: inputEl.value,
    completed: false,
  });
  inputEl.value = "";
  updateUi();
}

addButtonEl.addEventListener("click", addTask);

listContainerEl.addEventListener("click", function (e) {
  const target = e.target;

  if (target.tagName === "LI") {
    const index = Number(target.dataset.id);
    tasks[index].completed = !tasks[index].completed;
    updateUi();
  }
  if (
    target.tagName === "SPAN" &&
    target.parentElement.classList.contains("checked")
  ) {
    const index = Number(target.parentElement.dataset.id);
    tasks.splice(index, 1);
    updateUi();
  }
});

function saveData() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderData() {
  listContainerEl.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    li.dataset.id = index;

    const span = document.createElement("span");

    span.textContent = "X";

    if (task.completed) {
      li.classList.toggle("checked");
    }
    li.appendChild(span);
    listContainerEl.appendChild(li);
  });
}

function updateUi() {
  saveData();
  renderData();
}

renderData();

/*

Problems : 

1 => 

    const index = Array.from(list).indexOf(target);
    tasks[index].completed = !tasks[index].completed;
    saveData();
    renderData();

    - i was trying to get index from nodelist which is not real array so i convert it first   
    - i was not using ! to reverse the status

2 => 
  
  - i was toggle inside if it who rendering clears the data thats why checked never toggle
  - so i toggle it inside render

flow = 

USER ACTION
   ↓
EVENT HANDLER
   ↓
UPDATE STATE (tasks)
   ↓
SAVE
   ↓
RENDER

*/
