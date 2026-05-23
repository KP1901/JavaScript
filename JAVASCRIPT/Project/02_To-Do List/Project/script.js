import { nanoid } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";

function App() {
  const taskList = document.querySelector(".task-list");
  const taskInput = document.getElementById("taskInput");
  const addBtn = document.getElementById("add-btn");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  addBtn.onclick = (e) => {
    let inputText = taskInput.value;

    tasks.push({
      id: nanoid(4),
      text: inputText,
      completed: false,
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskList.innerHTML = "";

    render();
  };

  function render() {
    tasks.map((task) => {
      let taskEl = document.createElement("div");
      taskEl.className = "task";

      let imgEl = document.createElement("img");
      imgEl.id = "uncheckImg";
      imgEl.src = "../Assist/unchecked.png";

      let taskTextEl = document.createElement("div");
      taskTextEl.id = "task-text";
      taskTextEl.textContent = task.text;

      let delBtnEl = document.createElement("span");
      delBtnEl.id = "del-btn";
      delBtnEl.textContent = "x";

      taskEl.append(imgEl, taskTextEl, delBtnEl);
      taskList.append(taskEl);
    });
  }
  render();
  // render
}
App();
