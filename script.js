function darkMode() {
    var element = document.body;
    element.classList.toggle("dark_mode");

    var navButton = document.querySelectorAll(".desktop_nav li");
    navButton.forEach(function (navButton) {
        navButton.classList.toggle("dark-mode");
    });

    var bannerButton = document.querySelectorAll(".banner_nav li")
    navButton.forEach(function (navButton) {
        navButton.classList.toggle("dark-mode");
    });

    var button = document.querySelector('.dark_mode_button');
    element.classList.toggle("dark-mode");
    button.classList.toggle("dark-mode");
} 