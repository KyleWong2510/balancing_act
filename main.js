var closeButton = document.querySelector('.close')
var closeWelcome = document.querySelector('.welcome-bar')

closeButton.addEventListener('click', welcomeDisappear)

function welcomeDisappear() {
    closeWelcome.style.display = "none";
}

//border-left on nav icons//
var dashboard = document.querySelector('.icon1')
var transactions = document.querySelector('.icon2')
var profile = document.querySelector('.icon3')

//add border on wallet and remove from dashboard on click//
//wallet needs eventlistener
dashboard.addEventListener('click', addDashboardBorder);
transactions.addEventListener('click', addTransactionBorder);
profile.addEventListener('click', addProfileBorder);

function addDashboardBorder() {
    dashboard.classList.add('blue-border');
    transactions.classList.remove('blue-border');
    profile.classList.remove('blue-border');
}
function addTransactionBorder() {
    dashboard.classList.remove('blue-border');
    transactions.classList.add('blue-border');
    profile.classList.remove('blue-border');
}
function addProfileBorder() {
    dashboard.classList.remove('blue-border');
    transactions.classList.remove('blue-border');
    profile.classList.add('blue-border');
}