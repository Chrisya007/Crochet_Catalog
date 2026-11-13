const viewer = document.querySelector(".image-viewer");
const viewerImage = viewer?.querySelector(".image-viewer-content");
const closeButton = viewer?.querySelector(".image-viewer-close");

if (viewer instanceof HTMLDialogElement && viewerImage instanceof HTMLImageElement && closeButton instanceof HTMLButtonElement) {
  document.querySelectorAll(".project-image-button").forEach((button) => {
    button.addEventListener("click", () => {
      const image = button.querySelector("img");
      if (!(image instanceof HTMLImageElement)) {
        return;
      }

      viewerImage.src = image.currentSrc || image.src;
      viewerImage.alt = image.alt;
      viewer.showModal();
      closeButton.focus();
    });
  });

  closeButton.addEventListener("click", () => viewer.close());

  viewer.addEventListener("click", (event) => {
    if (event.target === viewer) {
      viewer.close();
    }
  });
}
