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
var dashboardPage = document.querySelector('.dashboard-page')

transactions.addEventListener('click', hideDashboard)

function hideDashboard() {
    dashboardPage.classList.add('hidden');
    transactionsPage.classList.remove('hidden');
    profilePage.classList.add('hidden');
}

//nav on dashboard page//
var dashboardPage = document.querySelector('.dashboard-page')

dashboard.addEventListener('click', appearDashboard)

function appearDashboard() {
    dashboardPage.classList.remove('hidden');
    transactionsPage.classList.add('hidden');
    profilePage.classList.add('hidden');
}

//nav off transactions page//
var transactionsPage = document.querySelector('.transactions-page')

dashboard.addEventListener('click', hideTransactions)

function hideTransactions() {
    transactionsPage.classList.add('hidden');
    dashboardPage.classList.remove('hidden');
    profilePage.classList.add('hidden');
}

//nav to transactions page//
var transactionsPage = document.querySelector('.transactions-page')

transactions.addEventListener('click', appearTransactions)

function appearTransactions() {
    transactionsPage.classList.remove('hidden');
    dashboardPage.classList.add('hidden');
    profilePage.classList.add('hidden');
}

// //nav off profile page//
// var profilePage = document.querySelector('.profile-page')

// dashboard.addEventListener('click', hideProfile)

// function hideProfile() {
//     transactionsPage.classList.add('hidden');
//     dashboardPage.classList.remove('hidden');
//     profilePage.classList.add('hidden');
// }

// //nav to profile page//
// var profilePage = document.querySelector('.profile-page')

// profile.addEventListener('click', appearProfile)

// function appearTransactions() {
//     transactionsPage.classList.add('hidden');
//     dashboardPage.classList.add('hidden');
//     profilePage.classList.remove('hidden');
// }