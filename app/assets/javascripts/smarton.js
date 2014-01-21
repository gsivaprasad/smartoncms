$(function(){


	$(window).load(function () {
		//$('html, body').stop().animate({ scrollTop: 0}, 1000);
	});

	$(".menu-items").click(function(){
		var tabName = $(this).children('input').val();
		var scollIndex = 0;
		if(tabName == '0') 
			scollIndex= 0;

		// Programms
		if(tabName == '1') 
			scollIndex= 545;


		//how it works 
		if(tabName == '2') 
			scollIndex= 1050;
		

		// ABOUT US
		if(tabName == '3') 
			scollIndex= 1520;

		// CONTACT US
		if(tabName == '5') {
			scollIndex= 1420;
		}

		var windowSize = $(window).width();
		$('html, body').stop().animate({ scrollTop: scollIndex}, 1000);
		$('#main-navbar ul li').removeClass('active');
		$(this).addClass('active');
		$('#main-about').show();
		$('#hwItWrks').show();
		$('.why-smarton-block').hide();
		$('.hwitworks-sections').hide();
			

			if(windowSize <= 360) {
			$('.people-banner').hide();
			$('#mobile-banner').show();
			$('#main-about').hide();
			$('#contact-about').hide();
			$('#hwItWrks').hide();
			$('#hwitworks-section').hide();
			$('#hwitworksmobile').hide()
			scollIndex= 200;	
				//Home
				if(tabName == '0') {
					$('#mobile-banner').show();
					$('#programs-mob').hide();
					$('#about-mob').hide();
					$('#hwitworksmobile').hide();
				}

				// Programms
				if(tabName == '1')  {
					$('#programs').hide();
					$('html, body').stop().animate({ scrollTop: scollIndex}, 1000);
					$('#main-navbar').addClass('collapsed');
					$('#programs-mob').show();
					$('#footer').hide();
					$('#mobile-banner').hide();
					$('#hwitworksmobile').hide();
				}

				// How it works
				if(tabName == '2') {
					$('#hwitworksmobile').show();
					$('html, body').stop().animate({ scrollTop: scollIndex}, 1000);
					$('#main-navbar').addClass('collapsed');
					$('#about-mob').hide();
					$('#programs-mob').hide();
					$('#footer').hide();
					$('#mobile-banner').hide();
				}

				// ABOUT US
				if(tabName == '3') {
					$('html, body').stop().animate({ scrollTop: scollIndex}, 1000);
					$('#main-navbar').addClass('collapsed');
					$('#about-mob').show();
					$('#programs-mob').hide();
					$('#footer').hide();
					$('#mobile-banner').hide();
					$('#hwitworksmobile').hide();
				}

				
			} else {
				$('#programs').show();
				$('#footer').show();
				$('#mobile-banner').hide();
			}


			
		$('.program-sections').hide();
		
	});

	// about
	$("#main-about .span3").click(function(){ 
		$('#footer').hide();
		//$('#programs').hide();
		$('html, body').stop().animate({ scrollTop: 1450}, 1000);
		var index = $(this).children('input').val();
		$('#why-smartone-block').show();
		$('#hwItWrks').show();
		$('#main-about').hide();
		var to_slide = index-1;
		$('#myCarousel').carousel(to_slide);
		$('.carousel-indicators').children().removeClass('active');
		$('.carousel-indicators [data-slide-to=' + to_slide + ']').addClass('active');
		$('.carousel-bg').css('background-image','none');
	});

	$(".slide-bar ol li").click(function(){ 
		$('html, body').stop().animate({ scrollTop: 1450}, 1000);
		$('#myTab a:first').tab('show');
		$('#whyPartnerTab a:first').tab('show');
	});

	// programs 
	$("#programs .span4").click(function(){ 
		$('#footer').hide();
		$('html, body').stop().animate({ scrollTop: 425}, 1000);
		var index = $(this).children('input').val();
		$('#program-section').show();
		$('#hwItWrks').show();
		$('#programs').hide();
		var to_slide = index-1;
		$('#programsSec').carousel(to_slide);
		$('.programs-indicators').children().removeClass('active');
		$('.programs-indicators [data-slide-to=' + to_slide + ']').addClass('active');
		$('.carousel-bg').css('background-image','none');
	});

	$(".programs-slide-bar ol li").click(function(){ 
		$('html, body').stop().animate({ scrollTop: 425}, 1000);
		$('#myTab a:first').tab('show');
		//$('#whyPartnerTab a:first').tab('show');
	});

	// How it works 
	$("#hwItWrks .span4").click(function(){ 
		$('#footer').hide();
		$('html, body').stop().animate({ scrollTop: 950}, 1000);
		var index = $(this).children('input').val();
		$('#hwitworks-section').show();
		$('#hwItWrks').hide();
		var to_slide = index-1;
		$('#howitworksSec').carousel(to_slide);
		$('.programs-indicators').children().removeClass('active');
		$('.programs-indicators [data-slide-to=' + to_slide + ']').addClass('active');
		$('.carousel-bg').css('background-image','none');
	});

	$(".hwItWrks-slide-bar ol li").click(function(){ 
		$('html, body').stop().animate({ scrollTop: 950}, 1000);
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
		if(position >= 65) {
			$('#header-inner').addClass('header-transparent');
		} else {
			$('#header-inner').removeClass('header-transparent');
		}


		if(position <= 350 || position >= 850) {
			$('#program-nav').hide();
		} else {
			$('#program-nav').show();
		}
		

		if(position <= 850 || position >= 1500) {
			$('#hwitworks-nav').hide();
		} else {
			$('#hwitworks-nav').show();
		}

		

		 if(position <= 1400 || position >=1900)
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
	// Right Panel - pop out -- Suvarna
	$('#panelHandle').hover(function() {
			$('#sidePanel').stop(true, false).animate({
				'right': '0px'
			}, 900);
		}, function() {
		});

		$('#sidePanel').hover(function() {

		}, function() {

			$('#sidePanel').animate({
				right: '-290px'
			}, 800);

		});

        $(window).scroll(function() {
            $('#sidePanel').animate({
				right: '-290px'
			}, 800);
        });
      // END  



//refresh page on browser resize
$(window).bind('resize', function(e)
{
	if (window.RT) clearTimeout(window.RT);
	window.RT = setTimeout(function()
	{
		this.location.reload(false);
	}, 200);
});

//home page popup 
 $("#bannerPopup").hide();
setTimeout(function(){
   $("#bannerPopup").fadeIn(1000);
},1500);

$('#landingPopupClose').click(function() {
    $(this).parent().hide();
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


