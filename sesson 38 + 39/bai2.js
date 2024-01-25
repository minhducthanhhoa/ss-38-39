// Lấy các phần tử DOM cần sử dụng
const searchIcon = document.getElementById('searchIcon');
const searchBarContainer = document.getElementById('searchBarContainer');

let isExpanded = false;

// Xử lý sự kiện khi click vào icon search
searchIcon.addEventListener('click', () => {
  if (isExpanded) {
    searchBarContainer.classList.remove('expanded');
  } else {
    searchBarContainer.classList.add('expanded');
  }

  isExpanded = !isExpanded;
});