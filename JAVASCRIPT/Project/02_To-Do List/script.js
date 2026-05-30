const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const todoLists = document.querySelector(".todo-lists");

let lists = JSON.parse(localStorage.getItem("tasks")) || [];

function runTodoApp() {
  addBtn.onclick = () => {
    let inputText = taskInput.value.trim();

    if (!inputText) return;

    let listObject = {
      id: crypto.randomUUID(),
      text: inputText,
      checked: false,
    };

    createListElement(listObject.text, listObject.id, listObject.checked);

    lists.push(listObject);

    saveListObject();

    taskInput.value = "";
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

      let item = lists.find((list) => list.id === listEl.dataset.id);

      if (item) {
        item.checked = !item.checked;
      }

      saveListObject();
    } else if (e.target.classList.contains("delete-btn")) {
      let listEl = e.target.closest(".list");

      deleteTodo(listEl.dataset.id, listEl);
    }
  });

  function render(lists) {
    lists.forEach((element) => {
      createListElement(element.text, element.id, element.checked);
    });
  }

  function saveListObject() {
    localStorage.setItem("tasks", JSON.stringify(lists));
  }

  function deleteTodo(id, listEl) {
    let beforeLength = lists.length;

    lists = lists.filter((list) => !(list.id === id && list.checked));

    if (beforeLength !== lists.length) {
      listEl.remove();
    }

    saveListObject();
  }

  function createListElement(inputText, id, checked) {
    const listEl = document.createElement("div");
    listEl.className = "list";
    listEl.dataset.id = id;

    const imgEl = document.createElement("img");
    imgEl.src = checked ? "./assets/multiply.png" : "./assets/unchecked.png";

    imgEl.width = 25;
    imgEl.className = "img";

    const textEl = document.createElement("p");
    textEl.textContent = inputText;
    textEl.className = "text";

    const btnEl = document.createElement("button");
    btnEl.textContent = "X";
    btnEl.className = "delete-btn";

    const toggleDivEl = document.createElement("div");
    toggleDivEl.className = "toggle";

    if (checked) {
      toggleDivEl.classList.add("line-through");
    }

    toggleDivEl.append(imgEl, textEl);

    listEl.append(toggleDivEl, btnEl);

    todoLists.append(listEl);
  }

  render(lists);
}

runTodoApp();
