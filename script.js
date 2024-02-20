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




document.addEventListener('keyup', function (event) {
    const music = document.getElementById('music');
    const userInput = event.key.toLowerCase();


    // Check if user input matches the specific string
    if (userInput === 'q') { // For example, registering 'c' as the specific string
        // Change background image
        const introduction = document.getElementById('introduction')
        const myPortrait = document.getElementById('portrait')
        document.body.style.backgroundImage = "url('https://cdn1.epicgames.com/ue/product/Screenshot/Untitled-1-1920x1080-40d871ba3129e359aaab454149e03063.jpg?resize=1&w=1920')";
        // Play music
        introduction.textContent = "Hi! I'm Evil Sean";
        myPortrait.src = "./resources/easter egg/evil_sean.jpg";

        music.play();
    } else if (userInput === 'r') { // Assuming 'r' is the key to revert changes
        // Revert background image
        document.body.style.backgroundImage = "none";
        // Revert portrait image source
        const myPortrait = document.getElementById('portrait');
        myPortrait.src = "resources/index/my-portrait.jpg"; // Provide the original image source here
        // Pause music
        introduction.textContent = "Hi! I'm Sean";
        music.pause();
        music.currentTime = 0; // Reset music playback to start
    }

});

