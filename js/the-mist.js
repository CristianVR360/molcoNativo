// JavaScript Document
// The Mist v1.2 || ex nihilo || July 2013
  
  
// YTPlayer
    $(function(){
      $(".player").mb_YTPlayer();
    });


// curtains
	$(document).ready(function(){

	$("#curtains").delay(4000).slideToggle(3000);
		
	});


// function for the vertical scrolling effect
$(function() {
    $('.go-under, .go-way-under, .go-way-up').bind('click',function(event){
        var $anchor = $(this);
 
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeInOutExpo');
        /*
        if you don't want to use the easing effects:
        $('html, body').stop().animate({
           scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
        */
        event.preventDefault();
    });
});


// twitter ticker
      jQuery(function($){
        $("#ticker").tweet({
          username: "enihilo",
          page: 1,
          avatar_size: 0,
          count: 20,
          loading_text: "loading"
        }).bind("loaded", function() {
          var ul = $(this).find(".tweet_list");
          var ticker = function() {
            setTimeout(function() {
              ul.find('li:first').animate( {marginTop: '-70px'}, 500, function() {
                $(this).detach().appendTo(ul).removeAttr('style');
              });
              ticker();
            }, 8000);
          };
          ticker();
        });
      });
	  
	  
// twitter ticker settings
$(document).ready(function(){
        $(this).find(".tweet_list").list_ticker({
                speed: 8000,
                effect: 'fade' // fade, slide
        })             
})


// mobile-detect
	var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };


// animation
$(document).ready(function() {
    
    // part 1
    function Bird1(){
	 $("#bird1").css("opacity","1");
	 $("#bird1").css("bottom","120px");
	 $("#bird1").css("left","-100px");
	 $("#bird1").animate({"opacity": 0,"bottom": 260,"left": 2660}, 20000);
	 }
    
    function Bird2(){
	 $("#bird2").css("opacity","1");
	 $("#bird2").css("bottom","135px");
	 $("#bird2").css("left","-300px");
	 $("#bird2").animate({"opacity": 0,"bottom": 210,"left": 2660}, 15000);
	 }
    
    function Bird3(){
	 $("#bird3").css("opacity","1");
	 $("#bird3").css("bottom","110px");
	 $("#bird3").css("left","-200px");
	 $("#bird3").animate({"opacity": 0,"bottom": 280,"left": 2560}, 13000);
	 }
	 
    function Bird4(){
	 $("#bird4").css("opacity","1");
	 $("#bird4").css("bottom","100px");
	 $("#bird4").css("left","-200px");
	 $("#bird4").animate({"opacity": 0,"bottom": 270,"left": 2560}, 9000);
	 }
    
	Bird1();
	Bird2();
	Bird3();
	Bird4();
    
    function timerMethod1(){
	Bird1();
	Bird2();
	Bird3();
	Bird4(); }
    setInterval(timerMethod1, 20500);
    
    // part 2
    function Bird5(){
	 $("#bird5").css("opacity","1");
	 $("#bird5").css("bottom","120px");
	 $("#bird5").css("left","-2760px");
	 $("#bird5").animate({"opacity": 0,"bottom": 240,"left": 2660}, 40000);
	 }
    
    function Bird6(){
	 $("#bird6").css("opacity","1");
	 $("#bird6").css("bottom","135px");
	 $("#bird6").css("left","-2960px");
	 $("#bird6").animate({"opacity": 0,"bottom": 270,"left": 2660}, 30000);
	 }
    
    function Bird7(){
	 $("#bird7").css("opacity","1");
	 $("#bird7").css("bottom","110px");
	 $("#bird7").css("left","-2760px");
	 $("#bird7").animate({"opacity": 0,"bottom": 200,"left": 2560}, 26000);
	 }
	 
    function Bird8(){
	 $("#bird8").css("opacity","1");
	 $("#bird8").css("bottom","100px");
	 $("#bird8").css("left","-2760px");
	 $("#bird8").animate({"opacity": 0,"bottom": 190,"left": 2560}, 22000);
	 }
    
	Bird5();
	Bird6();
	Bird7();
	Bird8();
    
    function timerMethod2(){
	Bird5();
	Bird6();
	Bird7();
	Bird8(); }
    setInterval(timerMethod2, 41000);
    
});


// site loader
            $(window).load(function() {
                $('body').css('overflow', 'auto');
                $('.loader').fadeOut('slow');
            });