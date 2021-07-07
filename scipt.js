
/*=================================================
ヘッダースクロール時にヘッダーに背景色つける(hero経過後)
===================================================*/
var
$win = $(window),
$header = $('.header'),
$hero = $('.hero'),
heroHeight = $hero.outerHeight();

$win.on('load scroll', function () {
  var value = $(this).scrollTop();
  if ($win.width() > 0) {
    if (value > heroHeight) {
      $header.addClass('scrollcolor');
    } else {
      $header.removeClass('scrollcolor');
    }
  }
});


/*=================================================
ハンバーガーメニュー
===================================================*/

$('.btn-trigger').on('click', function () {
  $('.btn-trigger').toggleClass('close');
  $('.header-right').toggleClass('slide-in');
  $('.global-nav',).toggleClass('slide-in');
  $('body').toggleClass('noscroll');
});

/*=================================================
メニューオープン時
===================================================*/

$('.global-nav').on('click', function () {
  $('.btn-trigger').toggleClass('close');
  $('.header-right').toggleClass('slide-in');
  $('.global-nav',).toggleClass('slide-in');
});




/*=================================================
AOS
===================================================*/
AOS.init({
  offset: 120,
  delay: 100,
  duration: 2000,
  easing: 'ease-in',
  once: true,
});


/*=================================================
swiperの設定
===================================================*/
let swipeOption = {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 2000,
}
new Swiper('.swiper-container', swipeOption);



/*=================================================
お問い合わせ完了メッセージ
===================================================*/


$(document).ready(function () {

  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScvNaD0qADTaqsRYq5RLXvDttLIzAWduSdHgucUv7g77YAbTA/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".submit-btn").fadeOut();
          //window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });

});
