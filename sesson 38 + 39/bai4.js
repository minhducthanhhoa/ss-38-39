// Mảng chứa các câu Jokes
let jokes = [
    {
      "joke": "All vampires keep their money in a special place—the blood bank."
    },
    {
      "joke": "What do you call someone who can’t stick to a diet? A desserter."
    },
    {
      "joke": "I only seem to get sick on weekdays. I must have a weekend immune system."
    },
    {
      "joke": "You can tell it's a dogwood tree from its bark."
    },
    {
      "joke": "What do you call a sheep that knows karate? A lamb chop."
    },
    {
      "joke": "What does a dad get in their stocking if they’ve been naughty? Char-coal."
    },
    {
      "joke": "Why did the scarecrow win an award? Because he was outstanding in his field"
    },
    {
      "joke": "What do you call a cow with no legs? Ground beef."
    },
    {
      "joke": "What has ears but cannot hear? A cornfield!"
    },
    {
      "joke": "I don’t get why Marvel doesn’t use the Hulk to advertise more. He’s basically one big Banner."
    }
  ];
  
  // Lấy các phần tử DOM cần sử dụng
  const jokeText = document.getElementById('jokeText');
  const getJokeButton = document.getElementById('getJokeButton');
  
  // Xử lý sự kiện khi click vào nút "Get Another Joke"
  getJokeButton.addEventListener('click', () => {
    // Chọn một câu Joke ngẫu nhiên từ mảng jokes
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex].joke;
  
    // Hiển thị câu Joke lên màn hình
    jokeText.textContent = randomJoke;
  
    // Đổi màu nền của body thành một màu ngẫu nhiên
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  });
  
  // Hàm lấy một màu ngẫu nhiên
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }