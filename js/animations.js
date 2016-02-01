window.onload = function() {
  $("div#open-menu").hover(function imgAnimate() {
    $(this).find('img').toggle().removeClass('sideMenuImgAnimation').addClass('animated flipInY');
  });
  $("div#close-menu").show();
/*  $("h1#title").hover(function txtAnimate() {
    $(this).addClass('animated headShake');
  });
  $("small#subtitle").hover(function txtxsmallAnimate() {
    $(this).addClass('animated tada');
  }); **breaks side menu button** */
};
