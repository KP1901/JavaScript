(function manipulate() {
  const lists = document.querySelectorAll(".list");
  const leftEl = document.querySelector(".left");

  const deleteZone = document.querySelector(".delete-zone");
  const editZone = document.querySelector(".edit-zone");
  const deletedFiles = document.querySelector(".deleted-files");
  const editedFiles = document.querySelector(".edited-files");

  let dragEl = null;

  Array.from(lists).forEach((list) => {
    list.addEventListener("dragstart", (e) => {
      dragEl = e.target;
    });
    list.addEventListener("dragend", () => {
      dragEl = null;
    });
  });

  deleteZone.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  deleteZone.addEventListener("drop", () => {
    if (!dragEl) return;
    deletedFiles.append(dragEl);
  });

  editZone.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  editZone.addEventListener("drop", () => {
    if (!dragEl) return;
    editedFiles.append(dragEl);
  });
})();
