// Lấy phần tử DOM cần sử dụng
const numberContainer = document.getElementById('numberContainer');

// Số cuối cùng trong chuỗi số
const lastNumber = 100; 

// Thời gian chạy từ 0 - số cuối cùng (tùy chỉnh thời gian từ 1s - 2s)
const duration = Math.floor(Math.random() * 1000) + 1000;

// Tính toán số lần cập nhật và khoảng thời gian giữa các lần cập nhật
const updateCount = lastNumber + 1;
const interval = duration / updateCount;

// Biến đếm
let count = 0;

// Hàm chạy các số từ 0 đến số cuối cùng và hiển thị lên màn hình
function runNumberCounter() {
  const timer = setInterval(() => {
    numberContainer.textContent = count;

    if (count === lastNumber) {
      clearInterval(timer);
    }

    count++;
  }, interval);
}

// Gọi hàm để bắt đầu chạy số
runNumberCounter();