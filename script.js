let lists = document.querySelectorAll(".list");
let boxes = document.querySelectorAll("#left, #right");
let resetButton = document.getElementById("reset");
let initialState = document.getElementById("left").innerHTML;

lists.forEach((list) => {
  list.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    setTimeout(() => {
      e.target.classList.add("hidden");
    }, 0);
  });

  list.addEventListener("dragend", function (e) {
    e.target.classList.remove("hidden");
  });
});

boxes.forEach((box) => {
  box.addEventListener("dragover", function (e) {
    e.preventDefault();
    box.classList.add("highlight");
  });

  box.addEventListener("dragleave", function (e) {
    box.classList.remove("highlight");
  });

  box.addEventListener("drop", function (e) {
    e.preventDefault();
    let id = e.dataTransfer.getData("text/plain");
    let draggable = document.getElementById(id);
    box.appendChild(draggable);
    box.classList.remove("highlight");
  });
});

resetButton.addEventListener("click", function () {
  document.getElementById("left").innerHTML = initialState;
  document.getElementById("right").innerHTML = "";
  lists = document.querySelectorAll(".list");
  lists.forEach((list) => {
    list.addEventListener("dragstart", function (e) {
      e.dataTransfer.setData("text/plain", e.target.id);
      setTimeout(() => {
        e.target.classList.add("hidden");
      }, 0);
    });

    list.addEventListener("dragend", function (e) {
      e.target.classList.remove("hidden");
    });
  });
});
