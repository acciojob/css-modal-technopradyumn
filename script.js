//your JS code here. If required.

const openModal = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close-modal");

openModal.addEventListener("click", function () {
    modal.style.display = "block";
});

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
