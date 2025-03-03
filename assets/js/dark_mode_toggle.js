function attachDarkModeToggle() {
    var toggleButton = document.getElementById("dark-mode-toggle");

    if (!toggleButton) {
        console.warn("Dark mode toggle button not found.");
        return;
    }

    // Remove existing event listener to prevent duplication
    toggleButton.replaceWith(toggleButton.cloneNode(true));
    toggleButton = document.getElementById("dark-mode-toggle");

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");

        updateToggleButtonText();
        console.log("Dark mode toggled!");
    });

    // Apply stored dark mode setting when the page loads
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }

    // Update the button text based on the mode
    updateToggleButtonText();
}

// Function to update the toggle button text/icon
function updateToggleButtonText() {
    var toggleButton = document.getElementById("dark-mode-toggle");

    if (!toggleButton) return;

    if (document.body.classList.contains("dark-mode")) {
        toggleButton.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i> Night Mode';
    }
}

// Ensure the function runs on page load
document.addEventListener("DOMContentLoaded", function () {
    attachDarkModeToggle();
});
