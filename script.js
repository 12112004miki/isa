onload = () => {
    document.body.classList.remove("container");
  };

const photoPopover = document.querySelector("#photo-popover");
const photoPopoverImage = photoPopover.querySelector("img");
let photoTimeout;

function showFlowerPhoto(flower) {
  photoPopoverImage.src = flower.dataset.photo;
  photoPopover.classList.add("is-visible");
  photoPopover.setAttribute("aria-hidden", "false");

  window.clearTimeout(photoTimeout);
  photoTimeout = window.setTimeout(() => {
    photoPopover.classList.remove("is-visible");
    photoPopover.setAttribute("aria-hidden", "true");
  }, 3000);
}

document.querySelectorAll(".flower[data-photo]").forEach((flower) => {
  flower.addEventListener("click", () => showFlowerPhoto(flower));
  flower.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showFlowerPhoto(flower);
    }
  });
});