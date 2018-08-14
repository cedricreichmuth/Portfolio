//smooth scrolling
$(document).ready(function(){
  var scrollink = $('.scroll');
  scrollink.click(function(event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    scrollink.each(function(){
      var sectionOffset = $(this.hash).offset().top;
      if(sectionOffset <= scrollink){
        $(this).parent().addClass('active');
        $(this).parent().sibling().removeClass('active');
      }
    })
  })
});

//menu-toggle
$('.hamburger').on('click', function(){
  $('.branding').toggleClass('mobile');
  $('.mobile').animate({height: 'toggle'});
});
//header position & bar chart activation

$(window).scroll(function(){
  var vh = $(window).height();
  var vw = $(window).width();
  var barActivate = vh * 2 ;
  var barReset = vh * 3 + 50;
  var mobileBarActivate = vh * 3 + 200;
  var mobileBarReset = vh * 5;
  if (document.documentElement.scrollTop > vh) {
    $('header').css({'position': 'fixed'});
} else{
    $('header').css({'position': 'absolute'});
}
  if (vw > 620 && document.documentElement.scrollTop > barActivate && document.documentElement.scrollTop < barReset) {
    $('.bar-container').children().removeClass('inactive');
    $('.bar-container').children().addClass('active');
}else if(vw < 620 && document.documentElement.scrollTop > mobileBarActivate && document.documentElement.scrollTop < mobileBarReset){
    $('.bar-container').children().removeClass('inactive');
    $('.bar-container').children().addClass('active');
}else{
    $('.bar-container').children().removeClass('active');
    $('.bar-container').children().addClass('inactive');
}
});

//setting height of project image to keep ratio with viewport width

var screenshotWidth = $('.project').width();
var screenshotHeight = screenshotWidth / 1.7518;
$('.project').css({'height': screenshotHeight});
