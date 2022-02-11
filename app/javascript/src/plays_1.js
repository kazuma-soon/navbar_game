$(function(){
  
  $.each((new Array(5)), function() { //繰り返しを指定する

    function move(){ //アニメーションをチェインで指定
      $('.js-btn')
      
      .animate({
        left: '90%',
      }, 2500, 'swing')

      .animate({
        left: '0%'
      }, 2500, 'swing')

    }
 
    move(); //定義した関数の実行

  });

  $('.js-btn').animate({ //アラートを出してゲームオーバー
    left: '90%'
  },{
    duration: 2500,
    easing: 'swing',
    complete: function(){ //アラート出して、'/' に遷移
      if (confirm('だめじゃーん')) {
        window.location.href = "/";
      };


    }
  })

});




