 //header
 function toggleMenu() {
    var toggle = document.querySelector(".toggle");
    var nav = document.querySelector(".nav");
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
}

//3d
let texts = ["Still", "360o", "3D"];
let index = 0;
let interval = setInterval(function() {
  index = (index + 1) % texts.length;
  document.getElementById("text").innerHTML = texts[index];
}, 2000);

// logo slider
var copy = document.querySelector(".logos-slide").cloneNode(true);
      document.querySelector(".logos").appendChild(copy);