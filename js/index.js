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
    $('.header-nav').hide();
    $('.hamburger').removeClass('clicked');
  } else{
    $('.header-nav').show();
    $('.hamburger').addClass('clicked');
  }
})
