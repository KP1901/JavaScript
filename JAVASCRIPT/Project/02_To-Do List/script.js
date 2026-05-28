const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const todoLists = document.querySelector(".todo-lists");

let lists = JSON.parse(localStorage.getItem("tasks")) || [];

function runTodoApp() {
  addBtn.onclick = (e) => {
    let inputText = taskInput.value;

    let listObject = {
      id: crypto.randomUUID().slice(0, 4),
      text: inputText,
      checked: false,
    };

    createListElement(inputText, listObject.id);

    lists.push(listObject);

    saveListObject(listObject);
  };

  todoLists.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("text") ||
      e.target.classList.contains("img")
    ) {
      let toggleEL = e.target.closest(".toggle");
      let imageEl = toggleEL.querySelector(".img");

      if (toggleEL.classList.contains("line-through")) {
        toggleEL.classList.remove("line-through");
        imageEl.src = "./assets/unchecked.png";
      } else {
        toggleEL.classList.add("line-through");
        imageEl.src = "./assets/multiply.png";
      }
      let listEl = e.target.closest(".list");

      console.log(lists);

      let item = lists.find((list) => list.id === listEl.dataset.id);

      if (item.checked) {
        item.checked = false;
      } else {
        item.checked = true;
      }
      saveListObject();
    } else {
      deleteTodo();
    }
  });

  function render(lists) {
    lists.forEach((element) => createListElement(element.text, element.id));
  }

  function saveListObject() {
    localStorage.setItem("tasks", JSON.stringify(lists));
  }

  function deleteTodo() {
    const updatedLists = lists.filter((list) => list.checked !== false);

    console.log(updatedLists);
  }

  function createListElement(inputText, id) {
    const listEl = document.createElement("div");
    listEl.className = "list";
    listEl.dataset.id = id;

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
