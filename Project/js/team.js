const texts = [
  "Chúng tôi không chỉ viết code, chúng tôi xây dựng trải nghiệm.",
  "Đam mê - Sáng tạo - Tinh tế trong từng dòng code.",
  "Kết hợp công nghệ và thẩm mỹ trong mọi dự án.",
];

let currentText = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");

function type() {
  if (charIndex < texts[currentText].length) {
    typingText.textContent += texts[currentText].charAt(charIndex);
    charIndex++;
    setTimeout(type, 80);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = texts[currentText].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    currentText = (currentText + 1) % texts.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (texts.length) type();
});
