const model = {
  tasks: [],
  editId: null,
  filterStat: "all",

  save() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  },

  saveStat() {
    localStorage.setItem("filterStat", this.filterStat);
  },

  setFilterStat(stat) {
    this.filterStat = stat;
    this.saveStat();
  },

  load() {
    try {
      this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    } catch {
      this.tasks = [];
    }
    this.filterStat = localStorage.getItem("filterStat") || "all";
  },

  addTask(text) {
    if (this.editId === null) {
      this.tasks.push({
        id: Date.now(),
        text,
        completed: false,
      });
    } else {
      const task = this.tasks.find((t) => t.id === this.editId);
      if (!task) return;
      task.text = text;
      this.editId = null;
    }
    this.save();
  },

  deleteTask(id) {
    this.tasks = this.tasks.filter((t) => t.id !== id) || [];
    this.save();
  },

  toggleComplete(id, checked) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.completed = checked;
      this.save();
    } else {
      return;
    }
  },
};
const view = {
  userInput: document.getElementById("userInput"),
  addButton: document.getElementById("addBtn"),
  taskList: document.getElementById("task-list"),
  filterSection: document.querySelector(".filter-section"),

  createTaskElement(task) {
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
    view.taskList.append(li);
  },

  render(tasks, filterStat) {
    this.taskList.innerHTML = "";

    let filterTasks = tasks;

    if (!filterStat) return;

    if (filterStat === "active") {
      filterTasks = tasks.filter((t) => t.completed === false);
    } else if (filterStat === "completed") {
      filterTasks = tasks.filter((t) => t.completed === true);
    }
    filterTasks.forEach((task) => {
      this.createTaskElement(task);
    });

    //or

    // filterTasks.forEach(createTaskElement);
  },

  getInputValue() {
    return this.userInput.value.trim();
  },
  setInputValue(text) {
    this.userInput.value = text;
  },
  clearInput() {
    this.userInput.value = "";
  },
};
const controller = {
  init() {
    model.load();
    view.render(model.tasks, model.filterStat);

    view.addButton.addEventListener("click", (e) => {
      const text = view.getInputValue();
      if (!text) return;
      model.addTask(text);
      view.render(model.tasks, model.filterStat);
      view.clearInput();
    });

    view.taskList.addEventListener("click", (e) => {
      const li = e.target.closest("li");
      if (!li) return;
      const id = Number(li.dataset.id);
      const task = model.tasks.find((t) => t.id === id); // Get task object

      if (e.target.classList.contains("edit")) {
        const text = li.querySelector(".task-text").textContent;
        if (!text) return;
        view.setInputValue(text);
        model.editId = id;
      }

      if (e.target.classList.contains("delete")) {
        if (task.completed) {
          model.deleteTask(id);
          view.render(model.tasks, model.filterStat);
        } else {
          alert("You can only delete a completed task!");
        }
      }
    });

    view.taskList.addEventListener("change", (e) => {
      if (!e.target.classList.contains("toggle-checkbox")) return;
      const li = e.target.closest("li");
      const id = Number(li.dataset.id);
      model.toggleComplete(id, e.target.checked);
      view.render(model.tasks, model.filterStat);
    });

    view.filterSection.addEventListener("click", (e) => {
      if (!e.target.dataset.filter) return;

      model.setFilterStat(e.target.dataset.filter);
      model.saveStat();
      view.render(model.tasks, model.filterStat);
    });
  },
};

controller.init();
