let videoBtn = document.querySelectorAll(".vid-btn");

function openSearch() {
  let searchBar = document.querySelector(".search-cover");
  if ((searchBar.style.display = "none")) {
    searchBar.style.display = "flex";
    // searchBar.style.transition = 'none';
  } else {
    searchBar.style.display = "none";
  }
}

function closeSearch() {
  let searchBar = document.querySelector(".search-cover");
  searchBar.style.display = "none";
}

function loginForm() {
  let loginBar = document.querySelector("#form");
  if ((loginBar.style.display = "none")) {
    loginBar.style.display = "inline-block";
  }
}

function closeForm() {
  let closeBar = document.querySelector("#form");
  if ((closeBar.style.display = "inline-block")) {
    closeBar.style.display = "none";
  }
}

videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
