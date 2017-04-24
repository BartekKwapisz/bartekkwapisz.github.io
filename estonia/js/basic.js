$(document).ready(function() {
    'use strict';
    let imageSrc = ['img/bartek.jpg', 'img/bartekOK.jpg'];
    let selectImage = 0;
    let polish = false;
    let clicked = 0;
    let hashChange = 0; //for proper work of back arrow
    window.onload = articleRefreshOnBrowserNavigation(); //to get article content if user refresh page when adress ends with #cv #skills or #portfolio
    function articleRefreshOnBrowserNavigation(){
        if(window.location.hash === '#cv') {
            getArticleContent('cv');
        }
        else if(window.location.hash === '#skills') {
            getArticleContent('skills');
        }
        else if(window.location.hash === '#portfolio') {
            getArticleContent('portfolio');
        }
    }
    $('.navBtn').click(function() {
        window.location.hash = $(this).attr('href');
    });
    $('a').click(function(e) {
        e.preventDefault(); //to prevent going page up after clicking anchor
    });
    $('#go-to-metro').click(function() {
        window.open('https://bartekkwapisz.github.io/');
    });
    $('#go-to-metro').click(function() {
        window.open('http://bartekkwapisz.co.nf/');
    });
    $('.arrow').click(function() {
        if(selectImage === 0)
            selectImage++;
        else if(selectImage === 1)
            selectImage--;
        $('.main-photo').fadeOut(
            function(){
                $(this).attr('src', imageSrc[selectImage]).fadeIn();
            }
        );
    });
    function getArticleContent(x){
        $('#article-wrap').height(1000);//to prevent site jumping after fadeOut
        $('article').fadeOut(440);
        setTimeout(function(){
            if(!$('article').hasClass(x+'Active')){
                $('article').removeClass();
                $('article').addClass(x+'Active');
                if(polish){
                    $.get( 'pl/html/'+x+'.html', function( data ) {
                        $('article').html(data).hide().fadeIn('slow');
                    });
                }
                else{
                    $.get( 'html/'+x+'.html', function( data ) {
                        $('article').html(data).hide().fadeIn('slow');
                    });
                }
            }
            else{
                $('article').removeClass(); //to hide article on another click
                $('article').html('');
                hashChange++;
            }
        }, 400);
    }
    function wasClicked(whatWasClicked){
        clicked++;
        $('.last').css('color','#8CB2FF');
        getArticleContent(whatWasClicked);
        setTimeout(function(){
            $('.last').css('color','');
        }, 500);
    }
    $('#cv').click(function() {
        wasClicked('cv');
    });
    $('#skills').click(function() {
        wasClicked('skills');
    });
    $('#portfolio').click(function() {
        wasClicked('portfolio');
    });
    $(window).bind('hashchange', function(){ //to show content in article on back arrow in browser
        hashChange++;
        if(clicked !== hashChange){
            articleRefreshOnBrowserNavigation();
            clicked++;
        }
    });
    //change language
    $('body').on('click', '#pl', function() {
        $('#skills').html('Umiejętności');
        $('#lang').html('<a id="en" class="last">EN</a>/<span class="white last">PL</span>');
        $('#themes').html('Style');
        document.getElementById('stylesheet').href = 'pl/css/style.css';
        polish = true;
        //to get Polish right after click on "PL"
        if($('article').hasClass('portfolioActive')){
            $.get( 'pl/html/portfolio.html', function( data ) {
                $('article').html(data);
            });
        }
        if($('article').hasClass('skillsActive')){
            $.get( 'pl/html/skills.html', function( data ) {
                $('article').html(data);
            });
        }
        if($('article').hasClass('cvActive')){
            $.get( 'pl/html/cv.html', function( data ) {
                $('article').html(data);
            });
        }
    });
    $('body').on('click', '#en', function() {
        $('#skills').html('Skills');
        $('#lang').html('<span class="white last">EN</span>/<a id="pl" class="last">PL</a>');
        $('#themes').html('Themes');
        document.getElementById('stylesheet').href = 'css/style.css';
        polish = false;
        //to get English right after click on "EN"
        if($('article').hasClass('portfolioActive')){
            $.get( 'html/portfolio.html', function( data ) {
                $('article').html(data);
            });
        }
        if($('article').hasClass('skillsActive')){
            $.get( 'html/skills.html', function( data ) {
                $('article').html(data);
            });
        }
        if($('article').hasClass('cvActive')){
            $.get( 'html/cv.html', function( data ) {
                $('article').html(data);
            });
        }
    });
    $('#themes').tooltip();
    //change themes
});
