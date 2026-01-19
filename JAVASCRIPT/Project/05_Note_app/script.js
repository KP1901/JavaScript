const createBtnEl = document.querySelector(".createBtn");
const notesContainerEl = document.querySelector(".notes-container");

const notes = JSON.parse(localStorage.getItem("notes")) || [];

function createNote() {
  const div = document.createElement("div");
  div.className = "note";

  const textarea = document.createElement("textarea");
  textarea.name = "textarea";

  const imgDisk = document.createElement("img");
  imgDisk.src = "./assets/disk.svg";
  imgDisk.id = "saveIcon";
  imgDisk.width = "20";

  const imgTrash = document.createElement("img");
  imgTrash.src = "./assets/trash.png";
  imgTrash.id = "deleteIcon";
  imgTrash.width = "20";

  div.appendChild(textarea);
  div.appendChild(imgDisk);
  div.appendChild(imgTrash);
  notesContainerEl.appendChild(div);
}

createBtnEl.addEventListener("click", createNote);
