var darkToggle = document.getElementById("dark-toggle");

darkToggle.onclick = function () {
  document.body.classList.toggle("dark-mode");

  var projectModals = document.getElementsByName("projectModal");
  projectModals.forEach((projectModal) =>
    projectModal.classList.toggle("modal-color")
  );

  if (document.body.classList.contains("dark-mode")) {
    darkToggle.classList = "far fa-sun";
  } else {
    darkToggle.classList = "far fa-moon";
  }
};
