﻿(function($) {

	"use strict"; // Start of use strict
	
	/* Logo Lettering */
	var logo_rotate = $("header .gla_logo_animation").attr('data-rotate');
	if (logo_rotate!='') {
		$("header .gla_logo_animation").addClass('gla_logo_rotate_'+logo_rotate);
	}

	var main_menu_icon = $(".gla_main_menu_icon b");
	main_menu_icon.lettering();
	main_menu_icon.each(function(){
	 	var i = 2;	
	 	$(this).find('span').each(function(){
			$(this).css('transition-delay','0.'+i+'s');
			i++;
		})
	 });
	
	$("header .gla_logo_animation").lettering();
	$("header .gla_logo_animation span").each(function(){
	 	var min = 0;
	 	var max = 50;
	 	var randomNumber = Math.floor(Math.random()*(max-min+1)+min);
	 	$(this).css('transition-delay', '0.'+randomNumber+'s');
	 });

	/*CountTo*/
	$('.gla_timer').appear(function() {
        var e = $(this);
        e.countTo({
            from: 0,
            to: e.html(),
            speed: 1300,
            refreshInterval: 60
        })
    })
  $('.date_picker').datepicker();

    /*Gallery Lightbox*/
	$('.lightbox').magnificPopup({ 
	  type: 'image',
	  gallery:{
	    enabled:true
	  }
	});
	$('.video').magnificPopup({
	  type: 'iframe',
	  iframe: {
		  markup: '<div class="mfp-iframe-scaler">'+
		            '<div class="mfp-close"></div>'+
		            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
		          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

		  patterns: {
		    youtube: {
		      index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

		      id: 'v=', // String that splits URL in a two parts, second part should be %id%
		      // Or null - full URL will be returned
		      // Or a function that should return %id%, for example:
		      // id: function(url) { return 'parsed id'; } 

		      src: 'http://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe. 
		    },

		  },

		  srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
		}  
	  
	});
	
	/*OWL Intro Slider*/

	if ($('.gla_slider_carousel .gla_slider').length>1) {
		
		if($('#video_background').length==1) {
			$(".gla_slider_carousel").owlCarousel({
		 		navigation : true, 
		 		pagination: false,
		 		responsive: true, 
		 		responsiveRefreshRate : 200, 
		 		responsiveBaseElement:window, 
		 		slideSpeed : 200, 
		 		addClassActive:true,
				paginationSpeed : 200, 
				rewindSpeed : 200,
				items:1,
				autoPlay : false, 
				touchDrag:true,
				singleItem:true,
				navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>'],
				transitionStyle:"fade",
				afterAction: function(current) {
		        current.find('video').get(0).play();
		    }
			});
		}else {
			$(".gla_slider_carousel").owlCarousel({
		 		navigation : true, 
		 		pagination: false,
		 		responsive: true, 
		 		responsiveRefreshRate : 200, 
		 		responsiveBaseElement:window, 
		 		slideSpeed : 200, 
		 		addClassActive:true,
				paginationSpeed : 200, 
				rewindSpeed : 200,
				items:1,
				autoPlay : false, 
				touchDrag:true,
				singleItem:true,
				navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>'],
				transitionStyle:"fade",
			});
		}
	}



  /*OWL Team*/
	$(".gla_team").owlCarousel({
 		navigation : true, 
 		pagination:false,
 		responsive: true, 
 		responsiveRefreshRate : 200, 
 		responsiveBaseElement:window, 
 		slideSpeed : 200, 
 		addClassActive:true,
		paginationSpeed : 200, 
		rewindSpeed : 200,
		items:3,
		itemsTablet:[1000,2],
		itemsMobile : [569,1],
		itemsDesktop:3,
		autoPlay : false, 
		touchDrag:true, 
		navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
	});

	$(".gla_team_menu").owlCarousel({
 		navigation : true, 
 		pagination:false,
 		responsive: true, 
 		responsiveRefreshRate : 200, 
 		responsiveBaseElement:window, 
 		slideSpeed : 200, 
 		addClassActive:true,
		paginationSpeed : 200, 
		rewindSpeed : 200,
		items:2,
		itemsTablet:[1000,1],
		itemsMobile : [569,1],
		itemsDesktop:2,
		autoPlay : false, 
		touchDrag:true, 
		navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
	});

	/* OWL Team Single*/
	$(".gla_team_slider_single").owlCarousel({
 		navigation : true, 
 		responsive: true, 
 		responsiveRefreshRate : 200, 
 		responsiveBaseElement:window, 
 		slideSpeed : 200, 
 		addClassActive:true,
		paginationSpeed : 200, 
		rewindSpeed : 200,
		items:1,
		autoPlay : true, 
		singleItem:true,
		autoHeight : true,
		touchDrag:true, 
		navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
	});

	/* OWL Guests Single*/
	$(".gla_guests_slider_single").owlCarousel({
 		navigation : true,
 		pagination:false,
 		responsive: true, 
 		responsiveRefreshRate : 200, 
 		responsiveBaseElement:window, 
 		slideSpeed : 200, 
 		addClassActive:true,
		paginationSpeed : 200, 
		rewindSpeed : 200,
		items:1,
		autoPlay : true, 
		singleItem:true,
		autoHeight : true,
		touchDrag:true, 
		navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
	});

	/* OWL PARTNERS*/
	$(".gla_partners").owlCarousel({
 		navigation : true, 
 		responsive: true, 
 		responsiveRefreshRate : 200, 
 		responsiveBaseElement:window, 
 		slideSpeed : 200, 
 		addClassActive:true,
		paginationSpeed : 200, 
		rewindSpeed : 200,
		items:5,
		autoPlay : true, 
		autoHeight : true,
		touchDrag:true, 
		navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
	});

	/*OWL Carousel in Shop Item*/
	if ($('.gla_shop_item_slider img').length>1) {
		$(".gla_shop_item_slider").owlCarousel({
	 		navigation : false, 
	 		responsive: true, 
	 		responsiveRefreshRate : 200, 
	 		responsiveBaseElement:window, 
	 		slideSpeed : 200, 
	 		addClassActive:true,
			paginationSpeed : 200, 
			rewindSpeed : 200, 
			singleItem:true, 
			autoPlay : false, 	
			touchDrag:true, 
			navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
		});
	}

	


	/*Divider*/
	$('.gla_divider').each(function(){
		var height = $(this).attr('data-height');
		if (height){
			$(this).css('height', height);	
		}

	}); 
	
	/* Mobile Menu */
	$('.gla_main_menu').on("click", function(e){
		$(this).next('.gla_main_menu_content').toggleClass('active');
		$(this).next().next('.gla_main_menu_content_menu').toggleClass('active');
		$(this).toggleClass('active');
	});

	/* Section Background */
	$('.gla_image_bck').each(function(){
		var image = $(this).attr('data-image');
		var gradient = $(this).attr('data-gradient');
		var color = $(this).attr('data-color');
		var blend = $(this).attr('data-blend');
		var opacity = $(this).attr('data-opacity');
		var position = $(this).attr('data-position');
		var height = $(this).attr('data-height');
		if (image){
			$(this).css('background-image', 'url('+image+')');	
		}
		if (gradient){
			$(this).css('background-image', gradient);	
		}
		if (color){
			$(this).css('background-color', color);	
		}
		if (blend){
			$(this).css('background-blend-mode', blend);	
		}
		if (position){
			$(this).css('background-position', position);	
		}
		if (opacity){
			$(this).css('opacity', opacity);	
		}
		if (height){
			$(this).css('height', height);	
		}

	});



	/* Over */
	$('.gla_over, .gla_head_bck').each(function(){
		var color = $(this).attr('data-color');
		var image = $(this).attr('data-image');
		var opacity = $(this).attr('data-opacity');
		var blend = $(this).attr('data-blend');
		var gradient = $(this).attr('data-gradient');
		if (gradient){
			$(this).css('background-image', gradient);	
		}
		if (color){
			$(this).css('background-color', color);	
		}
		if (image){
			$(this).css('background-image', 'url('+image+')');	
		}
		if (opacity){
			$(this).css('opacity', opacity);	
		}
		if (blend){
			$(this).css('mix-blend-mode', blend);	
		}
	});
	$('.gla_slide_title, h2').each(function(){
		var color = $(this).attr('data-color');
		if (color){
			$(this).find('span').css('color', color);	
		}
	});
	$('.gla_icon_box').each(function(){
		var color = $(this).attr('data-color');
		if (color){
			$(this).find('i').css('color', color);	
		}
	});
	$('.skill-bar-content').each(function(){
		var color = $(this).attr('data-color');
		if (color){
			$(this).css('background-image', color);	
		}
	});
	$('img.gla_img_shadow').each(function(){
		var color = $(this).attr('data-shadow');
		if (color){
			$(this).css('filter', color);	
		}
	});
	$('.gla_page').each(function(){
		var border = $(this).attr('data-border');
		if (border){
			$('.gla_border_top, .gla_border_bottom, .gla_border_left, .gla_border_right, .gla_sml_abs_title').css('background', border);	
			$('.gla_bordered_block').css('border-left-color', border);
			$('.gla_border').css('border-bottom-color', border).css('border-top-color', border);
			$('.gla_team_simple .gla_bordered_block').css('border-top-color', border);	
		}
	});
	$('.gla_default_menu').each(function(){
		var color = $(this).attr('data-color');
		if (color){
			$(this).find('ul').css('background-color', color);	
		}
	});
	

	/* Mobile Menu */
	$('.gla_top_menu_mobile_link').on("click", function(e){
		$(this).next('.gla_top_menu_cont').fadeToggle();
		$(this).parents('.gla_light_nav').toggleClass('active');
	});

	

	$('.gla_calculate').each(function(){
		var now = moment(); //now
		var memoryday = moment('2021, 11, 13').add(-1, 'days'); //memory day
		var diffDuration = moment.duration(now.diff(memoryday)); // calculate difference
		// Get the difference in Years, Months, and Days
		var year = diffDuration.years();
		var month = diffDuration.months();
		var day = diffDuration.days();
		// Select the element to parse the value in
		var outputYear = document.getElementsByClassName('year')[0];
		var outputMonth = document.getElementsByClassName('month')[0];
		var outputDay = document.getElementsByClassName('day')[0];
		// Year, Month, Day text
		var y = document.getElementsByClassName('y')[0];
		var m = document.getElementsByClassName('m')[0];
		var d = document.getElementsByClassName('d')[0];
		// Parse value
		outputYear.innerHTML = '' + year;
		outputMonth.innerHTML = '' + month;
		outputDay.innerHTML = '' + day;

		// Condition (0, 1) -> parse singular*, else parse plural*
		if (year >= 0 && year < 2) { // Year
			y.innerHTML = '' + 'Year';
		} else {
			y.innerHTML = '' + 'Years';
		}

		if (month >= 0 && month < 2) { // Month
			m.innerHTML = '' + 'Month';
		} else {
			m.innerHTML = '' + 'Months';
		}

		if (day >= 0 && day < 2) { // Day
			d.innerHTML = '' + 'Day';
		} else {
			d.innerHTML = '' + 'Days';
		}
	});

	/*Scroll Effect*/
	$('.gla_go').on("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 300, 'linear');
		e.preventDefault();
	});

	// Get this year and parse to the footer automatically
	// This helps me a lot, no need to change year LOL
	function getThisYear() {
		var thisYear = moment().year();
		var span = document.getElementById('this-year');
		span.innerHTML = '' + thisYear;
	}

	getThisYear();

	/*Animation Block Delay*/
	
	$('div[data-animation=animation_blocks]').each(function(){
	var i = 0;	
		$(this).find('.gla_icon_box, .skill-bar-content, .gla_anim_box').each(function(){
			$(this).css('transition-delay','0.'+i+'s');
			i++;
		})
	})

	/*Increase-Decrease*/
    $('.increase-qty').on("click", function(e){
    	var qtya = $(this).parents('.add-to-cart').find('.qty').val();
    	var qtyb = qtya * 1 + 1;
    	$(this).parents('.add-to-cart').find('#qty').val(qtyb);
		e.preventDefault();
	});
	$('.decrease-qty').on("click", function(e){
    	var qtya = $(this).parents('.add-to-cart').find('#qty').val();
    	var qtyb = qtya * 1 - 1;
    	if (qtyb < 1) {
            qtyb = 1;
        }
    	$(this).parents('.add-to-cart').find('#qty').val(qtyb);
		e.preventDefault();
	});

	/* Shortcode Nav */
	var top_offset = $('header').height() - 1; 

	$('#nav-sidebar').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 700,
		scrollOffset: top_offset,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
	});
	
	

	/* Bootstrap */
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();

	/* Anchor Scroll */
	$(window).scroll(function(){
		if ($(window).scrollTop() > 100) {
			$(".gla_logo").addClass('active');
			$('body').addClass('gla_first_step');
			
		}
		else {
			$('body').removeClass('gla_first_step');
			$(".gla_logo").removeClass('active');
		}
		if ($(window).scrollTop() > 500) {
			$('body').addClass('gla_second_step');
		}
		else {
			$('body').removeClass('gla_second_step');
		}
	});

	/* Fixed for Parallax */
	$(".gla_fixed").css("background-attachment","fixed");


	/* Submenu */
 	$('.gla_parent').on({
		mouseenter:function(){
			$(this).find('ul').addClass('active');
		},mouseleave:function(){
			$(this).find('ul').removeClass('active');
		}
	});
	$('.gla_search_parent').on({
		mouseenter:function(){
			$(this).find('ul').addClass('active');
		},mouseleave:function(){
			$(this).find('ul').removeClass('active');
		}
	});

	/* Music */
	$('.gla_music_icon').on('click',function(){
		$('.gla_music_icon_cont').fadeToggle();	
	}); 

 	/* Mobile Menu */

	$('.gla_main_menu_content_menu .gla_parent').on("click", function(e){
		$(this).find('ul').slideToggle(300);
	});
	$('.gla_mobile_menu').on("click", function(e){
		$(this).toggleClass('active');
		$('.gla_mobile_menu_hor').toggleClass('active');
	});
	$('.gla_header_search span').on("click", function(e){
		$(this).next('.gla_header_search_cont').fadeToggle();
	});
	
	


	$(window).load(function(){

	// Page loader - sadly, jquery delay() didn't work with .css()
        
    $('body').imagesLoaded(function(){
        $(".gla_page_loader div").fadeOut();
    	$(".gla_page_loader").delay(200).fadeOut("slow");
		setTimeout(() => {
			$("body").css('overflow-y', 'scroll');
		}, '700');
    });


		

	 	/*Masonry*/
		var $grid = $('.grid').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  stagger: 0,
		  transitionDuration: '0',
		  isAnimated: true,
		  masonry: {
		    columnWidth: '.grid-item',
		    
		  }	  
		});
		$grid.imagesLoaded().progress( function() {
		  $grid.isotope('layout');
		});


		
		



		$('.masonry').masonry({
			itemSelector: '.masonry-item',
		});

		$('.filter-button-group').on( 'click', 'a', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});

		$(window).resize(function(){
		  $grid.isotope('layout');
		});

		

		

		/* Block Autheight */
		if( !device.tablet() && !device.mobile() ) {
			$('.gla_auto_height').each(function(){
				setEqualHeight($(this).find('> div[class^="col"]'));
			});
		}
		if( device.tablet() && device.landscape() ) {
			$('.gla_auto_height').each(function(){
				setEqualHeight($(this).find('> div[class^="col"]'));
			});
		}

		$(window).resize(function() {
			if( !device.tablet() && !device.mobile() ) {
				$('.gla_auto_height').each(function(){
					setEqualHeight($(this).find('> div[class^="col"]'));
				});
			}
			if( device.tablet() && device.landscape() ) {
				$('.gla_auto_height').each(function(){
					setEqualHeight($(this).find('> div[class^="col"]'));
				});
			}
			if( device.tablet() && device.portrait() ) {
				$('.gla_auto_height').each(function(){
					$(this).find('> div[class^="col"]').height('auto');
				});
			}
		});


		/*Boxes AutoHeight*/
		function setEqualHeight(columns)
		{
			var tallestcolumn = 0;
			columns.each(
				function()
				{
					$(this).css('height','auto');
					var currentHeight = $(this).height();
					if(currentHeight > tallestcolumn)
						{
						tallestcolumn = currentHeight;
						}
				}
			);
		columns.height(tallestcolumn);
		}	


		/*SkroolR*/
		if( !device.tablet() && !device.mobile() ) {
			var s = skrollr.init({
				forceHeight: false,
			});
		}


		if( !device.tablet() && !device.mobile() ) {
			$(window).stellar({
			 	horizontalScrolling: false,
				responsive: true,
				verticalOffset: 50
		 	});
		}

		
		
		
	});

	
	
})(jQuery);





