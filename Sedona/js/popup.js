var link = document.querySelector(".modal-search-button");
var popup = document.querySelector(".search-form");


link.addEventListener("click", function(evt) {
  popup.classList.toggle("search-form-show");
});
