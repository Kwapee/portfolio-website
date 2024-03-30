document.getElementById("toggle-info").addEventListener("click", function () {
  document.getElementById("more-info").classList.remove("hidden");
  this.style.display = "none";
});

document.getElementById("hide-info").addEventListener("click", function () {
  document.getElementById("more-info").classList.add("hidden");
  document.getElementById("toggle-info").style.display = "block";
});
