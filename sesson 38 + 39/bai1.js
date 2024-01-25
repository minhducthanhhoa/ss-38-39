// Lấy các phần tử DOM cần sử dụng
const steps = document.querySelectorAll('.step');
const previousBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');

let currentStepIndex = 0;

// Hàm để bật step hiện tại
const activateStep = (index) => {
  steps[index].classList.add('active');
};

// Hàm để tắt step hiện tại
const deactivateStep = (index) => {
  steps[index].classList.remove('active');
};

// Xử lý sự kiện khi click vào nút Next
nextBtn.addEventListener('click', () => {
  deactivateStep(currentStepIndex);
  currentStepIndex++;

  activateStep(currentStepIndex);

  previousBtn.disabled = false; // Bật nút Previous

  if (currentStepIndex === steps.length - 1) {
    nextBtn.disabled = true; // Tắt nút Next ở Step cuối cùng
  }
});

// Xử lý sự kiện khi click vào nút Previous
previousBtn.addEventListener('click', () => {
  deactivateStep(currentStepIndex);
  currentStepIndex--;

  activateStep(currentStepIndex);

  nextBtn.disabled = false; // Bật nút Next

  if (currentStepIndex === 0) {
    previousBtn.disabled = true; // Tắt nút Previous ở Step đầu tiên
  }
});

// Kích hoạt Step đầu tiên ban đầu
activateStep(currentStepIndex);
previousBtn.disabled = true; // Tắt nút Previous ở Step đầu tiên ban đầu