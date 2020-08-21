var pagetop = $('.scroll-btn');

$(document).ready(function () {
  pagetop.hide();
});

$(window).scroll(function(){
  // スクロールが1000に達したらボタン表示
      if ($(this).scrollTop() > 1000) {
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });

  //スルスルっとスクロールでトップへもどる

  $(document).ready(function () {
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });
