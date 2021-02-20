(() => {
  const listTitle = document.getElementById("list-title");
  const search = new URLSearchParams(window.location.search);
  const genreTitle = search.get("genreTitle");
  if (listTitle && genreTitle) {
    listTitle.innerText = `ژانر : ${genreTitle}`
  }
  const q = search.get("q");
  if (listTitle && q) {
    listTitle.innerText = `نتایج جستجو برای : ${q}`
  }
})();


const searchContainer = document.querySelector(".search--container");
const searchOverlay = document.querySelector(".search--overlay");
const searchText = document.querySelector(".header__search");
const searchIcon = document.querySelector("#search");

const showSearch = () => {
  searchContainer.style.display = 'flex'
};

searchText.onclick = showSearch;
searchIcon.onclick = showSearch;

const hideSearch = () => {
  searchContainer.style.display = 'none'
};

searchOverlay.onclick = hideSearch;