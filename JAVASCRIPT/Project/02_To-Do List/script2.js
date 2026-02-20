// manage state properly

const manageState = {
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
  },

  toggle(id) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.save();
    }
  },

  delete(id) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    this.save();
  },
};

const inputEl = document.getElementById("input-box");
const addButtonEl = document.getElementById("add-btn");
const messageEl = document.getElementById("message");

const TaskUI = {
  listContainer: document.getElementById("list-container"),

  renderTask(task) {
    const li = document.createElement("li");
    li.textContent = task.text;
    li.dataset.id = task.id;

    const span = document.createElement("span");
    span.textContent = "X";

    li.append(span);
    this.listContainerEl.append(li);
  },

  removeTask(id) {
    const el = this.listContainer.querySelector(`[data-id=${id}]`);
    if (el) el.remove();
  },

  toggleTask(id) {
    const el = this.listContainer.querySelector(`[data-id="${id}"]`);
    if (el) el.classList.toggle("checked");
  },

  showMessage(text) {
    messageEl.textContent = text;
  },
  renderAll(tasks) {
    tasks.forEach((task) => this.renderTask(task));
  },
};
