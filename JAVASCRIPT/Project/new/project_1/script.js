const userInput = document.getElementById("userInput");
const addButton = document.getElementById("addBtn");
const taskList = document.getElementById("task-list");
const filterSection = document.querySelector(".filter-section");

let tasks = [];
let editId = null;
let filterStat = "all";

// Save tasks to localStorage
function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function load() {
  try {
    tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  } catch {
    tasks = [];
  }
  filterStat = localStorage.getItem("filterStat") || "all";
}

// Add or edit task
function addTask() {
  const text = userInput.value.trim();
  if (!text) return;

  if (editId === null) {
    tasks.push({
      id: Date.now(),
      text,
      completed: false,
    });
  } else {
    const task = tasks.find((t) => t.id === editId);
    if (!task) return;
    task.text = text;
    editId = null;
  }

  save();
  render();
  userInput.value = "";
}

// Delete task by ID
function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);

  save();
  render();
}

// Toggle task completed
function toggleComplete(id, checked) {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = checked;
    save();
    render();
  }
}

// Create DOM element for a task
function createTaskElement(task) {
  const li = document.createElement("li");
  li.dataset.id = task.id;
  li.className = "task-item";
  if (task.completed) li.classList.add("completed");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "toggle-checkbox";
  checkbox.checked = task.completed;

  const taskText = document.createElement("span");
  taskText.textContent = task.text;
  taskText.className = "task-text";

  const actions = document.createElement("div");
  actions.className = "actions";

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "edit";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete";

  li.append(checkbox, taskText, actions);
  actions.append(editButton, deleteButton);
  taskList.append(li);
}

// Render all tasks
function render() {
  taskList.innerHTML = "";

  let filterTasks = tasks;

  if (filterStat === "active") {
    filterTasks = tasks.filter((t) => t.completed == false);
  } else if (filterStat === "completed") {
    filterTasks = tasks.filter((t) => t.completed == true);
  }
  // filterTasks.forEach((task) => {
  //   createTaskElement(task);
  // });
  //or

  filterTasks.forEach(createTaskElement);
}

// Initialize app
function init() {
  load();
  render();

  addButton.addEventListener("click", addTask);

  // Handle edit/delete button clicks
  taskList.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    const id = Number(li.dataset.id);
    const task = tasks.find((t) => t.id === id); // Get task object

    if (e.target.classList.contains("edit")) {
      const text = li.querySelector(".task-text").textContent;
      userInput.value = text;
      editId = id;
    }

    if (e.target.classList.contains("delete")) {
      if (task.completed) {
        deleteTask(id);
      } else {
        alert("You can only delete a completed task!");
      }
    }
  });

  // Handle checkbox change
  taskList.addEventListener("change", (e) => {
    if (!e.target.classList.contains("toggle-checkbox")) return;
    const li = e.target.closest("li");
    const id = Number(li.dataset.id);
    toggleComplete(id, e.target.checked);
  });

  // handle filter
  filterSection.addEventListener("click", (e) => {
    if (!e.target.dataset.filter) return;

    filterStat = e.target.dataset.filter;

    localStorage.setItem("filterStat", filterStat);

    render();
  });
}

init();
