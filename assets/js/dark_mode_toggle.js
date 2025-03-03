function attachDarkModeToggle() {
    var toggleButton = document.getElementById("dark-mode-toggle");

    if (!toggleButton) {
        console.warn("Dark mode toggle button not found.");
        return;
    }

    // Prevent duplicate listeners
    if (!toggleButton.hasAttribute("data-listener")) {
        toggleButton.setAttribute("data-listener", "true");

        toggleButton.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");

            updateToggleButtonText();
            updateProfilePicture(); // Updates the profile picture on toggle
            console.log("Dark mode toggled!");
        });
    }

    // Apply stored dark mode setting on page load
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }

    updateToggleButtonText();
    updateProfilePicture();
}

function updateToggleButtonText() {
    var toggleButton = document.getElementById("dark-mode-toggle");
    if (!toggleButton) return;
    if (document.body.classList.contains("dark-mode")) {
        toggleButton.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i> Night Mode';
    }
}

function updateProfilePicture() {
    var profileImg = document.getElementById("profile-img");
    if (!profileImg) return;
    if (document.body.classList.contains("dark-mode")) {
        profileImg.src = "/assets/images/photos/Portrait_NightMode.jpg";
    } else {
        profileImg.src = "/assets/images/photos/portrait.jpg";
    }
}

//document.addEventListener("DOMContentLoaded", function () {
//    attachDarkModeToggle();
//});
