$(function(){

// 「押せ」ボタンのアニメーション
  $.each((new Array(1)), function() {

    function move(){
      $('.js-btn-4')
      
      .animate({
        top: '10px', left: '70%'
      }, 500, 'swing')

      .animate({
        top: '400px', left: '5%', 
      }, 1000, 'swing')
      
      .delay(500)

      .animate({
        top: '400px', left: '70%',
      }, 500, 'swing')
      
      .animate({
        top: '100px', left: '50%',
      }, 500, 'swing')

      .animate({
        top: '350px', left: '0%',
      }, 1000, 'swing')

      .animate({
        top: '400px', left: '50%',
      }, 500, 'swing')

      .animate({
        top: '60px', left: '10%',
      }, 1000, 'swing')

      .delay(500)

      .animate({
        top: '400px', left: '50%',
      }, 500, 'swing')

      .animate({
        top: '0px', left: '70%',
      }, 1000, 'swing')

      .animate({
        top: '350px', left: '0%',
      }, 500, 'swing')
    }
 
    move();

  });

// 「押すな」ボタン１のアニメーション
  $.each((new Array(16)), function() {
    function badMove(){
      $('.js-bad-btn-4-1')
      .animate({
        top:  String(Math.random() * ( (400 + 1) - 0 ) + 0) + 'px',
        left: String(Math.random() * ( (60 + 1) - 0 ) + 0) + '%',
      }, 500, 'swing')
    }

    badMove();
  });

// 「押すな」ボタン２のアニメーション
  $.each((new Array(16)), function() {
    function badMove(){
      $('.js-bad-btn-4-2')
      .animate({
        top:  String(Math.random() * ( (400 + 1) - 0 ) + 0) + 'px',
        left: String(Math.random() * ( (60 + 1) - 0 ) + 0) + '%',
      }, 500, 'swing')
    }
  
    badMove();
  }); 

// 「押すな」ボタン３のアニメーション
  $.each((new Array(16)), function() {
    function badMove(){
      $('.js-bad-btn-4-3')
      .animate({
        top:  String(Math.random() * ( (400 + 1) - 0 ) + 0) + 'px',
        left: String(Math.random() * ( (60 + 1) - 0 ) + 0) + '%',
      }, 500, 'swing')
    }
  
    badMove();
  }); 

// 「押せ」ボタンの着地
  $('.js-btn-4').animate({ //アラートを出してゲームオーバー
    top: '0', left: '60%'
  },{
    duration: 1000,
    easing: 'swing',
    complete: function(){ //ページが変わってもアラートでてしまう。classをaddするか？
      $('.js-message-4').show();
    }
  })

// 「押すな」ボタン１の着地
  $('.js-bad-btn-4-1').animate({
    top: '100px', left: '45%'
  }, 1000, 'swing')

// 「押すな」ボタン２の着地
  $('.js-bad-btn-4-2').animate({
    top: '250px', left: '45%'
  }, 1000, 'swing')

// 「押すな」ボタン３の着地
  $('.js-bad-btn-4-3').animate({
    top: '350px', left: '45%'
  }, 1000, 'swing')

});