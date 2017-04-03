'use strict';
let home = document.querySelector('.logo');
let pl = document.querySelector('.pl');
let info = document.querySelector('#changing-information');
let freeCodeCamp = document.querySelector('#fcc');
let cv = document.querySelector('.cv');
let skills = document.querySelector('.skills');
let portfolio = document.querySelector('.portfolio');
let calculator = document.querySelector('.calculator');
let simon = document.querySelector('.simon');
let XorO = document.querySelector('.XorO');
let git = document.querySelector('.git');
let codewars = document.querySelector('.codewars');
let codepen = document.querySelector('.codepen');
let natfit = document.querySelector('.natfit');
let legume = document.querySelector('.legume');
let psd = document.querySelector('.psd');
let contact = document.querySelector('.contact');
let contentLandingPage = document.querySelector('.content-landing-page');
let contentCv = document.querySelector('.content-cv');
let contentPortfolio = document.querySelector('.content-portfolio');
let contentSkills = document.querySelector('.content-skills');
let contentContact = document.querySelector('.content-contact');
let themes = document.querySelector('.themes');
let versions = document.querySelector('.versions');
let pastel = document.querySelector('.pastel');
let carmel = document.querySelector('.carmel');
let ice = document.querySelector('.ice');
let variablesNames = [contentLandingPage,contentCv,contentSkills,contentPortfolio,contentContact];
function hideAllContentElements(){
    for( let i = 0, n = variablesNames.length; i < n; i++ ) {
        variablesNames[i].classList.add('hidden');
        setTimeout(function () {
            variablesNames[i].classList.add('no-display');
        }, 300);
    }
}
function showClickedContentElement(clickedName){
    setTimeout(function () {
        clickedName.classList.remove('no-display');
        setTimeout(function () {
            clickedName.classList.remove('hidden');
        }, 20);
    }, 350);
}
// function eventListeners(){
//     let clickedMenuListenersNames = [home, cv, skills, portfolio, contact];
//     for( let i = 0, n = variablesNames.length; i < n; i++ ) {
//         clickedMenuListenersNames[i].addEventListener('click', function() {
//             hideAllContentElements();
//             showClickedContentElement(variablesNames[i]);
//         }, false);
//     }
// }
// eventListeners();
function reactToBrowserButtons(){
    if(window.location.hash === '#home' || window.location.hash === '') {
        hideAllContentElements();
        showClickedContentElement(contentLandingPage);
        changeInfoOnHover('Click on icons from left panel to change content');
    }
    else if(window.location.hash === '#cv') {
        hideAllContentElements();
        showClickedContentElement(contentCv);
        changeInfoOnHover('You may find some links in cv text');
    }
    else if(window.location.hash === '#portfolio') {
        hideAllContentElements();
        showClickedContentElement(contentPortfolio);
        changeInfoOnHover('Click on icons to open new window');
    }
    else if(window.location.hash === '#contact') {
        hideAllContentElements();
        showClickedContentElement(contentContact);
        changeInfoOnHover('Right now form is disabled');
    }
    else if(window.location.hash === '#skills') {
        hideAllContentElements();
        showClickedContentElement(contentSkills);
        changeInfoOnHover('* means I use it rarely');
    }
}
window.addEventListener('hashchange', reactToBrowserButtons);
window.onload = reactToBrowserButtons;

home.addEventListener('click', function() {
    window.location.hash = 'home'; //może to zmień na window.location.href na serwerze
}, false);
cv.addEventListener('click', function() {
    window.location.hash = 'cv';
}, false);
skills.addEventListener('click', function() {
    window.location.hash = 'skills';
}, false);
portfolio.addEventListener('click', function() {
    window.location.hash = 'portfolio';
}, false);
contact.addEventListener('click', function() {
    window.location.hash = 'contact';
}, false);
freeCodeCamp.addEventListener('mouseover', function() {
    changeInfoOnHover('Now push "F" button to see my Front End Certificate');
    window.onkeyup = function(e) {
        var key = e.keyCode ? e.keyCode : e.which;
        if (key == 70) {
            window.open('https://www.freecodecamp.com/bartekkwapisz/front-end-certification');
        }
    };
}, false);
freeCodeCamp.addEventListener('mouseout', function() {
    changeInfoOnHover('* means I use it rarely');
    window.onkeyup = null;
}, false);
calculator.addEventListener('mouseover', function() {
    changeInfoOnHover('Calculator for Free Code Camp projects');
}, false);
simon.addEventListener('mouseover', function() {
    changeInfoOnHover('Simon Game for Free Code Camp projects');
}, false);
XorO.addEventListener('mouseover', function() {
    changeInfoOnHover('Tic tac toe game for Free Code Camp projects');
}, false);
git.addEventListener('mouseover', function() {
    changeInfoOnHover('My GitHub profile');
}, false);
codewars.addEventListener('mouseover', function() {
    changeInfoOnHover('My Codewars profile');
}, false);
codepen.addEventListener('mouseover', function() {
    changeInfoOnHover('My CodePen profile');
}, false);
natfit.addEventListener('mouseover', function() {
    changeInfoOnHover('Siple site for friend (2016)');
}, false);
legume.addEventListener('mouseover', function() {
    changeInfoOnHover('Funny site for dad (2014)');
}, false);
psd.addEventListener('mouseover', function() {
    changeInfoOnHover('Some PSD files converted to HTML and CSS sites');
}, false);
contentPortfolio.addEventListener('mouseout', function() {
    changeInfoOnHover('Click on icons to open new window');
}, false);
pl.addEventListener('mouseover', function() {
    changeInfoOnHover('Switch language to Polish (zmień język na polski)');
}, false);
pl.addEventListener('mouseout', function() {
    changeInfoOnHover('Click on icons from left panel to change content');
}, false);
themes.addEventListener('mouseenter', function() {
    changeInfoOnHover('Change site appearance');
}, false);
themes.addEventListener('mouseleave', function() {
    changeInfoOnHover('Click on icons from left panel to change content');
}, false);
versions.addEventListener('mouseenter', function() {
    changeInfoOnHover('Go to other version of porftolio page');
}, false);
versions.addEventListener('mouseleave', function() {
    changeInfoOnHover('Click on icons from left panel to change content');
}, false);
function changeInfoOnHover(text){
    info.classList.add('hidden');
    setTimeout(function () {
        info.textContent = text;
    }, 200);
    setTimeout(function () {
        info.classList.remove('hidden');
    }, 400);
}
carmel.addEventListener('click', function() {
    document.getElementById('stylesheet').href = 'css/carmel.css';
}, false);
ice.addEventListener('click', function() {
    document.getElementById('stylesheet').href = 'css/ice.css';
}, false);
pastel.addEventListener('click', function() {
    document.getElementById('stylesheet').href = 'css/style.css';
}, false);
