let $ = document;

////////////////////////////

const body = $.body;
const inputElem = $.querySelector("input");
const colorCircles = $.querySelectorAll(".colorCircle");
const notesContainerRow = $.querySelector(".row");
const eraserBtn = $.querySelector(".eraserBtn");
const noteAdderBtn = $.querySelector(".noteAdderBtn");
const emptyBoxAlert = $.querySelector(".emptyBoxAlert");


function generateNewNote (){
  if (inputElem.value.trim()) {
    let NewNoteContainer = $.createElement("div");
    NewNoteContainer.className = "col-12 col-md-6 col-lg-4 col-xl-3 mb-2";

    let NewNoteValue = $.createElement("div");
    NewNoteValue.className = "card d-flex shadow py-3";
    NewNoteValue.style.backgroundColor = inputElem.style.backgroundColor;
    NewNoteValue.innerHTML = inputElem.value;

    let trashIcon = $.createElement("i");
    trashIcon.className = "fa-solid fa-trash-can ms-2";

    NewNoteValue.append(trashIcon);
    NewNoteContainer.append(NewNoteValue);
    notesContainerRow.append(NewNoteContainer);

    inputElem.value = null;
    inputElem.style.backgroundColor = "white";

    const trashIcons = $.querySelectorAll(".fa-trash-can");
    trashIcons.forEach(function (trashIcon) {
      trashIcon.addEventListener("click", function () {
        trashIcon.parentElement.parentElement.remove();
      });
    });
  } else {
    inputElem.value = null;
    inputElem.style.backgroundColor = "white";

    emptyBoxAlert.classList = "emptyBoxAlert fade-in";
    setTimeout(function () {
      emptyBoxAlert.classList = "emptyBoxAlert";
    }, 3000);
  }
}


// to select the input by pressing enter
body.addEventListener("keydown", function (event) {
  inputElem.focus();
});

// to make new Notes by keyboard and remove them
inputElem.addEventListener("keydown", function () {
  if (event.key === "Enter") {
    generateNewNote()
  }
});

// to make new Notes by add button and remove them
noteAdderBtn.addEventListener("click", function () {
  generateNewNote()
});

// to delete input value by button
eraserBtn.addEventListener("click", function () {
  inputElem.value = null;
  inputElem.style.backgroundColor = "white";
});

// to change input background color
colorCircles.forEach(function (colorCircle) {
  colorCircle.addEventListener("click", function () {
    inputElem.style.backgroundColor = colorCircle.style.backgroundColor;
  });
});