$(document).ready(function(){
	var titles = $(".cycle-slide");
	var logo = $("header h1");

	$('nav').localScroll();

	var s = skrollr.init({
            edgeStrategy: 'set',
            easing: {
              WTF: Math.random,
              inverted: function(p) {
                return 1-p;
              }
            }
          });

	$('#hacemos').waypoint(function() {
		if(logo.hasClass('invisible')){
			$(logo).removeClass('invisible').addClass("fadeIn");
		} else {
			$(logo).addClass('invisible');
		}
		
	});

	if(titles.hasClass("cycle-slide-active")){
		$(titles).each(function(index){
			if(index===0){
				$(this).addClass("bounceInDown");
				}
			if(index===1){
				$(this).addClass("bounceInRight");
				}
			if(index===2){
				$(this).addClass("bounceInUp");
				}
			if(index===3){
				$(this).addClass("bounceInRight");
				}
			if(index===4){
				$(this).addClass("bounceIn");
				}
			if(index===5){
				$(this).addClass("bounceIn");
				}
		});
	}


	$('#navigation').localScroll();

function init() {
		var speed = 250
			easing = mina.easeinout;

		[].slice.call ( document.querySelectorAll( '#grid > a' ) ).forEach( function( el ) {
			var s = Snap( el.querySelector( 'svg' ) ), 
			path = s.select( 'path' ),
				pathConfig = {
					from : path.attr( 'd' ),
					to : el.getAttribute( 'data-path-hover' )
				};

			el.addEventListener( 'mouseenter', function() {
				path.animate( { 'path' : pathConfig.to }, speed, easing );
			} );

			el.addEventListener( 'mouseleave', function() {
				path.animate( { 'path' : pathConfig.from }, speed, easing );
			} );
		} );
	}

	init();

	
});