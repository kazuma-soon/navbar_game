$(function(){
  
  $.each((new Array(5)), function() { //繰り返しを指定する

    function move(){ //アニメーションをチェインで指定
      $('.js-btn-1')
      
      .animate({
        left: '90%',
      }, 2500, 'swing')

      .animate({
        left: '0%'
      }, 2500, 'swing')

    }
 
    move(); //定義した関数の実行

  });

  $('.js-btn-1').animate({ //アラートを出してゲームオーバー
    left: '90%'
  },{
    duration: 2500,
    easing: 'swing',
    complete: function(){ //ページが変わってもアラートでてしまう。classをaddするか？
      //if (confirm('だめじゃーん')) {
        //window.location.href = "/";
      //};


    }
  })

});




