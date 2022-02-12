$(function(){
  
  $.each((new Array(3)), function() { //繰り返しを指定する

    function move(){ //アニメーションをチェインで指定
      $('.js-btn-2')
      
      .animate({
        left: '45%',
      }, 1000, 'swing')

      .animate({
        left: '15%'
      }, 1000, 'swing')

      .animate({
        left: '70%',
      }, 1000, 'swing')
      
      .animate({
        left: '45%',
      }, 1000, 'swing')
      
      .animate({
        left: '70%',
      }, 1000, 'swing')
      
      .animate({
        left: '0%',
      }, 1000, 'swing')

    }
 
    move(); //定義した関数の実行

  });

  $('.js-btn-2').animate({ //アラートを出してゲームオーバー
    left: '70%'
  },{
    duration: 2500,
    easing: 'swing',
    complete: function(){ 
      window.location.href = "/plays/timeout";
    }
  })

});
