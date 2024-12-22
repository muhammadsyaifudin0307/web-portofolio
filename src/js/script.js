// Humburger

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".nav-list");

hamburgerMenu.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (!navbar.contains(event.target) && !hamburgerMenu.contains(event.target)) {
    navbar.classList.remove("active");
  }
});

// Download Cv
document.getElementById("cv").addEventListener("click", function () {
  const downloadCv = document.createElement("a");
  downloadCv.href = "";
  downloadCv.download = "DownloadCv.pdf";
  downloadCv.click();
});
