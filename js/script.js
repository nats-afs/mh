$(document).ready(function () {
  
  
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  
  
  $('.news-nav-left').on('click', function(){
    $('.carousel').carousel('prev');
  })
  
  $('.news-nav-right').on('click', function(){
    $('.carousel').carousel('next');
  })
  
  $(".button-collapse").sideNav();
  $('.parallax').parallax();
  
  $('.navbar-main .dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: true, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false // Stops event propagation
      }
    );
  });


