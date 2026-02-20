const inputEl = document.getElementById("input-box");
const listContainerEl = document.getElementById("list-container");
const addButtonEl = document.getElementById("add-btn");
const messageEl = document.querySelector(".message");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

/* ---------- Initial Full Render (ONLY ONCE) ---------- */
tasks.forEach((task) => {
  createTaskElement(task);
});

/* ---------- Add Task ---------- */
function addTask() {
  messageEl.textContent = "";

  if (!inputEl.value.trim()) {
    messageEl.textContent = "* Type Something!";
    return;
  }

  const newTask = {
    id: Date.now(), // ✅ Unique ID
    text: inputEl.value.trim(),
    completed: false,
  };

  tasks.push(newTask);

  createTaskElement(newTask); // ✅ No index needed
  saveData();

  inputEl.value = "";
}

addButtonEl.addEventListener("click", addTask);

/* ---------- Toggle & Delete ---------- */
listContainerEl.addEventListener("click", function (e) {
  const target = e.target;

  // TOGGLE
  if (target.tagName === "LI") {
    const id = Number(target.dataset.id);

    const task = tasks.find((task) => task.id === id);
    if (task) {
      task.completed = !task.completed;
      target.classList.toggle("checked");
      saveData();
    }
  }

  // DELETE
  if (
    target.tagName === "SPAN" &&
    target.parentElement.classList.contains("checked")
  ) {
    const li = target.parentElement;
    const id = Number(li.dataset.id);

    // Remove from array
    tasks = tasks.filter((task) => task.id !== id);

    // Remove from DOM
    li.remove();

    saveData();
  }
});

/* ---------- Utilities ---------- */
function saveData() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function createTaskElement(task) {
  const li = document.createElement("li");
  li.textContent = task.text;

  // ✅ Store unique ID in dataset
  li.dataset.id = task.id;

  li.classList.toggle("checked", task.completed);

  const span = document.createElement("span");
  span.textContent = "X";

  li.appendChild(span);
  listContainerEl.appendChild(li);
}

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
