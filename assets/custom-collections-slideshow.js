const collections = document.querySelectorAll(
  ".collections-slideshow-cards-container"
);
const collectionButtons = document.querySelectorAll(
  ".collections-slideshow-slider-item"
);
const firstButton = collectionButtons[0];
firstButton.classList.add("active-collection");

collections.forEach((collection) => {
  if (collection.dataset.collection == firstButton.innerText.toLowerCase()) {
    collection.classList.add("show-active-collection");
  }
});

collectionButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let current = document.querySelectorAll(".active-collection");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(
        " active-collection",
        ""
      );
    }

    button.classList.add("active-collection");
    collections.forEach((collection) => {
      collection.className = collection.className.replace(
        " show-active-collection",
        ""
      );
      if (collection.dataset.collection == button.innerText.toLowerCase()) {
        collection.classList.add("show-active-collection");
      }
    });
  });
});
