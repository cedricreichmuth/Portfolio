//smooth scrolling
$(document).ready(function(){
  var scrollink = $('.scroll');
  scrollink.click(function(event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
  $('window').scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    scrollink.each(function(){
      var sectionOffset = $(this.hash).offset().top;
      if(sectionOffset <= scrollbarlink){
        $(this).parent().addClass('active');
        $(this).parent().sibling().removeClass('active');
      }
    })
  })
});

//menu-toggle
$('.hamburger').on('click', function(){
  if($('.hamburger').hasClass('clicked')){
    $('.header-nav').animate({'height': 0});
    $('.hamburger').removeClass('clicked');
  } else{
    $('.header-nav').animate({'height': 150});
    $('.hamburger').addClass('clicked');
  }
});
//header position

$(window).scroll(function(){
  var vh = $(window).height();
  var baractivate = $(window).height() * 2 - 200;
  var barreset = $(window).height() * 3 - 200;
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
