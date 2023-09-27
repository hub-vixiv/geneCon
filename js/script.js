/*******************************
 * バーガーボタンの表示・非表示
*/
$(function() {
    $('.open_btn').on('click',function(){// .menuをクリックすると〜
        $('.open_btn').toggleClass('active');
        $('.header_menu').toggleClass('active');

    });
});

/*******************************
 * 出てきたメニューをクリックした時
*/
$(function() {
  $('nav a').on('click',function(){// .menuをクリックすると〜
      $('.open_btn').toggleClass('active');
      $('.header_menu').toggleClass('active');
    });
});

/****************************
 * swiper
 */
const swiper = new Swiper(".swiper",{
  loop: true,
  effect: "fade", // フェード切り替え
  // 自動再生
  autoplay: {
    delay: 4000, // 4秒後に次のスライドへ
    disableOnInteraction: false, // ユーザーが操作しても自動再生を継続
  },
  speed: 2000, // 2秒かけてフェード
});

/***************************
 * スムーズスクロール
 */
var headerHeight = $('.header').outerHeight();
$('a[href^="#"]').click(function() {
    var href= $(this).attr("href");
    var target = $(href);
    var position = target.offset().top - headerHeight;
    $('body,html').stop().animate({scrollTop:position}, 300);   
    return false;
});

/*******************************
 * ヘッダーを途中で表示
 */
$(function() {
  // 変数にクラスを入れる
    var header = $('.header');
    var windowHeight = $(window).height();
    //スクロールしてファーストビューを過ぎるころメニューを表示
      $(window).on('load scroll', function(){
        if($(this).scrollTop() > windowHeight-350) {
          header.addClass('fixed');
          $('.header').addClass('fixed');
          $('.open_btn').addClass('fixed');
          $('.header_left').addClass('active')
        }else{
          header.removeClass('fixed');
          $('.header').removeClass('fixed');
          $('.open_btn').removeClass('fixed');
          $('.header_left').removeClass('active')
        }
      });
  });
  
/****************************
 * ふわっと表示
 */
function scroll_fade_in(){
    $('.fade_item').each(function(){ //fadeupというクラス名が
      var elemPos = $(this).offset().top-0;//要素より、60px上の位置
      var scroll = $(window).scrollTop(); //スクロールした距離
      var windowHeight = $(window).height();//ウィンドウの高さ
      if (scroll >= elemPos - windowHeight){
        $(this).addClass('fade_active')
      }
    });
}
/*************************
 * 左からスライドイン
 */
function scroll_slide_in_from_left(){
    $('.fade_item_left').each(function(){ //fadeupというクラス名が
      var elemPos = $(this).offset().top+60;//要素より、60px上の位置
      var scroll = $(window).scrollTop(); //スクロールした距離
      var windowHeight = $(window).height();//ウィンドウの高さ
      if (scroll >= elemPos - windowHeight){
        $(this).addClass('fade_active')
      }
    });
}
/*************************
 * 右からスライドイン
 */
function scroll_slide_in_from_right(){
    $('.fade_item_right').each(function(){ //fadeupというクラス名が
      var elemPos = $(this).offset().top+60;//要素より、60px上の位置
      var scroll = $(window).scrollTop(); //スクロールした距離
      var windowHeight = $(window).height();//ウィンドウの高さ
      if (scroll >= elemPos - windowHeight){
        $(this).addClass('fade_active')
      }
    });
}


  // 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
    scroll_fade_in();
    scroll_slide_in_from_left();
    scroll_slide_in_from_right();
  
  });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
$(window).on("load", function() {
    $('.fade_onload').fadeIn(2000); 
});