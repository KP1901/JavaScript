const TaskModel = {
  tasks: [],

  load() {
    try {
      this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    } catch {
      this.tasks = [];
    }
  },

  addTask(text) {
    const task = {
      id: Date.now(),
      text,
      completed: false,
    };

    this.tasks.push(task);

    return task;
  },

  deleteTask(id) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  },

  editing(id, text) {
    this.tasks.forEach((task) => {
      if (task.id === id) {
        task.id = id;
        task.text = text;
      }
    });
    this.save();
    this.load();
  },

  save() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  },
};

const TaskView = {
  addBtn: document.getElementById("addBtn"),
  taskList: document.getElementById("task-list"),
  userInput: document.getElementById("userInput"),

  createTask(task) {
    const li = document.createElement("li");
    li.dataset.id = task.id;
    li.className = "task-item";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.className = "toggle-checkbox";

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = task.text;

    const div = document.createElement("div");
    div.className = "actions";

    const editButton = document.createElement("button");
    editButton.className = "edit-btn";
    editButton.textContent = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "delete";

    li.append(input);
    li.append(span);
    li.append(div);
    div.append(editButton, deleteButton);
    this.taskList.append(li);
  },
  deleteTask(task) {
    task.remove();
  },
  updatingTask(id) {
    let list = Array.from(this.taskList.children);
    console.log(list);
  },
};

const TaskController = {
  init() {
    let editingId = null;

    TaskModel.load();

    TaskModel.tasks.forEach((task) => {
      TaskView.createTask(task);
    });

    TaskView.addBtn.addEventListener("click", (e) => {
      const text = TaskView.userInput.value.trim();
      if (!text) return;
      if (!editingId) {
        const task = TaskModel.addTask(text);
        TaskView.createTask(task);
        TaskView.userInput.value = "";
        TaskModel.save();
      } else {
        TaskModel.editing(editingId, text);
        TaskView.updatingTask(editingId);
        TaskModel.save();
      }
    });

    TaskView.taskList.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-btn")) {
        const task = e.target.closest("li");
        TaskModel.deleteTask(Number(task.dataset.id));
        TaskView.deleteTask(task);
        TaskModel.save();
      }
    });

    TaskView.taskList.addEventListener("click", (e) => {
      if (e.target.classList.contains("edit-btn")) {
        const task = e.target.closest("li");
        editingId = Number(task.dataset.id);
        TaskView.userInput.value = `${task.querySelector(".task-text").textContent}`;
        // console.log(editingId);
      }
    });
  },
};

TaskController.init();
