document.addEventListener("DOMContentLoaded", function () {
  function validateField(input, regex, errorElement, message) {
    if (!regex.test(input.value.trim())) {
      errorElement.textContent = message;
      return false;
    } else {
      errorElement.textContent = "";
      return true;
    }
  }

  // ==== ĐĂNG NHẬP ====
  const loginForm = document.getElementById("login-form");
  const loginUsername = document.getElementById("login-username");
  const loginPassword = document.getElementById("login-password");

  const loginUsernameError = document.getElementById("login-username-error");
  const loginPasswordError = document.getElementById("login-password-error");

  const usernameRegex = /^[a-zA-Z0-9_]{4,20}$/;
  const passwordRegex = /^.{6,}$/;

  loginUsername.addEventListener("blur", function () {
    validateField(
      loginUsername,
      usernameRegex,
      loginUsernameError,
      "Tên đăng nhập không hợp lệ (4-20 ký tự, không dấu)."
    );
  });
  loginPassword.addEventListener("blur", function () {
    validateField(
      loginPassword,
      passwordRegex,
      loginPasswordError,
      "Mật khẩu phải từ 6 ký tự trở lên."
    );
  });

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const isUserValid = validateField(
      loginUsername,
      usernameRegex,
      loginUsernameError,
      "Tên đăng nhập không hợp lệ (4-20 ký tự, không dấu)."
    );
    const isPassValid = validateField(
      loginPassword,
      passwordRegex,
      loginPasswordError,
      "Mật khẩu phải từ 6 ký tự trở lên."
    );

    if (isUserValid && isPassValid) {
      alert("Đăng nhập thành công (demo)");
    }
  });

  // ==== ĐĂNG KÝ ====
  const registerForm = document.getElementById("register-form");
  const registerUsername = document.getElementById("register-username");
  const registerEmail = document.getElementById("register-email");
  const registerPassword = document.getElementById("register-password");

  const registerUsernameError = document.getElementById(
    "register-username-error"
  );
  const registerEmailError = document.getElementById("register-email-error");
  const registerPasswordError = document.getElementById(
    "register-password-error"
  );

  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  const registerPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  registerUsername.addEventListener("blur", function () {
    validateField(
      registerUsername,
      usernameRegex,
      registerUsernameError,
      "Tên đăng nhập không hợp lệ (4-20 ký tự, không dấu)."
    );
  });

  registerEmail.addEventListener("blur", function () {
    validateField(
      registerEmail,
      emailRegex,
      registerEmailError,
      "Email không hợp lệ."
    );
  });

  registerPassword.addEventListener("blur", function () {
    validateField(
      registerPassword,
      registerPasswordRegex,
      registerPasswordError,
      "Mật khẩu ít nhất 6 ký tự, gồm chữ và số."
    );
  });

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const isUserValid = validateField(
      registerUsername,
      usernameRegex,
      registerUsernameError,
      "Tên đăng nhập không hợp lệ (4-20 ký tự, không dấu)."
    );
    const isEmailValid = validateField(
      registerEmail,
      emailRegex,
      registerEmailError,
      "Email không hợp lệ."
    );
    const isPassValid = validateField(
      registerPassword,
      registerPasswordRegex,
      registerPasswordError,
      "Mật khẩu ít nhất 6 ký tự, gồm chữ và số."
    );

    if (isUserValid && isEmailValid && isPassValid) {
      alert("Đăng ký thành công (demo)");
    }
  });

  // ==== CHUYỂN ĐỔI LOGIN / REGISTER ====
  const container = document.querySelector(".container");
  const loginBtn = document.querySelector(".login-btn");
  const registerBtn = document.querySelector(".register-btn");

  registerBtn.addEventListener("click", () => {
    container.classList.add("active");
  });

  loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
  });
});
