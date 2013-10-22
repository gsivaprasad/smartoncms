$(function(){
	$(window).load(function () {
		$('html, body').stop().animate({ scrollTop: 0}, 1000);
	});

	$(".menu-items").click(function(){
		var tabName = $(this).children('input').val();
		var scollIndex = 0;
		if(tabName == '0') 
			scollIndex= 0;

		// Programms
		if(tabName == '2') 
			scollIndex= 615;

		if(tabName == '3') // ABOUT US
			scollIndex= 1495;

		// CONTACT US
		if(tabName == '5') {
			scollIndex= 2025;
		} 

		$('html, body').stop().animate({ scrollTop: scollIndex}, 1000);
		$('#main-navbar ul li').removeClass('active');
		$(this).addClass('active');
		$('#main-about').show();
		$('.why-smarton-block').hide();
		$('#programs').show();
		$('.program-sections').hide();
		$('#footer').show();
	});

	$("#main-about ul li").click(function(){ 
		$('#footer').hide();
		//$('#programs').hide();
		$('html, body').stop().animate({ scrollTop: 1245}, 1000);
		var index = $(this).children('input').val();
		$('#why-smartone-block').show();
		$('#main-about').hide();
		var to_slide = index-1;
		$('#myCarousel').carousel(to_slide);
		$('.carousel-indicators').children().removeClass('active');
		$('.carousel-indicators [data-slide-to=' + to_slide + ']').addClass('active');
		$('.carousel-bg').css('background-image','none');
	});

	$(".slide-bar ol li").click(function(){ 
		$('html, body').stop().animate({ scrollTop: 1245}, 1000);
		$('#myTab a:first').tab('show');
		$('#whyPartnerTab a:first').tab('show');
	});

	// programs 
	$("#programs ul li").click(function(){ 
		$('#footer').hide();
		$('html, body').stop().animate({ scrollTop: 450}, 1000);
		var index = $(this).children('input').val();
		$('#program-section').show();
		$('#programs').hide();
		var to_slide = index-1;
		$('#programsSec').carousel(to_slide);
		$('.programs-indicators').children().removeClass('active');
		$('.programs-indicators [data-slide-to=' + to_slide + ']').addClass('active');
		$('.carousel-bg').css('background-image','none');
	});

	$(".programs-slide-bar ol li").click(function(){ 
		$('html, body').stop().animate({ scrollTop: 450}, 1000);
		$('#myTab a:first').tab('show');
		//$('#whyPartnerTab a:first').tab('show');
	});


	$('.carousel').carousel({
		interval: false
	}).bind('slid', function() {
		var index = $(this).find(".active").index();
		//if(index == 4){
			$('.carousel-bg').css('background-image','none');
		//}
	});

	//adding transparent bg 

	$(window).scroll(function () { 
		var position = $(window).scrollTop();
		//alert(position);
		if(position >= 300) {
			$('#header').addClass('header-transparent');
		} else {
			$('#header').removeClass('header-transparent');
		}

	
		if(position <= 350 || position >= 1050) {
			$('#program-nav').hide();
		} else {
			$('#program-nav').show();
		}
		

		if(position <= 1000 || position >=1700)
			$('#about-nav').hide();
		else
			$('#about-nav').show();

	

	});

	//upcoming program click item 
	$('#upcoming-prog1').click(function(){

		$(this).addClass('upcoming-program-bubble-slctd');
		$('.recent-program-arrow').css('display' , 'block');
		$('.upcoming-click-item').show();

	});

});

/* Inner section tabs, Navigate on left and right arrow */
var myTabsActive, tabNext, tabPrev;
$(function() {
	myTabsActive = 0; //or yours active tab

	tabNext = function(tabname) {
		var myTabs = $('#'+tabname+' li').length;
		var index = myTabsActive + 1;
		index = index >= myTabs ? 0 : index;
		$('#'+tabname+' li:eq(' + index + ') a').tab('show');
		myTabsActive = index;
	}

	tabPrev = function(tabname) {
		var myTabs = $('#'+tabname+' li').length;
		var index = myTabsActive - 1;
		index = index < 0 ? myTabs - 1 : index;
		$('#'+tabname+' li:eq(' + index + ') a').tab('show');
		myTabsActive = index;
	}
})

