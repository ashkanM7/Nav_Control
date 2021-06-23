const menuBars = document.getElementById("menu-bars")
const overlay = document.getElementById("overlay")
const nav1 = document.getElementById("nav-1")
const nav2 = document.getElementById("nav-2")
const nav3 = document.getElementById("nav-3")
const nav4 = document.getElementById("nav-4")
const nav5 = document.getElementById("nav-5")
const navArray = [nav1, nav2, nav3, nav4, nav5]

// Control Navitation Animation
function navAnimantion(direction1, direction2) {
  navArray.forEach((nav, i) => {
    nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`)
  })
}
// Toggle Nav
function toggleNav() {
  // Toggle: menu bars open/close
  menuBars.classList.toggle("change")
  // Toggle Mene Active
  overlay.classList.toggle("overlay-active")
  if (overlay.classList.contains("overlay-active")) {
    // Animate In - Overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right")
    // Animate In - Nav Item
    // navAnimantion("out", "in")
  } else {
    // Animate Out - Overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left")
    // Animate In - Nav Item
    // navAnimantion("in", "out")
  }
}

// Event Listeneres
menuBars.addEventListener("click", toggleNav)
navArray.forEach(nav => {
  nav.addEventListener("click", toggleNav)
})
