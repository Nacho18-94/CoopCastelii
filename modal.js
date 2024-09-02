//Esto corresponde al Modal
//variable
cover_img = document.getElementById("ctn-cover-img");
cover_img2 = document.getElementById("ctn-cover-img2");
// Variables para el modal de video
var videoModal = document.getElementById("videoModal");
var btnVideo = document.getElementById("btn-video");
var cerrarVideoModal = document.getElementById("cerrar-video-modal");
var video = videoModal.querySelector("video");

//funciones

function mostrar_img() {
  cover_img.style.display = "flex";
}
function mostrar_img2() {
  cover_img2.style.display = "flex";
}
function ocultar_img() {
  cover_img.style.display = "none";
}
function ocultar_img2() {
  cover_img2.style.display = "none";
}
// Mostrar modal de video
btnVideo.addEventListener("click", function() {
  videoModal.style.display = "flex";
  video.play();
});
// Cerrar modal de video
cerrarVideoModal.addEventListener("click", function() {
  videoModal.style.display = "none";
  video.pause();
  video.currentTime = 0;
});
// Cerrar modal al hacer clic fuera de él
window.addEventListener("click", function(event) {
  if (event.target == videoModal) {
    videoModal.style.display = "none";
    video.pause();
    video.currentTime = 0;
  }
});

document.getElementById("btn-img").addEventListener("click", mostrar_img);
document.getElementById("btn-img2").addEventListener("click", mostrar_img2);
document.getElementById("cerrar-img").addEventListener("click", ocultar_img);
document.getElementById("cerrar-img2").addEventListener("click", ocultar_img2);



//Esto corresponde al Header
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
