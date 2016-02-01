var sideMenu = function() {
  $('div#open-menu').click(function() {
    $('div#close-menu').show();

    $('#sideMenu').animate({
      left: "0px"
    }, 380);

    $('.jumbotron').animate({
      left: "40%"
    }, 380);
  });

  $('span#close-menu-icon').click(function() {
    $('div#close-menu').hide();

    $('#sideMenu').animate({
      left: "-40%"
    }, 380);

    $('.jumbotron').animate({
      left: "0px"
    }, 380);
  });
};


$(document).ready(sideMenu);
