var closeButton = document.querySelector('.close')
var closeWelcome = document.querySelector('.welcome-bar')

closeButton.addEventListener('click', welcomeDisappear)

function welcomeDisappear() {
    closeWelcome.style.display = "none";
}