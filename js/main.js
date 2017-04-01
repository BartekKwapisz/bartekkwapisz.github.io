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
function hideAllOthers(){
    contentLandingPage.classList.add('no-display');
    contentCv.classList.add('no-display');
    contentSkills.classList.add('no-display');
    contentPortfolio.classList.add('no-display');
    contentContact.classList.add('no-display');
}
home.addEventListener('click', function() {
    hideAllOthers();
    contentLandingPage.classList.remove('no-display');
}, false);
cv.addEventListener('click', function() {
    hideAllOthers();
    contentCv.classList.remove('no-display');
}, false);
skills.addEventListener('click', function() {
    hideAllOthers();
    contentSkills.classList.remove('no-display');
}, false);
portfolio.addEventListener('click', function() {
    hideAllOthers();
    contentPortfolio.classList.remove('no-display');
}, false);
contact.addEventListener('click', function() {
    hideAllOthers();
    contentContact.classList.remove('no-display');
}, false);
