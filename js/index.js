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
  if($('.hamburger').hasClass('clicked')){
      $('.hamburger').removeClass('clicked');
      $('.header-nav').animate({'height': 0}, '400', 'swing', function() {
      $('header').removeClass('fullscreen');
      $('.header-nav').removeClass('mobile');
    });

  } else{
    $('.header-nav').animate({'height': '80%'});
    $('.hamburger').addClass('clicked');
    $('header').addClass('fullscreen');
    $('.header-nav').addClass('mobile');
  }
});
$(window).scroll(function(){
  if($('.hamburger').hasClass('clicked')){
      $('.hamburger').removeClass('clicked');
      $('.header-nav').animate({'height': 0}, '400', 'swing', function() {
      $('header').removeClass('fullscreen');
      $('.header-nav').removeClass('mobile');
    });
  }
});
//header position & bar chart activation

$(window).scroll(function(){
  var vh = $(window).height();
  var baractivate = vh * 2 - 200 ;
  var barreset = vh * 4 - 200;
  if (document.documentElement.scrollTop > vh) {
    $('header').css({'position': 'fixed'});
} else{
    $('header').css({'position': 'absolute'});
}
  if (document.documentElement.scrollTop > baractivate && document.documentElement.scrollTop < barreset) {
    $('.bar-container').children().removeClass('inactive');
    $('.bar-container').children().addClass('active');
} else{
  $('.bar-container').children().removeClass('active');
  $('.bar-container').children().addClass('inactive');
}
});

//setting height of project image to keep ratio with viewport width

var screenshotWidth = $('.project').width();
var screenshotHeight = screenshotWidth / 1.7518;
$('.project').css({'height': screenshotHeight});
