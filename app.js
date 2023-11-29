// animasi untuk slider form box
let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
  
});

login.addEventListener("click", () => {
  slider.classList.remove("moveslider");
  formSection.classList.remove("form-section-move");
});

let signupButton = document.querySelector(".signup-button");
let loginButton = document.querySelector(".login-button");
let users = [];

signupButton.addEventListener("click", () => {
  // logika untuk menangani sign-up
  const username = document.querySelector(".user-register").value;
  const password = document.querySelector(".pass-register").value;

  if (username && password) {
    users.push({ username, password });
    alert("Registrasi berhasil!");
    // setelah sign-up berhasil, kita akan mengarahkan ke login secara otomatis
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
  } else {
    alert("Harap isi semua kolom.");
  }
});

loginButton.addEventListener("click", () => {
  // logika untuk menangani login
  const username = document.querySelector(".user-login").value;
  const password = document.querySelector(".pass-login").value;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    alert("Login berhasil!");
    window.location.href = "index.html"; // arahkan ke "index.html" setelah login berhasil
  } else {
    alert("Login gagal. Periksa username dan password.");
  }
});