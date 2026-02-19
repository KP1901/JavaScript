// const inputEl = document.getElementById("input-box");
// const listContainerEl = document.getElementById("list-container");
// const addButtonEl = document.getElementById("add-btn");
// const messageEl = document.querySelector(".message");

// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// /* ---------- Initial Full Render (ONLY ONCE) ---------- */
// tasks.forEach((task) => {
//   createTaskElement(task);
// });

// /* ---------- Add Task ---------- */
// function addTask() {
//   messageEl.textContent = "";

//   if (!inputEl.value.trim()) {
//     messageEl.textContent = "* Type Something!";
//     return;
//   }

//   const newTask = {
//     id: Date.now(), // ✅ Unique ID
//     text: inputEl.value.trim(),
//     completed: false,
//   };

//   tasks.push(newTask);

//   createTaskElement(newTask); // ✅ No index needed
//   saveData();

//   inputEl.value = "";
// }

// addButtonEl.addEventListener("click", addTask);

// /* ---------- Toggle & Delete ---------- */
// listContainerEl.addEventListener("click", function (e) {
//   const target = e.target;

//   // TOGGLE
//   if (target.tagName === "LI") {
//     const id = Number(target.dataset.id);

//     const task = tasks.find((task) => task.id === id);
//     if (task) {
//       task.completed = !task.completed;
//       target.classList.toggle("checked");
//       saveData();
//     }
//   }

//   // DELETE
//   if (
//     target.tagName === "SPAN" &&
//     target.parentElement.classList.contains("checked")
//   ) {
//     const li = target.parentElement;
//     const id = Number(li.dataset.id);

//     // Remove from array
//     tasks = tasks.filter((task) => task.id !== id);

//     // Remove from DOM
//     li.remove();

//     saveData();
//   }
// });

// /* ---------- Utilities ---------- */
// function saveData() {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function createTaskElement(task) {
//   const li = document.createElement("li");
//   li.textContent = task.text;

//   // ✅ Store unique ID in dataset
//   li.dataset.id = task.id;

//   li.classList.toggle("checked", task.completed);

//   const span = document.createElement("span");
//   span.textContent = "X";

//   li.appendChild(span);
//   listContainerEl.appendChild(li);
// }

const TaskState = {
  tasks: [],

  load() {
    try {
      this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    } catch {
      this.tasks = [];
    }
  },

  save() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  },

  add(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    this.tasks.push(newTask);
    this.save();
    return newTask;
  },

  toggle(id) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.save();
    }
    return task;
  },

  delete(id) {
    this.tasks = this.tasks.filter((t) => t.id !== id);

    this.save();
  },
};

const TaskUI = {
  listContainer: document.getElementById("list-container"),

  renderTask(task) {
    const li = document.createElement("li");
    li.textContent = task.text;
    li.dataset.id = task.id;
    li.classList.toggle("checked", task.completed);

    const span = document.createElement("span");
    span.textContent = "X";

    li.appendChild(span);
    this.listContainer.appendChild(li);
  },

  removeTask(id) {
    const el = this.listContainer.querySelector(`[data-id="${id}"]`);
    if (el) el.remove();
  },

  toggleTask(id) {
    const el = this.listContainer.querySelector(`[data-id="${id}"]`);
    if (el) el.classList.toggle("checked");
  },

  renderAll(tasks) {
    this.listContainer.innerHTML = "";
    tasks.forEach((task) => this.renderTask(task));
  },
};

const inputEl = document.getElementById("input-box");
const addButtonEl = document.getElementById("add-btn");

TaskState.load();
TaskUI.renderAll(TaskState.tasks);

addButtonEl.addEventListener("click", () => {
  const text = inputEl.value.trim();
  if (!text) return;

  const newTask = TaskState.add(text);
  TaskUI.renderTask(newTask);

  inputEl.value = "";
});

TaskUI.listContainer.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;

  const id = Number(li.dataset.id);

  // DELETE (only if span clicked AND li is checked)
  if (e.target.tagName === "SPAN" && li.classList.contains("checked")) {
    TaskState.delete(id);
    TaskUI.removeTask(id);
    return;
  }

  // TOGGLE (only when clicking the li itself, not the span)
  if (e.target.tagName === "LI") {
    TaskState.toggle(id);
    TaskUI.toggleTask(id);
  }
});

