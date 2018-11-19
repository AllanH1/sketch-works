// animation for search bar in top nav

const searchText = document.querySelector(".nav__link__text--search");
const searchIcon = document.querySelector(".nav__link__icon--search");
const searchInput = document.querySelector(".search-container__input");
const closeInputIcon = document.querySelector(".search-container__close-icon");

const openSearch = e => {
  e.preventDefault();
  searchInput.classList.add("search-container__input--open");
  searchText.classList.add("nav__link__text--search--open");
  closeInputIcon.classList.add("search-container__close-icon--open");
};

const closeSearch = () => {
  searchInput.classList.remove("search-container__input--open");
  searchText.classList.remove("nav__link__text--search--open");
  closeInputIcon.classList.remove("search-container__close-icon--open");
};

(() => {
  searchText.addEventListener("click", openSearch);
  searchIcon.addEventListener("click", openSearch);
  closeInputIcon.addEventListener("click", closeSearch);
})();

// parallax sroll effect on hero

const hero = document.querySelector(".hero");

const heroParallax = () => {
  const windowScrollTop = document.documentElement.scrollTop;
  hero.style.backgroundPositionY = `-${windowScrollTop / 8}px`;
};

window.onscroll = () => {
  if (document.documentElement.scrollTop < 350) {
    heroParallax();
  }
};
