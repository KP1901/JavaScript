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
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    this.tasks.push(newTask);
  },

  deleteTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  },

  updateTaskText(taskId, newText) {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) task.text = newText;
  },

  updateTaskStatus(taskId, isCompleted) {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) task.completed = isCompleted;
  },

  save() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  },
};

const TaskView = {
  addButton: document.getElementById("addBtn"),
  taskList: document.getElementById("task-list"),
  userInput: document.getElementById("userInput"),
  filterSection: document.querySelector(".filter-section"),

  createTaskElement(task) {
    const taskElement = document.createElement("li");
    taskElement.dataset.id = task.id;
    taskElement.className = "task-item";

    if (task.completed) {
      taskElement.classList.add("completed");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "toggle-checkbox";
    checkbox.checked = task.completed;

    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = task.text;

    const actions = document.createElement("div");
    actions.className = "actions";

    const editButton = document.createElement("button");
    editButton.className = "edit-btn";
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";

    taskElement.append(checkbox, taskText, actions);
    actions.append(editButton, deleteButton);

    this.taskList.append(taskElement);
  },
};

const TaskController = {
  currentFilter: "all",
  editingTaskId: null,

  init() {
    TaskModel.load();
    this.render();
    this.bindEvents();
  },

  bindEvents() {
    // ADD / UPDATE
    TaskView.addButton.addEventListener("click", () => {
      const text = TaskView.userInput.value.trim();
      if (!text) return;

      if (!this.editingTaskId) {
        TaskModel.addTask(text);
      } else {
        TaskModel.updateTaskText(this.editingTaskId, text);
        this.editingTaskId = null;
      }

      TaskView.userInput.value = "";
      TaskModel.save();
      this.render();
    });

    // DELETE
    TaskView.taskList.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-btn")) {
        const taskElement = e.target.closest("li");
        const taskId = Number(taskElement.dataset.id);

        const task = TaskModel.tasks.find((t) => t.id === taskId);

        if (task && task.completed) {
          TaskModel.deleteTask(taskId);
          TaskModel.save();
          this.render();
        } else {
          alert("You can only delete completed tasks.");
        }
      }
    });

    // EDIT
    TaskView.taskList.addEventListener("click", (e) => {
      if (e.target.classList.contains("edit-btn")) {
        const taskElement = e.target.closest("li");
        this.editingTaskId = Number(taskElement.dataset.id);

        const currentText = taskElement.querySelector(".task-text").textContent;

        TaskView.userInput.value = currentText;
        TaskView.userInput.focus();
      }
    });

    // TOGGLE COMPLETE
    TaskView.taskList.addEventListener("change", (e) => {
      if (e.target.classList.contains("toggle-checkbox")) {
        const taskElement = e.target.closest("li");
        const taskId = Number(taskElement.dataset.id);
        const isCompleted = e.target.checked;

        TaskModel.updateTaskStatus(taskId, isCompleted);
        TaskModel.save();
        this.render();
      }
    });

    // FILTER
    TaskView.filterSection.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (!button || !button.dataset.filter) return;

      this.currentFilter = button.dataset.filter;

      const buttons = TaskView.filterSection.querySelectorAll("button");
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      this.render();
    });
  },

  render() {
    TaskView.taskList.innerHTML = "";

    let filteredTasks = TaskModel.tasks;

    if (this.currentFilter === "completed") {
      filteredTasks = TaskModel.tasks.filter((task) => task.completed);
    } else if (this.currentFilter === "active") {
      filteredTasks = TaskModel.tasks.filter((task) => !task.completed);
    }

    filteredTasks.forEach((task) => TaskView.createTaskElement(task));
  },
};

TaskController.init();
