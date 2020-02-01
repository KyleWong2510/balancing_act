//close welcome bar//
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

//nav off dashboard page//
var dashboardPage = document.querySelector('.dashboardPage')

transactions.addEventListener('click', hideDashboard)

function hideDashboard() {
    dashboardPage.hidden = true;
}

//nav back to dashboard page//
var dashboardPage = document.querySelector('.dashboardPage')

dashboard.addEventListener('click', appearDashboard)

function appearDashboard() {
    dashboardPage.hidden = false;
}