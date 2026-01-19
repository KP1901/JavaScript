(function manipulate() {
  const leftEl = document.querySelector(".left");

  const deleteZone = document.querySelector(".delete-zone");
  const editZone = document.querySelector(".edit-zone");
  const deletedFiles = document.querySelector(".deleted-files");
  const editedFiles = document.querySelector(".edited-files");

  let activeDragItem = null;

  let dragSource = [leftEl, deletedFiles, editedFiles];

  function setupDragSources(dragItems) {
    for (const dragItem of dragItems) {
      dragItem.addEventListener("dragstart", (e) => {
        if (e.target.classList.contains("list")) {
          activeDragItem = e.target;
        }
      });

      dragItem.addEventListener("dragend", () => {
        activeDragItem = null;
      });
    }
  }

  //   leftEl.addEventListener("dragstart", (e) => {
  //     if (e.target.classList.contains("list")) {
  //       activeDragItem = e.target;
  //     }
  //   });

  //   leftEl.addEventListener("dragend", () => {
  //     activeDragItem = null;
  //   });

  //   deletedFiles.addEventListener("dragstart", (e) => {
  //     if (e.target.classList.contains("list")) {
  //       activeDragItem = e.target;
  //     }
  //   });
  //   deletedFiles.addEventListener("dragend", () => {
  //     activeDragItem = null;
  //   });

  //   editedFiles.addEventListener("dragstart", (e) => {
  //     if (e.target.classList.contains("list")) {
  //       activeDragItem = e.target;
  //     }
  //   });
  //   editedFiles.addEventListener("dragend", () => {
  //     activeDragItem = null;
  //   });

  function enableDropZone() {
    deleteZone.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    editZone.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
  }
  function setupDropHandler() {
    deleteZone.addEventListener("drop", () => {
      if (!activeDragItem) return;
      deletedFiles.append(activeDragItem);
    });

    editZone.addEventListener("drop", () => {
      if (!activeDragItem) return;
      editedFiles.append(activeDragItem);
    });
  }
  function initDragAndDrop() {
    setupDragSources(dragSource);
    enableDropZone();
    setupDropHandler();
  }

  initDragAndDrop();
})();
