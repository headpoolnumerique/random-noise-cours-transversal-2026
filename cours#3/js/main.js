const cat = document.getElementById("lazy_cat");

function moveCatWithMouse(event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  cat.style.left = mouseX + "px";
  cat.style.top  = mouseY + "px";
}

document.addEventListener("mousemove", moveCatWithMouse);