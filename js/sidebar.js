window.onload = function() {
  $('#sideMenu').animate({
    left: "-40%"
  }, 380);

  $('.jumbotron').animate({
    left: "0px"
  }, 380);

  $("div#open-menu").click(function() {
    $(this).find('img').toggle().removeClass('sideMenuImgAnimation').addClass('animated flipInY');
  });

  $("img#open-menu-img").click(function() {
    $('#sideMenu').animate({
      left: "0px"
    }, 380);

    $('.jumbotron').animate({
      left: "40%"
    }, 380);
  });

  $('img#open-menu-img-hov').click(function() {

    $('#sideMenu').animate({
      left: "-40%"
    }, 380);

    $('.jumbotron').animate({
      left: "0px"
    }, 380);
  });
};
