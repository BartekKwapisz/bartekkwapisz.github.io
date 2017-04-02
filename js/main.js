'use strict';
let home = document.querySelector('.logo');
let cv = document.querySelector('.cv');
let skills = document.querySelector('.skills');
let portfolio = document.querySelector('.portfolio');
let contact = document.querySelector('.contact');
let contentLandingPage = document.querySelector('.content-landing-page');
let contentCv = document.querySelector('.content-cv');
let contentPortfolio = document.querySelector('.content-portfolio');
let contentSkills = document.querySelector('.content-skills');
let contentContact = document.querySelector('.content-contact');
let variablesNames = [contentLandingPage,contentCv,contentSkills,contentPortfolio,contentContact];
function hideAllContentElements(){
    for( let i = 0, n = variablesNames.length; i < n; i++ ) {
        variablesNames[i].classList.add('hidden');
        setTimeout(function () {
            variablesNames[i].classList.add('no-display');
        }, 500);
    }
}
function showClickedContentElement(clickedName){
    setTimeout(function () {
        clickedName.classList.remove('no-display');
        setTimeout(function () {
            clickedName.classList.remove('hidden');
        }, 20);
    }, 600);
}
function eventListeners(){
    let clickedMenuListenersNames = [home, cv, skills, portfolio, contact];
    for( let i = 0, n = variablesNames.length; i < n; i++ ) {
        clickedMenuListenersNames[i].addEventListener('click', function() {
            hideAllContentElements();
            showClickedContentElement(variablesNames[i]);
        }, false);
    }
}
eventListeners();
