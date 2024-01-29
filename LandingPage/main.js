const OPEN = "open";

const allNavLinks = document.getElementById("nav-links");

function open_closeMenu() {
  if (allNavLinks.classList.contains(OPEN)) {
    allNavLinks.classList.remove(OPEN);
  } else {
    allNavLinks.classList.add(OPEN);
  }
}