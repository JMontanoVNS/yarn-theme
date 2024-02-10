const collectionButtons = document.querySelectorAll(
  ".collections-slideshow-slider-item"
);
collectionButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let current = document.querySelectorAll(".active-collection");
    if(current.length > 0) {
        current[0].className = current[0].className.replace(" active-collection", "");
    }

    button.classList.add("active-collection");
  });
});
