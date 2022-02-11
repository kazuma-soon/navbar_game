$(function(){
  
  $.each((new Array(3)), function() { //繰り返しを指定する

    function move(){ //アニメーションをチェインで指定
      $('.js-btn-3')
      
      .animate({
        top: '300px',
      }, 1000, 'swing')

      .animate({
        top: '0', left: '90%', 
      }, 1000, 'swing')
      
      .animate({
        top: '300px', left: '90%',
      }, 1000, 'swing')
      
      .animate({
        top: '100px', left: '20%',
      }, 1000, 'swing')
      
      .delay(800)

      .animate({
        top: '250px', left: '60%',
      }, 1000, 'swing')

      .animate({
        top: '10px', left: '10%',
      }, 1000, 'swing')
    }
 
    move(); //定義した関数の実行

  });

  $('.js-btn-3').animate({ //アラートを出してゲームオーバー
    top: '0', left: '90%'
  },{
    duration: 2500,
    easing: 'swing',
    complete: function(){ //ページが変わってもアラートでてしまう。classをaddするか？
      $('.js-message-3').show();
    }
  })

});