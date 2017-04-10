'use strict';
let isPolish = false;
function runEverything(){
    let home = document.querySelector('.logo');
    let pl = document.querySelector('.pl');
    let en = document.querySelector('.en');
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
    let submit = document.getElementById('contact-submit');
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
    let gimmick = document.querySelector('.gimmick');
    let wrapper = document.querySelector('.wrapper');
    let sliderLeftArrow = document.querySelector('.left-arrow');
    let sliderRightArrow = document.querySelector('.right-arrow');
    let sliderImgContainer = document.querySelector('.slider__img-container');
    let sliderPageName = document.querySelector('.page-name');
    let sliderSquare1 = document.querySelector('#slider-square-1');
    let sliderSquare2 = document.querySelector('#slider-square-2');
    let sliderSquare3 = document.querySelector('#slider-square-3');
    let modal = document.querySelector('.modal');
    let shadowUnderModal = document.querySelector('.shadow');
    let closeModal = document.querySelector('.close');
    let XHR = null;
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
    function changeInfoOnHover(text){
        info.classList.add('hidden');
        setTimeout(function () {
            info.textContent = text;
        }, 200);
        setTimeout(function () {
            info.classList.remove('hidden');
        }, 400);
    }
    function reactToBrowserButtons(){
        if(window.location.hash === '#home' || window.location.hash === '') {
            hideAllContentElements();
            showClickedContentElement(contentLandingPage);
            if(!isPolish)
                changeInfoOnHover('Click on tiles from left panel to change content');
            if(isPolish)
                changeInfoOnHover('Użyj kafelków w lewym panelu do nawigacji');
        }
        else if(window.location.hash === '#cv') {
            hideAllContentElements();
            showClickedContentElement(contentCv);
            if(!isPolish)
                changeInfoOnHover('You may find some links in cv text');
            if(isPolish)
                changeInfoOnHover('W tekście cv odnajdziesz kilka linków');
        }
        else if(window.location.hash === '#portfolio') {
            hideAllContentElements();
            showClickedContentElement(contentPortfolio);
            if(!isPolish)
                changeInfoOnHover('Click on icons to open new window');
            if(isPolish)
                changeInfoOnHover('Kliknij ikony by otworzyć link w nowym oknie');
        }
        else if(window.location.hash === '#contact') {
            hideAllContentElements();
            showClickedContentElement(contentContact);
            if(!isPolish)
                changeInfoOnHover('Right now form is disabled');
            if(isPolish)
                changeInfoOnHover('Póki co formularz nie działa');
        }
        else if(window.location.hash === '#skills') {
            hideAllContentElements();
            showClickedContentElement(contentSkills);
            if(!isPolish)
                changeInfoOnHover('* means I use it rarely');
            if(isPolish)
                changeInfoOnHover('* oznacza, że rzadko tego używałem');
        }
    }
    reactToBrowserButtons();
    window.addEventListener('hashchange', reactToBrowserButtons);
    home.addEventListener('click', function() {
        if (window.location.hash !== '')
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
        if(!isPolish)
            changeInfoOnHover('Now push "F" button to show my Front End Certificate');
        if(isPolish)
            changeInfoOnHover('Naciśnij "F" by wyświetlić certyfikat');
        window.onkeyup = function(e) {
            var key = e.keyCode ? e.keyCode : e.which;
            if (key == 70) {
                window.open('https://www.freecodecamp.com/bartekkwapisz/front-end-certification');
            }
        };
    }, false);
    freeCodeCamp.addEventListener('mouseout', function() {
        if(!isPolish)
            changeInfoOnHover('* means I use it rarely');
        if(isPolish)
            changeInfoOnHover('* oznacza, że rzadko tego używałem');
        window.onkeyup = null;
    }, false);
    calculator.addEventListener('mouseover', function() {
        if(!isPolish)
            changeInfoOnHover('Calculator for Free Code Camp projects');
        if(isPolish)
            changeInfoOnHover('Kalkulator przygotowany w ramach kursu Free Code Camp');
    }, false);
    simon.addEventListener('mouseover', function() {
        if(!isPolish)
            changeInfoOnHover('Simon Game for Free Code Camp projects');
        if(isPolish)
            changeInfoOnHover('Gra "Simon" przygotowana w ramach kursu Free Code Camp');
    }, false);
    XorO.addEventListener('mouseover', function() {
        if(!isPolish)
            changeInfoOnHover('Tic tac toe game for Free Code Camp projects');
        if(isPolish)
            changeInfoOnHover('Gra "Kółko i krzyżyk" przygotowana w ramach kursu Free Code Camp');
    }, false);
    git.addEventListener('mouseover', function() {
        if(!isPolish)
            changeInfoOnHover('My GitHub profile');
        if(isPolish)
            changeInfoOnHover('Mój profil GitHub');
    }, false);
    codewars.addEventListener('mouseover', function() {
        if(!isPolish)
            changeInfoOnHover('My Codewars profile');
        if(isPolish)
            changeInfoOnHover('Mój profil Codewars');
    }, false);
    codepen.addEventListener('mouseover', function() {
        if(!isPolish)
            changeInfoOnHover('My CodePen profile');
        if(isPolish)
            changeInfoOnHover('Mój profil CodePen');
    }, false);
    natfit.addEventListener('mouseover', function() {
        if(!isPolish)
            changeInfoOnHover('Siple site for friend (2016)');
        if(isPolish)
            changeInfoOnHover('Prosta strona napisana dla kolegi w grudniu 2016');
    }, false);
    legume.addEventListener('mouseover', function() {
        if(!isPolish)
            changeInfoOnHover("Funny site for dad's kiosk (2014)");
        if(isPolish)
            changeInfoOnHover('Zabawna strona dla sklepu taty');
    }, false);
    psd.addEventListener('mouseover', function() {
        if(!isPolish)
            changeInfoOnHover('Some PSD files sliced to HTML and CSS sites');
        if(isPolish)
            changeInfoOnHover('Pliki PSD "pocięte" do HTML i CSS');
    }, false);
    psd.addEventListener('click', function() {

        showClickedContentElement(shadowUnderModal);
        showClickedContentElement(modal);
    }, false);
    closeModal.addEventListener('click', function() {
        modal.classList.add('hidden');
        shadowUnderModal.classList.add('hidden');
        setTimeout(function () {
            modal.classList.add('no-display');
            shadowUnderModal.classList.add('no-display');
        }, 300);
    }, false);
    document.addEventListener('keyup', function (ev) {
        if(ev.keyCode === 27) {
            modal.classList.add('hidden');
            shadowUnderModal.classList.add('hidden');
            setTimeout(function () {
                modal.classList.add('no-display');
                shadowUnderModal.classList.add('no-display');
            }, 300);
        }
    }, false);
    document.addEventListener('keyup', function (ev) {
        if(ev.keyCode === 37) {
            eventFire(sliderLeftArrow, 'click');
        }
    }, false);
    document.addEventListener('keyup', function (ev) {
        if(ev.keyCode === 39) {
            eventFire(sliderRightArrow, 'click');
        }
    }, false);
    contentPortfolio.addEventListener('mouseout', function() {
        if(!isPolish)
            changeInfoOnHover('Click on icons to open new window');
        if(isPolish)
            changeInfoOnHover('Kliknij ikony by otworzyć link w nowym oknie');
    }, false);
    // ********************TOUCH EVENTS**********************//
    function eventFire(el, etype){
        if (el.fireEvent) {
            el.fireEvent('on' + etype);
        } else {
            var evObj = document.createEvent('Events');
            evObj.initEvent(etype, true, false);
            el.dispatchEvent(evObj);
        }
    }
    function activateSliderSwipeOnTouch (){
        document.addEventListener('touchstart', handleTouchStart, false);
        document.addEventListener('touchmove', handleTouchMove, false);
    }
    function deactivateSliderSwipeOnTouch (){
        document.removeEventListener('touchstart', handleTouchStart, false);
        document.removeEventListener('touchmove', handleTouchMove, false);
    }
    var xDown = null;
    var yDown = null;

    function handleTouchStart(evt) {
        xDown = evt.touches[0].clientX;
        yDown = evt.touches[0].clientY;
    }

    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
                /* left swipe */
                eventFire(sliderLeftArrow, 'click');
            } else {
                /* right swipe */
                eventFire(sliderRightArrow, 'click');
            }
        }
        // else {
        //     if ( yDiff > 0 ) {
        //         /* up swipe */
        //     } else {
        //         /* down swipe */
        //     }
        // }
        /* reset values */
        xDown = null;
        yDown = null;
    };
//****************END OF TOUCH EVENTS****************
    let sliderCount = 1;
    sliderLeftArrow.addEventListener('click', function() {
        // if (sliderCount === 1) { UNCOMMENT WHEN SLIDER LEFT TO RIGHT ANIMATION SOLVED
        //     sliderImgContainer.classList.remove('left-bg-pos');
        //     sliderImgContainer.classList.add('right-bg-pos');
        //     sliderCount = 3;
        //     sliderPageName.textContent = 'Sonora';
        //     sliderSquare1.classList.remove('slider__state-square--active');
        //     sliderSquare3.classList.add('slider__state-square--active');
        // }
        if (sliderCount === 2) {
            sliderImgContainer.classList.remove('center-bg-pos');
            sliderImgContainer.classList.add('left-bg-pos');
            sliderCount = 1;
            sliderPageName.textContent = 'page1';
            sliderSquare2.classList.remove('slider__state-square--active');
            sliderSquare1.classList.add('slider__state-square--active');
        }
        else if (sliderCount === 3) {
            sliderImgContainer.classList.remove('right-bg-pos');
            sliderImgContainer.classList.add('center-bg-pos');
            sliderCount = 2;
            sliderPageName.textContent = 'page2';
            sliderSquare3.classList.remove('slider__state-square--active');
            sliderSquare2.classList.add('slider__state-square--active');
        }
    }, false);
    sliderRightArrow.addEventListener('click', function() {
        if (sliderCount === 1) {
            sliderImgContainer.classList.remove('left-bg-pos');
            sliderImgContainer.classList.add('center-bg-pos');
            sliderCount = 2;
            sliderPageName.textContent = 'page2';
            sliderSquare1.classList.remove('slider__state-square--active');
            sliderSquare2.classList.add('slider__state-square--active');
        }
        else if (sliderCount === 2) {
            sliderImgContainer.classList.remove('center-bg-pos');
            sliderImgContainer.classList.add('right-bg-pos');
            sliderCount = 3;
            sliderPageName.textContent = 'Sonora';
            sliderSquare2.classList.remove('slider__state-square--active');
            sliderSquare3.classList.add('slider__state-square--active');
        }
        // else if (sliderCount === 3) {
        //     sliderImgContainer.classList.remove('right-bg-pos');
        //     sliderImgContainer.classList.add('left-bg-pos');
        //     sliderCount = 1;
        //     sliderPageName.textContent = 'page1';
        //     sliderSquare3.classList.remove('slider__state-square--active');
        //     sliderSquare1.classList.add('slider__state-square--active');
        // }
    }, false);
    pl.addEventListener('click', function() {
        isPolish = true;
        changeInfoOnHover('Użyj kafelków w lewym panelu do nawigacji');
        fireAjax('html/pl.html');
    }, false);
    pl.addEventListener('mouseover', function() {
        if(!isPolish)
            changeInfoOnHover('Switch language to Polish (zmień język na polski)');
    }, false);
    pl.addEventListener('mouseout', function() {
        if(!isPolish)
            changeInfoOnHover('Click on tiles from left panel to change content');
    }, false);
    en.addEventListener('click', function() {
        isPolish = false;
        changeInfoOnHover('Click on tiles from left panel to change content');
        fireAjax('html/en.html');
    }, false);
    en.addEventListener('mouseover', function() {
        if(isPolish)
            changeInfoOnHover('Switch language to English (zmień język na angielski)');
    }, false);
    en.addEventListener('mouseout', function() {
        if(isPolish)
            changeInfoOnHover('Użyj kafelków w lewym panelu do nawigacji');
    }, false);
    themes.addEventListener('mouseenter', function() {
        if(!isPolish)
            changeInfoOnHover('Change site appearance');
        if(isPolish)
            changeInfoOnHover('Zmień wygląd strony');
    }, false);
    themes.addEventListener('mouseleave', function() {
        if(!isPolish)
            changeInfoOnHover('Click on tiles from left panel to change content');
        if(isPolish)
            changeInfoOnHover('Użyj kafelków w lewym panelu do nawigacji');
    }, false);
    versions.addEventListener('mouseenter', function() {
        if(!isPolish)
            changeInfoOnHover('Go to other version of porftolio page');
        if(isPolish)
            changeInfoOnHover('Przejdź do innej wersji portfolio');
    }, false);
    versions.addEventListener('mouseleave', function() {
        if(!isPolish)
            changeInfoOnHover('Click on tiles from left panel to change content');
        if(isPolish)
            changeInfoOnHover('Użyj kafelków w lewym panelu do nawigacji');
    }, false);
    gimmick.addEventListener('click', function() {
        if(!isPolish)
            changeInfoOnHover('This version is under construction, come back later');
        if(isPolish)
            changeInfoOnHover('Ta wersja dopiero powstaje, wróć później');
    }, false);
    gimmick.addEventListener('mouseleave', function() {
        if(!isPolish)
            changeInfoOnHover('Click on tiles from left panel to change content');
        if(isPolish)
            changeInfoOnHover('Użyj kafelków w lewym panelu do nawigacji');
    }, false);
    carmel.addEventListener('click', function() {
        document.getElementById('stylesheet').href = 'css/carmel.css';
    }, false);
    ice.addEventListener('click', function() {
        document.getElementById('stylesheet').href = 'css/ice.css';
    }, false);
    pastel.addEventListener('click', function() {
        document.getElementById('stylesheet').href = 'css/style.css';
    }, false);
    submit.addEventListener('click', function (ev) {
        ev.preventDefault();
    },false);
    function ajaxInit(){
        try{
            XHR = new XMLHttpRequest();
        }
        catch(e){
            try {
                XHR = new ActiveXObject('Msxml2.XMLHTTP');
            }
            catch(e2){
                try{
                    XHR = new ActiveXObject('Microsoft.XMLHTTP');
                }
                catch(e3){
                    alert('Browser without AJAX');
                }
            }
        }
        return XHR;
    }
    function fireAjax(URL){
        XHR = ajaxInit();
        if(XHR != null){
            XHR.open('GET', URL, true);
            XHR.onreadystatechange = function(){
                if (XHR.readyState == 4){
                    if(XHR.status === 200){
                        wrapper.innerHTML = XHR.responseText;
                        runEverything();
                    }
                    else {
                        alert('Error - cannot load data');
                    }
                }
            };
            XHR.send(null);
        }
    }
}
window.onload = runEverything;
