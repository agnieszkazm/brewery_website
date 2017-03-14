$(document).ready(function(){
  $('.slogan').fadeIn(1200);

    //scrolling
  var menuElem = $(".list-nav").find("a");
      menuElem.on("click", function(e) {
        var element = $(this).attr("href");
        var elementOffset = $(element).offset();
      $("body", "html").animate({scrollTop: elementOffset.top}, 1500);

});

        // offer-bear animation:  
   $(".offer-bear-animation").on("mouseenter", function(){    
      //$(this).find("p").animate({opacity:1},1500);
        $(".offer-animate-1").delay(800).animate({opacity:1},1500)
        $(".offer-animate-2").delay(1600).animate({opacity:1},1500)
        $(".offer-animate-3").delay(3000).animate({opacity:1},1500)
  });
//counter

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000, 
        step: function (now) {
            $(this).text(Math.ceil(now));
    }
      });
    });



//cookies
  var lastP = $('footer').find('p:last');
    $('button').click(function(){
      $(lastP).slideToggle();
    });

});