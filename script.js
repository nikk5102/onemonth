const PAGE_PASSWORD = "mohit";

const lockScreen = document.getElementById("lockScreen");
const letter = document.getElementById("letter");
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("passwordInput");
const errorMessage = document.getElementById("errorMessage");
const togglePassword = document.getElementById("togglePassword");

passwordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (passwordInput.value === PAGE_PASSWORD) {
    lockScreen.classList.add("hidden");
    letter.classList.remove("hidden");
    document.body.classList.add("unlocked");
    window.scrollTo({ top: 0, behavior: "smooth" });
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent = "That password doesn't seem right. Try again.";
    passwordInput.value = "";
    passwordInput.focus();
  }
});

togglePassword.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  togglePassword.textContent = isHidden ? "Hide" : "Show";
  togglePassword.setAttribute(
    "aria-label",
    isHidden ? "Hide password" : "Show password",
  );
});

document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
