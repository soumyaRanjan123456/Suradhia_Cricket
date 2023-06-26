/*$(document).ready(function()
{
	$(window).scroll(function(){
		if(this.scrollY >20){

          $('.navbar').addClass("sticky");
		}
		else{
             $('.navbar').removeClass("sticky");
		}
	})
	//toggle menu/navbar script
	$('menu-btn').click(function()
	{
		$('.navbar .menu').toggleClass("active");

	});

})*/
$(document).ready(function() {
  $(window).scroll(function() {
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
    if(this.scroll > 500)
    {
    	$('.scroll-up-btn').addClass("show");
    }
    else
    {
    	$('.scroll-up-btn').removeClass("show");
    }
  });
  //slider-up script
  $('.scroll-up-btn').click(function(){

    $('html').animate({scrollTop: 0});
  });

  //toggle menu/navbar script
  $('.menu-btn').click(function() {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });
//Typing Animations
 var typed = new Typed(".typing",{
  	strings:["Abinash....!", "Narendra....!", "Susil....!", "Amresh.....!"],
  	typeSpeed: 100,
  	backSpeed: 50,
  	loop: true
  })
  //owl carousel script
  $('.carousel').owlCarousel({
  	margin:20,
  	loop: true,
  	autoplayTimeOut: 2000,
  	autoplayHoverpause: true,
  	responsive: {

  		0:{
  			items: 1,
  			nav: false
  		},
  		600:{
  			items: 2,
  			nav: false
  		},
  		1000:{
  			items: 3,
  			nav: false
  		}
  	}
  })
});
