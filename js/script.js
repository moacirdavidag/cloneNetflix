let assistir = document.getElementById("assistir");
let trailer = document.getElementById("trailerContainer");
let fechar = document.getElementById("fechar");
let video = document.querySelector("iframe");

assistir.addEventListener("click", () => {
    trailer.style.display = "flex";
})

fechar.addEventListener("click", () => {
    trailer.style.display = "none";
    video.hidden = true; 
})