document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);

  });



  // adding SF places as list items

  // --- your code here!
  const addItem = (e) => {
    e.preventDefault();

    const itemInputEl = document.querySelector(".favorite-input");
    const itemEl = itemInputEl.value;
    itemEl.value = "";

    const newItemLi = document.createElement("li");
    newItemLi.textContent = itemEl;

    const itemsList = document.getElementById("sf-places");
    itemsList.appendChild(newItemLi);
  };

  const itemSubmitButton = document.querySelector(".favorite-submit");
  itemSubmitButton.addEventListener("click", addItem);


  // adding new photos

  // --- your code here!
  const addPhoto = (e) => {
    e.preventDefault();

    const urlQuery = document.querySelector(".photo-url-input");
    const urlVal = urlQuery.value;
    urlQuery.value = "";
    const newPhoto = document.createElement("photo");
    newPhoto.src = urlVal;

    const newPhotoLi = document.createElement("li");
    newPhotoLi.appendChild(newPhoto);
    const dogPhotosList = document.querySelector(".dog-photos");
    dogPhotosList.appendChild(newPhotoLi);
  };

  const photoSubmit = document.querySelector(".photo-url-submit");
  photoSubmit.addEventListener("click", addPhoto);

});
