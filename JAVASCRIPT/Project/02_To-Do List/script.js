const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const todoLists = document.querySelector(".todo-lists");

function runTodoApp() {
  let lists = localStorage.getItem("task", JSON.parse(task)) || [];

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

  function saveListObject(listObject) {
    localStorage.setItem("task", JSON.stringify(list));
  }

  function createListElement(inputText) {
    const listEl = document.createElement("div");
    listEl.className = "list";

    const imgEl = document.createElement("img");
    imgEl.src = "./assets/unchecked.png";
    imgEl.width = "25";
    imgEl.alt = "uncheck image";

    const textEl = document.createElement("p");
    textEl.textContent = inputText;
    textEl.className = "text";

    const btnEl = document.createElement("button");
    btnEl.textContent = "X";
    btnEl.className = "delete-btn";

    listEl.append(imgEl, textEl, btnEl);
    todoLists.append(listEl);
  }
}
runTodoApp();
