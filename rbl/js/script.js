$(document).ready(function(){
// CAROUSEL ****************
var carouselList = $('#carousel ul');
var interval = null;
var imgWidth;
var widthAllimg;
var amountLi = $('#carousel ul li').length;
responsiveImg();

function responsiveImg(){
	imgWidth = $('.bcg3').outerWidth(true);
	widthAllimg = imgWidth * amountLi;
	$('#carousel ul').css('width', widthAllimg);
	$('#carousel ul li').css('width', imgWidth);
}

interval = setInterval(changeSlides, 6000);

$( window ).resize(function() {
	responsiveImg();
});

function changeSlides(){
	carouselList.animate({"marginLeft": -imgWidth}, 1500, moveFirstSlide);
	increaseArticle();
}
function moveFirstSlide(){
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	lastItem.after(firstItem);
	carouselList.css({marginLeft:0});
}
function moveLastSlide(){
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	firstItem.after(lastItem);
	carouselList.css({marginLeft:0});
}

carouselList.mouseover(function() {
	clearInterval(interval);
})
	.mouseout(function() {
	interval = setInterval(changeSlides, 6000);
	});

$('.left-arr').click(function(){
	var li = carouselList.find("li");
	carouselList.css("margin-left", -imgWidth);
	li.first().before(li.last());
	carouselList.animate({"marginLeft": 0}, 1500, function(){

	});
	clearInterval(interval);
	decreaseArticle();
})
$('.right-arr').click(function(){
	var li = carouselList.find("li");
	carouselList.animate({"marginLeft": -imgWidth}, 1500, function(){
	li.last().after(li.first());
	carouselList.css("margin-left", "0");
	});
	clearInterval(interval);
	increaseArticle();
})
var articleNumber = 1;
function increaseArticle() {
	articleNumber++;
	if (articleNumber > 4) {
		articleNumber = 1;
	}
	if (articleNumber === 1) {
		$('#navigation__fourth-article').removeClass('navigation__article--active');
		$('#navigation__fourth-article').addClass('navigation__article--inactive');
		$('#navigation__first-article').removeClass('navigation__article--inactive');
		$('#navigation__first-article').addClass('navigation__article--active');
	}
	if (articleNumber === 2) {
		$('#navigation__first-article').removeClass('navigation__article--active');
		$('#navigation__first-article').addClass('navigation__article--inactive');
		$('#navigation__second-article').removeClass('navigation__article--inactive');
		$('#navigation__second-article').addClass('navigation__article--active');
	}
	if (articleNumber === 3) {
		$('#navigation__second-article').removeClass('navigation__article--active');
		$('#navigation__second-article').addClass('navigation__article--inactive');
		$('#navigation__third-article').removeClass('navigation__article--inactive');
		$('#navigation__third-article').addClass('navigation__article--active');
	}
	if (articleNumber === 4) {
		$('#navigation__third-article').removeClass('navigation__article--active');
		$('#navigation__third-article').addClass('navigation__article--inactive');
		$('#navigation__fourth-article').removeClass('navigation__article--inactive');
		$('#navigation__fourth-article').addClass('navigation__article--active');
	}
	changeCarouselDescription();
}
function decreaseArticle() {
	articleNumber--;
	if (articleNumber < 1) {
		articleNumber = 4;
	}
	if (articleNumber === 1) {
		$('#navigation__second-article').removeClass('navigation__article--active');
		$('#navigation__second-article').addClass('navigation__article--inactive');
		$('#navigation__first-article').removeClass('navigation__article--inactive');
		$('#navigation__first-article').addClass('navigation__article--active');
	}
	if (articleNumber === 2) {
		$('#navigation__third-article').removeClass('navigation__article--active');
		$('#navigation__third-article').addClass('navigation__article--inactive');
		$('#navigation__second-article').removeClass('navigation__article--inactive');
		$('#navigation__second-article').addClass('navigation__article--active');
	}
	if (articleNumber === 3) {
		$('#navigation__fourth-article').removeClass('navigation__article--active');
		$('#navigation__fourth-article').addClass('navigation__article--inactive');
		$('#navigation__third-article').removeClass('navigation__article--inactive');
		$('#navigation__third-article').addClass('navigation__article--active');
	}
	if (articleNumber === 4) {
		$('#navigation__first-article').removeClass('navigation__article--active');
		$('#navigation__first-article').addClass('navigation__article--inactive');
		$('#navigation__fourth-article').removeClass('navigation__article--inactive');
		$('#navigation__fourth-article').addClass('navigation__article--active');
	}
	changeCarouselDescription();
}
function changeCarouselDescription() {
	if (articleNumber === 1) {
		$('.carousel-description h1, .carousel-description p').fadeTo('slow', 0, function() {
			$('.carousel-description h1').html('Kontrowersyjna żółta kartka');
			$('.carousel-description p').html('Sędzia Tobias Stieler w starciu RB Lipsk z TSG Hoffenheim pokazał naszemu kapitanowi Williemu Orbanowi kartkę w kolorze #D9FE59.<a href="#">Czytaj więcej ...</a>');
			$('.carousel-description h1, .carousel-description p').fadeTo('slow', 1);
		});
	}
	if (articleNumber === 2) {
		$('.carousel-description h1, .carousel-description p').fadeTo('slow', 0, function() {
	    $('.carousel-description h1').html('Maskotka drużyny odchodzi');
	    $('.carousel-description p').html('Jak nieoficjalnie dowiedział się nasz portal, Thobias Müller znalazł zatrudnienie jako programista COBOL.<a href="#">Czytaj więcej ...</a>');
	    $('.carousel-description h1, .carousel-description p').fadeTo('slow', 1);
		});
	}
	if (articleNumber === 3) {
		$('.carousel-description h1, .carousel-description p').fadeTo('slow', 0, function() {
			$('.carousel-description h1').html('Lewandowski zwiększa obroty');
			$('.carousel-description p').html('Według badań Instytutu Badań nad Internetem informacje o Robercie cieszą się największą popularnością.<a href="#">Czytaj więcej ...</a>');
			$('.carousel-description h1, .carousel-description p').fadeTo('slow', 1);
		});
	}
	if (articleNumber === 4) {
		$('.carousel-description h1, .carousel-description p').fadeTo('slow', 0, function() {
			$('.carousel-description h1').html('Stadion gotowy na Ligę Mistrzów');
			$('.carousel-description p').html('Co prawda stadion odmówił komentarza, ale widać po nim dużą pewność siebie przed kontrolą UEFA.<a href="#">Czytaj więcej ...</a>');
			$('.carousel-description h1, .carousel-description p').fadeTo('slow', 1);
		});
	}
}
// *************************
});
