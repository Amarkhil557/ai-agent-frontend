const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// Dark Mode Toggle
darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
    } else {
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
    }
});

// Senden auch mit Enter oder Tab
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendBtn.click();
    }
    if (e.key === "Tab") {
        e.preventDefault();
        sendBtn.click();
    }
});

