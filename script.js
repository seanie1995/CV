function darkMode() {
    var element = document.body;
    element.classList.toggle("dark_mode");

    /* var navButton = document.querySelectorAll(".desktop_nav li");
    navButton.forEach(function (navButton) {
        navButton.classList.toggle("dark-mode");
    });

    var bannerButton = document.querySelectorAll(".banner_nav li")
    navButton.forEach(function (navButton) {
        navButton.classList.toggle("dark-mode");
    }); */

    var button = document.querySelector('.dark_mode_button');
    element.classList.toggle("dark-mode");
    button.classList.toggle("dark-mode");
}

let keyWord = ''

document.addEventListener('keyup', function (event) {
    const music = document.getElementById('music');
    const pop = document.getElementById('pop')
    const indexBody = document.getElementById('index_body')
    const userInput = event.key.toLowerCase();
    keyWord += event.key;
    keyWord = keyWord.slice(-5);
    if (keyWord === 'metal') {

        const introduction = document.getElementById('introduction')
        const myPortrait = document.getElementById('portrait')
        indexBody.style.backgroundImage = "url('https://cdn1.epicgames.com/ue/product/Screenshot/Untitled-1-1920x1080-40d871ba3129e359aaab454149e03063.jpg?resize=1&w=1920')";
        introduction.textContent = "Hi! I'm Evil Sean.";
        myPortrait.src = "./resources/easter egg/evil_sean.jpg";

        music.play();
    } else if (userInput === 'r') {

        document.body.style.backgroundImage = "none";

        const myPortrait = document.getElementById('portrait');
        myPortrait.src = "resources/index/my-portrait.jpg";

        introduction.textContent = "Hi! I'm Sean.";
        music.pause();
        pop.play();
    }
});

const shredButton = document.getElementById('shred');
const shredCat = document.getElementById('shredCat');
const rickRoll = document.getElementById('rick_roll')
shredButton.addEventListener('click', () => {

    const currentOpacity = parseFloat(shredCat.style.opacity);



    if (currentOpacity === 1) {
        shredCat.style.opacity = '0';
        rickRoll.pause();
    } else {
        shredCat.style.opacity = '1';
        rickRoll.play();

    }


})


