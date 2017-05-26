$(document).ready(function(){
	if( $('iframe').length != 0 ){
		var $src=$('iframe').attr('src')+'?showinfo=0&rel=0';
		//console.log($src);
		$("iframe").attr("src",$src);
	}
	
	if( $('.slick-center').length != 0 ){
		//slick-top-container
		jQuery('.video-slider').slick({
			infinite: true,
			prevArrow: $('.prev'),
			nextArrow: $('.next'),
		});

		// On before slide change
		jQuery('.video-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			console.log(nextSlide);
			var $current = jQuery('.slick-current');
			$current.find('.video-slider-wrapper-player').hide().empty();
			$current.find('.video-slider-wrapper-cover').fadeIn();
			jQuery('.video-slider').find('.btn-play-video').show();
			jQuery('.slick-top-container').find('.neulandIs').show();
			jQuery('.video-slider').slick('slickPlay');
		});

		jQuery('.btn-play-video').on('click', function (e) {
			console.log("BTN PLAY VIDEO STARTED");
			var $id = jQuery(this).attr('data-id');
			var $video = jQuery(this).attr('data-video').replace('https://youtu.be/', '');
			console.log("VIDEO ID: " + $id);
			console.log("VIDEO ACTIVE: " + $video);

			//get video height
			var $wvideo = jQuery(window).width();
			var $hvideo = 0.666*$wvideo;
			// var $wheight = jQuery(window).height();
			// console.log("WINDOW HEIGHT: " + $wheight);
			// if (jQuery(window).width() <= 640) {
			// 	$wvideo = "100%";
			// 	$hvideo = 180;
			// }

			jQuery('.video-slider').find('.btn-play-video').hide();
			jQuery('.slick-top-container').find('.neulandIs').hide();
			jQuery('#' + $id).find('.video-slider-wrapper-cover').hide();
			jQuery('#' + $id).find('.video-slider-wrapper-player').empty()
				.html('<iframe clas="asdfg" width="' + $wvideo + '" height="' + $hvideo +
					'" src="https://www.youtube.com/embed/' + $video +
					'?autoplay=1&showinfo=0&rel=0" frameborder="0" allowfullscreen></iframe>')
				.fadeIn();
			console.log(jQuery('.asdfg').attr('src'));	
			jQuery('.video-slider').slick('slickPause');
		});
	}

	// window.onload = function(){
	//  	$('.neu-video-wrapper').addClass('loaded');
	//  	setTimeout( function(){
	//  		$('.neu-video-wrapper').removeClass('loaded');
	//  	}, 1000);
	// }

	//slider-top
	if( $( '.slick-top').length != 0 ){
		$('.slick-top').slick({
		   	prevArrow: $('.prev'),
	  		nextArrow: $('.next'),
		});	
		$(".slick-top").on('afterChange', function(event, slick, currentSlide){
			$( "#play-button" ).show();
			var i=parseInt($('.slick-slide.slick-current.slick-active').attr('data-slick-index'));
			iPlay=i;
			prevVid=i-1;
			nextVid=i+1;
			if(prevVid<0){prevVid=sumVideo}
			if(nextVid>sumVideo){nextVid=0;}
			if(player[prevVid].getPlayerState()==1){ player[prevVid].pauseVideo();}
			if(player[nextVid].getPlayerState()==1){ player[nextVid].pauseVideo();}
			// console.log("currentindex",$('.slick-slide.slick-current.slick-active').attr('data-slick-index'));
			// console.log("status",player[i].getPlayerState());
			// console.log("next",nextVid);
			// console.log("prev",prevVid);
		});
	}
	
	var iPlay=0;
	$( "#play-button" ).click(function() {
		player[iPlay].playVideo();
		$( "#play-button" ).hide();
	});

	//tab
	$('.collapse')
		.on('shown.bs.collapse', function(){
			$(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");})
		.on('shown.bs.collapse', function(){
			$(this).parent().find(".panel-heading").addClass("active");})
		.on('hidden.bs.collapse', function(){
			$(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");})
		.on('hidden.bs.collapse', function(){
			$(this).parent().find(".panel-heading").removeClass("active");});

	if( $('.challenge-switch-wrap').length != 0 ){

		function neuSwitchChallenge(){
			$('.challenge-item').css( 'height',   $('.challenge-item.center').width() + 'px' );
			var centerWrap, centerCircle, leftWrap, leftCircle, rightWrap, rightCircle;
			centerWrap = $( '.challenge-item.center' );
			leftWrap = $('.challenge-item.left');
			rightWrap = $('.challenge-item.right');

			$('body').on('click', '.circle-item-in-mid', function(){
				var dataPost = $(this).parent().parent().parent().data('position');
				console.log( dataPost );
				centerCircle = $('.challenge-item.center .circle-item');
				
				if( 'left' == dataPost ){
					leftCircle = $(this).parent().parent();
					console.log( leftCircle.offset() );
					$(this).parent().parent().parent().hide().fadeIn().html(centerCircle);
					$('.challenge-item.center').hide().fadeIn().html(leftCircle);
				}
				if( 'right' == dataPost ){
					rightCircle = $(this).parent().parent();
					console.log( rightCircle.offset() );
					$(this).parent().parent().parent().hide().fadeIn().html(centerCircle);
					$('.challenge-item.center').hide().fadeIn().html(rightCircle);
				}
			})

		}

		neuSwitchChallenge();

		$(window).on('resize', function(){
			$('.challenge-item').css( 'height',   $('.challenge-item.center').width() + 'px' );
		})

	}

	if( $('.description_textarea').length != 0 ){
		/*
		* display count character type in textarea description
		*/
		function CharTextarea(){
			var maxChar = 350;
			var textAreaDesc = $('.description_textarea');
			var lengthLeft = $('.length-left');

			lengthLeft.html( textAreaDesc.val().length );
			
			textAreaDesc.on('keyup', function(){
				if( $(this).val().length > maxChar ){
					return false;
				}
				lengthLeft.html( $(this).val().length );
			})
		}
		CharTextarea();
	}
	
	if( $('.content-cover-image').length != 0 ){
		$('.content-cover-image').change( function(){
	        readURLimg( this, $('.content-cover-image').index(this) );
	    })

		/*
	     * readURLimg
	     * read url of input file image
	     * for previewing image 
	     */
	    function readURLimg( input, eq ){
	        // console.log( eq );
	        if( input.files && input.files[0]){
	            var reader = new FileReader();

	            reader.onload = function(e){
	                $('.neu-upload-cover-image img.img-cover-preview').eq(eq).attr('src', e.target.result );
	                
	                // $('.cm-upload-del').eq(eq).show();
	                // $('.cm-uploader label').eq(eq).hide();
	                // $('.cm-preview-wrapper').eq(eq).css('min-height', 100+'px');
	                // $('.cm-preview-wrapper').eq(eq).css('height', 100+'px');
	            }
	            reader.readAsDataURL( input.files[0] );
	        }
	    }
	}
	
	//slider
	//slider-center
	if( $('.slick-center').length != 0 ){
		$('.slick-center').slick({
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 1,
			dots: true,
			arrow: false
		})	
	}


	// video player in profile page
	if( $('.neu-media-player-video').length != 0 ){
		
		function neuVideoPlayer(){
			var video = $('.neu-media-player-video'),
				playButton = $('.play-video-button'),
				progressContainer = $('.neu-media-player-control-progress'),
				progressBox 	= $('.video-progress-box'),
				progressPlay 	= $('.video-progress-play');
			console.log( video[0].duration );
			// video.removeAttr('controls');
			playButton.on('click', function(){
				// playButton.hide();
				if( video[0].paused ){
					video[0].play();
					playButton.fadeOut();
				}
				return false;
			});
			video.on('click', function(){
				if( video[0].play ){
					playButton.fadeIn();
					video[0].pause();
				}else{
					playButton.fadeOut();
					video[0].play();
				}
				return false;
			})

			video.on('loadedmetadata', function(){
				console.log( "loadedmetadata" );
				console.log( video[0].duration );
				$('.duration-time').text( formatSeconds( video[0].duration ) );
			})

			video.on( 'timeupdate', function(){
				$('.duration-time').text( formatSeconds( video[0].duration ) );
				var currentPos = video[0].currentTime;
				var maxDuration = video[0].duration;
				var percentage = 100 * currentPos / maxDuration;
				progressPlay.css('width', percentage + '%' );

				$('.current-time').text( formatSeconds( video[0].currentTime ) );

				if( video[0].currentTime === video[0].duration ){
					playButton.show();
				}

			})
		}
		neuVideoPlayer();
		

		function formatSeconds(seconds){
			  var date = new Date(1970,0,1);
			  date.setSeconds(seconds);
			  return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
		}
	}

});