function attachDarkModeToggle() {
    var toggleButton = document.getElementById("dark-mode-toggle");

    if (toggleButton && !toggleButton.hasAttribute("data-listener")) {
        toggleButton.setAttribute("data-listener", "true");

        toggleButton.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");

            console.log("Dark mode toggled!");
        });
    }

    // Apply stored dark mode setting when the page loads
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
        toggleButton.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        document.body.classList.remove("dark-mode");
        toggleButton.innerHTML = '<i class="fas fa-moon"></i> Night Mode';
    }
}

// Ensure the function runs on page load
//document.addEventListener("DOMContentLoaded", function () {
//    attachDarkModeToggle();
});
