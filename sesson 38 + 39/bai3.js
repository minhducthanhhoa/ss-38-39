// Lấy phần tử DOM cần sử dụng
const backgroundImage = document.getElementById('backgroundImage');
const overlay = document.getElementById('overlay');

// Xử lý sự kiện khi hình ảnh đã tải hoàn thành
backgroundImage.addEventListener('load', () => {
  // Hiển thị hình ảnh lên mờ dần
  backgroundImage.style.opacity = '1';

  // Tạo hiệu ứng từ 0% lên 100% và biến mất
  let opacity = 0;
  let percentage = 0;

  const interval = setInterval(() => {
    opacity += 0.01;
    percentage += 1;

    overlay.textContent = `${percentage}%`;
    overlay.style.opacity = opacity.toFixed(2);

    if (percentage >= 100) {
      clearInterval(interval);
      overlay.style.opacity = '0';
    }
  }, 20); // Số ms để tăng lên 1% (tùy chỉnh thời gian mờ → rõ)

});