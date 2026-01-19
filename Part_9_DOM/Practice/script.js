const openModal = document.querySelector("#openModal");
const modalContainer = document.querySelector(".modal-container");
const closeBtn = document.getElementById("closeModal");
const modalWrapper = document.querySelector(".modal-wrapper");

// open through openn modal
openModal.addEventListener("click", (e) => {
  modalContainer.style.display = "flex";
});

// close through closbtn
closeBtn.addEventListener("click", (e) => {
  modalContainer.style.display = "none";
});

// hiding the overlay
modalContainer.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

// stop bubbling from parent (overlay)
// modalWrapper.addEventListener("click", (e) => {
//   e.stopPropagation();
// });

//a big mistake you were trying to go from inside to outside till the time which not possbile through this way tu gadha abtak andsare bahr  ja rah tha e.target help but this wrong

// now the best event delegation access parent then use e.target it will no start from last chidl /child

// just doning by accessing parent in one line
// modalContainer.addEventListener("click", function (e) {
//   if (e.target.classList.contains("overlay") || e.target.id == "closeModal") {
//     modalContainer.style.display = "none";
//   }
// });
