// 1. Event Handling 🎈
const clickBtn = document.getElementById("clickBtn");
const hoverBtn = document.getElementById("hoverBtn");
const keyInput = document.getElementById("keypressInput");

clickBtn.addEventListener("click", () => alert("Button was clicked!"));
hoverBtn.addEventListener("mouseover", () => hoverBtn.style.backgroundColor = "yellow");
hoverBtn.addEventListener("mouseout",  () => hoverBtn.style.backgroundColor = "");

// Keypress detection
keyInput.addEventListener("keypress", e => console.log("Key pressed:", e.key));

// Bonus: double‑click & long‑press
clickBtn.addEventListener("dblclick", () => alert("Double‑clicked!"));
let pressTimer;
clickBtn.addEventListener("mousedown", () => {
  pressTimer = setTimeout(() => alert("Long press!"), 1000);
});
clickBtn.addEventListener("mouseup", () => clearTimeout(pressTimer));


// 2. Interactive Elements 🎮
// Button that changes text & color
const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", function() {
  this.textContent = "I Changed!";
  this.style.backgroundColor = "lightgreen";
});

// Image gallery/slideshow
const images = [
  "https://via.placeholder.com/300x200?text=1",
  "https://via.placeholder.com/300x200?text=2",
  "https://via.placeholder.com/300x200?text=3"
];
let idx = 0;
const galleryImg = document.getElementById("galleryImg");
document.getElementById("nextBtn").addEventListener("click", () => {
  idx = (idx + 1) % images.length;
  galleryImg.src = images[idx];
});
document.getElementById("prevBtn").addEventListener("click", () => {
  idx = (idx - 1 + images.length) % images.length;
  galleryImg.src = images[idx];
});

// Tabs/Accordion
document.querySelectorAll(".tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tabContent").forEach(div => div.style.display = "none");
    document.getElementById("tab" + btn.dataset.tab).style.display = "block";
  });
});


// 3. Form Validation 📋✅
const form = document.getElementById("myForm");
const pwd = document.getElementById("password");
const feedback = document.getElementById("passwordFeedback");

form.addEventListener("submit", e => {
  const user = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const pass = pwd.value;

  if (!user || !email || !pass) {
    alert("All fields are required.");
    e.preventDefault(); return;
  }
  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRx.test(email)) {
    alert("Enter a valid email."); e.preventDefault(); return;
  }
  if (pass.length < 8) {
    alert("Password must be at least 8 characters."); e.preventDefault();
  }
});

// Bonus: real‑time password feedback
pwd.addEventListener("input", () => {
  feedback.textContent = pwd.value.length < 8
    ? "Password too short."
    : "Password looks good!";
});
