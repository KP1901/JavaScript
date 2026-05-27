const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const todoLists = document.querySelector(".todo-lists");

let lists = JSON.parse(localStorage.getItem("tasks")) || [];

function runTodoApp() {
  addBtn.onclick = (e) => {
    let inputText = taskInput.value;
    createListElement(inputText);

    let listObject = {
      id: crypto.randomUUID().slice(0, 4),
      text: inputText,
      checked: false,
    };

    lists.push(listObject);

    saveListObject(listObject);
  };

  todoLists.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("img") ||
      e.target.classList.contains("text")
    ) {
    }
  });

  function render(lists) {
    lists.forEach((element) => createListElement(element.text));
  }

  function saveListObject(listObject) {
    localStorage.setItem("tasks", JSON.stringify(lists));
  }

  function createListElement(inputText) {
    const listEl = document.createElement("div");
    listEl.className = "list";

    const imgEl = document.createElement("img");
    imgEl.src = "./assets/unchecked.png";
    imgEl.width = "25";
    imgEl.alt = "uncheck image";
    imgEl.className = "img";

    const textEl = document.createElement("p");
    textEl.textContent = inputText;
    textEl.className = "text";

    const btnEl = document.createElement("button");
    btnEl.textContent = "X";
    btnEl.className = "delete-btn";

    const toggleDivEl = document.createElement("div");
    toggleDivEl.className = "toggle";

    toggleDivEl.append(imgEl, textEl);
    listEl.append(toggleDivEl, btnEl);
    todoLists.append(listEl);
  }
  render(lists);
}
runTodoApp();
